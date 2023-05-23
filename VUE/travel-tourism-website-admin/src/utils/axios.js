/**
 * Custom axios instance
 */

import axios from 'axios'
const newAxios = axios.create({
  baseURL: process.env.VUE_APP_API_BASE,
  timeout: 5 * 1000, // 5s
  headers: {
    // 'X-Custom-Header': 'foobar',
    // 'Authorization': true,
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// 添加请求拦截器
newAxios.interceptors.request.use(function (config) {
  console.log(config);
  var arr = ['/admin/login','/admin/saveOrUpdateUser','/admin/saveOrUpdateAdmin','/file/uploadUser', '/file/upload', '/admin/findProvinceAll', '/car/listPage',
  '/car/findCarById', '/hotel/findHotelById', '/hotel/listPage', '/hotel/listHotelSpot', '/hotel/listSpotHote',
  '/insurance/findInsuranceById', '/insurance/listPage', '/notic/getByNoticById', '/notic/getByNoticAll', '/travelRoute/findById',
  '/travelRoute/listPage',]
  if (arr.indexOf(config.url.split('?')[0]) !== -1) {
    console.log(config.url)
    return config
  }
  //忽略 /admin/login接口
  // if (config.url == "/admin/login")
  // { return config }
  // if (config.url == "/file/upload") {
  //   return config
  // }
  // if (config.url == "/admin/saveOrUpdateUser")
  // { return config }
  // if (config.url == "/admin/findProvinceAll")
  // { return config }
  // if (config.url == "/car/listPage")
  // { return config }
  // if (config.url == "/car/findCarById")
  // { return config }
  // if (config.url == "/hotel/findHotelById")
  // { return config }
  // if (config.url == "/hotel/listPage")
  // { return config }
  // if (config.url == "/hotel/listHotelSpot")
  // { return config }
  // if (config.url == "/hotel/listSpotHotel")
  // { return config }
  // if (config.url == "/insurance/findInsuranceById")
  // { return config }
  // if (config.url == "/insurance/listPage")
  // { return config }
  // if (config.url == "/notic/getByNoticById")
  // { return config }
  // if (config.url == "/notic/getByNoticAll")
  // { return config }
  // if (config.url == "/travelRoute/findById")
  // { return config }
  // if (config.url == "/travelRoute/listPage")
  // { return config }
  
  config.headers = {
    ...config.headers,
    token: sessionStorage.getItem('token') 
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
newAxios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default newAxios