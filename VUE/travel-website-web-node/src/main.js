import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//vue路由跳转后页面定位到顶部
router.afterEach((to,from,next) => {
	document.body.scrollTop =0;
	document.documentElement.scrollTop = 0;
});

createApp(App).use(store).use(router).use(VueAxios, axios).use(ElementPlus).mount('#app')



