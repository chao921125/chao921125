/*
 * @Author: zi.yang
 * @Date: 2021-04-02 07:06:14
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-02 08:35:47
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\store\index.js
 */
import Vue from 'vue';

import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import state from './state';

Vue.use(Vuex);

export default new Vuex.Store({
  // view 层通过 $store.state 调用 city
  state,
  actions,
  mutations,
});
