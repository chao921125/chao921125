const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'/',
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint检查
  
})

