import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// js
import Fastclick from 'fastclick'
Fastclick.attach(document.body);
import './assets/js/iconfont'

// css
import './assets/css/reset.css'
import './assets/css/iconfont.css'

// swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// axios
import axios from 'axios'
Vue.prototype.$http = axios

// 引入ui库 1
import WotDesign from 'wot-design'
import 'wot-design/lib/theme-default/index.css'
Vue.use(WotDesign)
// 引入ui库 2
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
