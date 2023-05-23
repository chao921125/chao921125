import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //New Added
import {
  Message
} from "element-ui"
import iView from 'iview'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import '../config/axios_request_response'
import AMapLoader from "@amap/amap-jsapi-loader";

//import store from './store'
// import VueAMap from 'vue-amap'

Vue.use(iView)

Vue.use(AMapLoader)
// Vue.use(VueAMap)

Vue.prototype.$axios = axios //添加axios

Vue.use(axios)

Vue.use(ElementUI) //New Added

// VueAMap.initAMapApiLoader({
//   // 高德的key
//   key: '8855e81b619a3ba7eeea6edd4916aba7',
//   // 插件集合
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',
//     'AMap.PolyEditor', 'AMap.CircleEditor'
//   ],
//   // 高德 sdk 版本，默认为 1.4.4
//   v: '1.4.4'
// });

Vue.prototype.$message = Message //把Message的属性传递给 this.$message 之后使用this.$message调用element的Message

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  //store,//挂载
  render: h => h(App)
})
