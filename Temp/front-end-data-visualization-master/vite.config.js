import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/front-end-data-visualization/', // 部署到码云的仓库名，部署时用到
  plugins: [vue()],
  server: { // https://cn.vitejs.dev/config/#server-options
    host: '0.0.0.0'
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }] // https://cn.vitejs.dev/config/#resolve-alias
  },
  build: {
    chunkSizeWarningLimit: 5000
  }
})
