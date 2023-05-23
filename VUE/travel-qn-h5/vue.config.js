/*
 * @Author: zi.yang
 * @Date: 2021-03-30 08:11:39
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-08 00:21:37
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\vue.config.js
 */
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/travel/' : '/',
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@styles', resolve('src/assets/styles'))
      .set('@images', resolve('src/assets/images'))
      .set('@components', resolve('src/components'))
      .set('@pages', resolve('src/pages'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@common', resolve('src/common'));
  },
  devServer: {
    hot: true,
    open: 'firefox',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        // 请求转发
        pathRewrite: {
          '^/api': '/mock',
        },
        changeOrigin: true,
      },
    },
  },
};
