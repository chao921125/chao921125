// vue.config.js
const path = require('path')
module.exports = {

  // pluginOptions: {
  //   "style-resources-loader": {
  //     preProcessor: "less",
  //     patterns: [path.resolve(__dirname, "src/global.less")]
  //   }
  // },

  devServer: {
    proxy: {
      '/api': {
        // target: 'http://localhost:8000',
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 需要rewrite重写的URL
        }

      }
    },
    // lintOnSave: false,
    overlay: {
      warning: false,
      errors: false
    }
    // lintOnSave: false
  }

}
