/**
 * 路由入口
 */
import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "@/plugins/loading/progress";

export const router = createRouter({
	history: createWebHashHistory(),
	routes: [{
		path: "/:path(.*)*",
		name: "redirect",
		redirect: "/404",
		meta: {
			isHide: true,
		},
	},
	{
		path: "/:pathMatch(.*)*",
		name: "redirect",
		redirect: "/404",
		meta: {
			isHide: true,
		},
	},
  {
		path: "",
		name: "",
    redirect: "/",
	},
  {
		path: "/",
		name: "/",
    redirect: "/home",
	},
  {
    path: "/home",
		name: "home",
		component: () => import("@/views/Home.vue"),
		meta: {
			title: "home",
			name: "home",
			isHide: false,
		},
  },
	{
		path: "/404",
		name: "notFound",
		component: () => import("@/views/error/404.vue"),
		meta: {
			title: "404",
			name: "404",
			isHide: true,
		},
	}],
	strict: false,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 路由加载前
router.beforeEach(async (to, from, next) => {
    NProgress.start();
    next();
});

// 路由加载后，关闭loading
router.afterEach(() => {
	NProgress.done();
});

export default router;
