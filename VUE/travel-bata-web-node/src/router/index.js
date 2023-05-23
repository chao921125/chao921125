import Vue from 'vue'
import Router from 'vue-router'
// import Goodfalls from '@/components/Goodfalls'
import Home from '@/components/Home'
import Second from '@/components/Second'
import Three from '@/components/Three'
import Source from '@/components/Source'
// import tarbartemplate from '@/components/Appcomponets/tarbartemplate'
import login from '@/components/login.vue'
import register from '@/components/register.vue'
import admin from '@/components/admin.vue'
import sourcedetail from '@/components/sourcedetail.vue'


Vue.use(Router)

// export default new Router({
const routes = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/login',
    name: '登陆',
    component: login,
  },
  {
    path: '/register',
    name: '注册',
    component: register,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children:[
      
    ]
  },
  {
    path: '/Second',
    name: 'Second',
    component: Second
  },
  {
    path: '/Three',
    name: 'Three',
    component: Three
  },
  {
    path: '/Source',
    name: 'Source',
    component: Source,
    children: [
      
    ],
  },
  {
    path:'/sourcedetail',
    name:'sourcedetail',
    component: sourcedetail,
  },
  
  // {
  //   path:'/tarbartemplate',
  //   name:'tarbartemplate',
  //   component:tarbartemplate
  // },
  {
    path: '/admin',
    name: '管理员',
    meta: {
      requireAuth: true, // 判断是否需要登录
    },
    component: admin,
  },
  {
    path: '*',
    redirect: '/login',
    hidden: true
  },
]
// })
const VueRouter = new Router({
  routes,
})
// 解决重复点击导航时，控制台出现报错
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}


// 前端路由响应访问界面
VueRouter.beforeEach((to, from, next) => {
  if (to.matched.some((r) => r.meta.requireAuth)) {
    let user = JSON.parse(sessionStorage.getItem('username'));
    if (user) { //判断是否已经登录 如果登陆了下一步 否则跳转登陆界面
      // console.log('这是通过拦截后到处理', from);
      next();
    } else {
      next({
        path: '/login', //登录成功后重定向到当前页面
        query: {
          redirect: to.fullPath
        },
      });
    }
  } else {
    // console.log('每个路由在做拦截判断'); //没有就执行这一条
    next();
  }
  //如果缓存中 存在 token 则 不允许直接跳转到 登录页面
  if (to.fullPath === "/login" || to.fullPath === "/Login") {
    if (sessionStorage.getItem('username')) {
      // console.log('重定向回当前界面')
      // next({
      //   path: from.fullPath
      // });
      next();
    } else {
      next();
    }
  } else if (to.fullPath === "/Home" || to.fullPath === "/home") {
    if (sessionStorage.getItem('username') === '"admin"') {
      // console.log('重定向回当前界面')
      next({
        path: from.fullPath
      });
    }
  } else if (to.fullPath === "/Second" || to.fullPath === "/second") {
    if (sessionStorage.getItem('username') === '"admin"') {
      // console.log('重定向回当前界面')
      next({
        path: from.fullPath
      });
    }
  } else if (to.fullPath === "/Three" || to.fullPath === "/three") {
    if (sessionStorage.getItem('username') === '"admin"') {
      // console.log('重定向回当前界面')
      next({
        path: from.fullPath
      });
    }
  } else if (to.fullPath === "/Source" || to.fullPath === "/source") {
    if (sessionStorage.getItem('username') === '"admin"') {
      // console.log('重定向回当前界面')
      next({
        path: from.fullPath
      });
    }
  } else if (to.fullPath === "/Register" || to.fullPath === "/register") {
    if (sessionStorage.getItem('username') === '"admin"') {
      // console.log('重定向回当前界面')
      next({
        path: from.fullPath
      });
    }
  }

})
export default VueRouter
