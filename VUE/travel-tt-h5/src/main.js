// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/style/reset.css"
import "./assets/style/border.css"
import fastClick from "fastclick"
import "./assets/js/rem.js"
import "./assets/style/iconfont.css"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from "./store"
// import style
import 'swiper/css/swiper.css'



Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */);
fastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
