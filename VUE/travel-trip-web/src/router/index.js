import Vue from 'vue'
import VueRouter from 'vue-router'
import Mine from '@/views/Mine'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import SightList from '@/views/sight/SightList.vue'
import SightDeatail from '@/views/sight/SightDeatail.vue'
import SightComment from '@/views/sight/SightComment.vue'
import SightImage from '@/views/sight/SightImage.vue'
import SightInfo from '@/views/sight/SightInfo.vue'
import AccountLogin from '@/views/accounts/Login.vue'
import AccountRegister from '@/views/accounts/Register.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  // 个人中心
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  // 景点列表
  {
    path: '/sight/list',
    name: 'SightList',
    component: SightList
  },
  // 景点详情
  {
    path: '/sight/detail/:id',
    name: 'SightDeatail',
    component: SightDeatail
  },
  // 景点介绍
  {
    path: '/sight/info/:id',
    name: 'SightInfo',
    component: SightInfo
  },
  // 评论列表
  {
    path: '/sight/comment/:id',
    name: 'SightComment',
    component: SightComment
  },
  // 景点图片
  {
    path: '/sight/image/:id',
    name: 'SightImage',
    component: SightImage
  },
  // 用户登录
  {
    path: '/account/login',
    name: 'AccountLogin',
    component: AccountLogin
  },
  // 提交订单
  {
    path: '/order/submit/:id',
    name: 'OrderSubmit',
    component: () => import('@/views/order/Submit.vue')
  },
  // 确认订单并支付
  {
    path: '/order/pay/:sn',
    name: 'OrderPay',
    component: () => import('@/views/order/Pay.vue')
  },
  // 我的订单列表
  {
    path: '/order/list/:status',
    name: 'OrderList',
    component: () => import('@/views/order/List.vue')
  },


  // 用户注册
  {
    path: '/account/register',
    name: 'AccountRegister',
    component: AccountRegister
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
