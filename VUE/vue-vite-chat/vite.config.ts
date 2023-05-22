import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "#": path.resolve(__dirname, "./types"),
    },
  },
  css: {
    preprocessorOptions: {
      css: { charset: false },
      less: {
        javascriptEnabled: true,
      },
      scss: {
        javascriptEnabled: true,
        additionalData: `@import "@/assets/styles/global.scss";`,
      },
    },
  },
});
