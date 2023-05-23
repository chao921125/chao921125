/*
 * @Author: zi.yang
 * @Date: 2021-03-30 07:51:18
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-08 00:00:50
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\main.js
 */
// 统一各类浏览器默认样式显示不一致问题
import '@styles/reset.css';
// 统一手机端1px边框2倍像素问题
import '@styles/border.css';
import '@styles/iconfont.css';
import 'swiper/dist/css/swiper.min.css';
import 'babel-polyfill';

import Vue from 'vue';

// 处理手机端点击事件300毫秒延迟问题
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import store from '@store';

import App from './App.vue';
// 路由就是根据网址的不同，返回不同的内容给用户
import router from './router';

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
