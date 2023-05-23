/*
 * @Author: zi.yang
 * @Date: 2021-04-02 08:00:37
 * @LastEditors: zi.yang
 * @LastEditTime: 2022-10-29 00:52:32
 * @Description: In User Settings Edit
 * @FilePath: /vue-travel/src/store/state.js
 */
import storage from '../utils/storage';

let defaultCity = storage.get('city') || '上海';

export default {
  city: defaultCity,
};
