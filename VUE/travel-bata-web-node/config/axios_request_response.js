import axios from 'axios'

// 配置默认的host,假如你的API host是：http://api.htmlx.club
//axios.defaults.baseURL = 'http://127.0.0.1:5000'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
　　// 在发送请求之前做些什么

    config.headers['Access-Control-Allow-Origin'] ='http://127.0.0.1';
    // config.headers['Content-Type'] = "application/x-www-form-urlencoded";
    //config.headers['Content-Type'] = "application/json";
    

    return config
}, function (error) {
　　// 对请求错误做些什么
    return Promise.reject(error)
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
　　// 对响应数据做点什么

　　return response
}, function (error) {
　　// 对响应错误做点什么
　　return Promise.reject(error)
});
