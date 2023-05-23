import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import router from '@/router/index';

// 创建axios实例
// 请求拦截器
var baseURL

//baseURL = process.env.VUE_APP_API //每个环境所对应的不同的baseURL
baseURL = "http://127.0.0.1:5000"

const service = axios.create({
  baseURL: baseURL,
  timeout: 300000,
    // 链接超时  当发送时间超过300秒就不再发送了
    // 若网速过慢发送不成功就会报错
  headers: {
    'Cache-Control': 'no-cache',
    // 'Content-Type': 'application/json; charset=utf-8',
  }
});

// request求情拦截器
service.interceptors.request.use(config => {

  config.headers['token'] = localStorage.getItem('token') || '';
  //某些接口去除token(params里面noToken值为true的时候,传递给后端的token值为空)
  if (config.params && config.params.noToken) {
    config.headers['token'] = '';
  }

  //非表单提交
  if (config.headers['Content-Type'].indexOf('multipart/form-data') < 0) {
    config.data = { ...config.data, _t: Date.now() };

    //api参数统一用data，get方法把它赋值到params
    if (config.method.toLowerCase() === 'get') {
      config.params = config.data || {};
    }
  }

  return config;

}, error => {
  alert("请求拦截失败!")
});



// response响应拦截器
service.interceptors.response.use(response => {
  /**
   * response.data对象是服务器返回结果对象
   * code: 200-成功，400-失败，401-重新登录，403-未认证，404-接口不存在，500-服务器内部错误
   */


  /**
   * 打印错误信息
   * console.log(error.request);
   * console.log(error.response);
   */

  const res = response.data || {};

  if (res.code === 200 || res.code === 501 || res.code === 502) {
    return Promise.resolve(res);
  }
  else if (response.status === 200 && response.data instanceof Blob) {
    return Promise.resolve(res);
  }
  else {
    return handleResponseError(res, res.message);
  }

},
  (error) => {
    const res = (error.response || {}).data || {};
    const message = res.code ? res.message : error.message;

    return handleResponseError(res, message);
  }
);

let loginModal = false; //重复弹出要屏蔽
/**
 * 处理响应错误
 * res: 服务器返回对象
 * message: 错误信息
 */
const handleResponseError = ((res, message) => {
  //需要重新登录
  if (res && res.code && (res.code === 401 || res.code === 403)) {
    if (loginModal) {
      return;
    }
    loginModal = true;
    setTimeout(() => {
      loginModal = false;
    }, 5000);


    let msg = res.code === 401 ? '检测到你的账号异常，请联系管理员' : '你的登录凭证已过期，可以取消继续留在该页面，或者重新登录';
    MessageBox.confirm(msg, '重新登录', {
      closeOnClickModal: false,
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(() => {

      router.replace({ name: 'login' });

    }).catch(() => {

    });

  }
  else if (res.code === 403) //无权限
  {
    Message({
      message: message || '无权访问',
      type: 'error',
      duration: 3 * 1000
    });

    //router.replace({name:'404'});
  }
  else {
    Message({
      message: message || '请求失败,请稍后重试',
      type: 'error',
      duration: 3 * 1000
    });
  }

  return Promise.reject(res);

});

export default service;
