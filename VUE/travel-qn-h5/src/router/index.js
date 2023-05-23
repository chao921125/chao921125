/*
 * @Author: zi.yang
 * @Date: 2021-03-30 08:13:04
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-08 07:23:48
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\router\index.js
 */
import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router);
/**
 * 如果 打包后的 js 文件不大的情况下，没有必要异步加载组件
 * 而且，额外发起一次 http 请求的代价远比首页请求一次稍大的js文件大得多
 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/City.vue'),
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/Detail.vue'),
    },
  ],
  // 处理切换路由后，页面不会到最顶部的问题
  scrollBehavior(/*to, from, savedPosition*/) {
    return { x: 0, y: 0 };
  },
});
