import { createApp } from "vue";
import App from "./App.vue";

let app = createApp(App);


import Router from "@/router";
app.use(Router);

// UI
// element
import ElementPlus, { ElMessage, ElMessageBox, ElNotification } from "element-plus";
import * as Icons from "@element-plus/icons-vue";
// 按需引入解决Message等样式失效，需引入
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
app.use(ElementPlus);

// 全局组件 已通过autoimport实现自动全局引入，无需这里自动指定，对应的目录为src/components/*
// 注册element Icons组件
Object.keys(Icons).forEach((key) => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

// 自定义样式
import "@/assets/styles/index.scss";

app.mount("#app");
