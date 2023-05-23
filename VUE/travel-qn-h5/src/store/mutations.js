/*
 * @Author: zi.yang
 * @Date: 2021-04-02 08:02:06
 * @LastEditors: zi.yang
 * @LastEditTime: 2022-10-29 00:33:03
 * @Description: In User Settings Edit
 * @FilePath: /vue-travel/src/store/mutations.js
 */
import storage from '../utils/storage';

export default {
  // 当数据中不存在异步操作，则可以省略actions,在view中直接调用 commit
  changeCity(state, city) {
    // mutation 改变 state
    state.city = city;
    storage.set({ city });
  },
};
