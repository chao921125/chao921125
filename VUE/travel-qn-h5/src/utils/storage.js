/*
 * @Author: zi.yang
 * @Date: 2022-10-29 00:39:48
 * @LastEditors: zi.yang
 * @LastEditTime: 2022-10-29 00:56:07
 * @Description: 
 * @FilePath: /vue-travel/src/utils/storage.js
 */

let enable = 'Not-verified';

/**
 * 校验浏览器是否支持 localStorage
 * @param { Object } storage window.localStorage 对象
 * @returns { Boolean }
 * 如果用户关闭了存储功能，或者进入隐身模式，那么调用 localStorage 可能会爆错
 */
function testStorage(storage) {
  const testStr = '__TEST_LOCAL_STORAGE__';
  try {
    storage.setItem(testStr, testStr);
    const isOK = testStr === storage.getItem(testStr);
    storage.removeItem(testStr);
    return isOK;
  } catch (err) {
    return false;
  }
}

/**
 * 初始化 localStorage 实例
 * @returns { Object } window.localStorage
 */
function storage() {
  const store = window.localStorage;

  // 不重复校验
  if (enable && enable !== 'Not-verified') {
    return store;
  }
  // 校验 浏览器是否支持 storage
  if (testStorage(store)) {
    enable = true;
    return store;
  }
  // 浏览器不支持 storage
  enable = false;
  throw new Error('您的浏览器不支持 localStorage!');
}

/**
 * 设置存储的键值对
 * @param { Object } obj 存储对象: { city: city }
 */
function set(obj) {
  const key = Object.keys(obj)[0]
  const value = obj[key]
  storage().setItem(key, JSON.stringify(value));
}

/**
 * 获取指定存储内容
 * @param { String } key 存储键
 * @param { Function } success 数据查找成功后执行回调函数
 * @param { Function } error 数据没有找到后执行回调函数
 */
function get(key) {
  try {
    return JSON.parse(storage().getItem(key));
  } catch (e) {
    console.error(e)
    return null
  }
}

export default { get, set };
