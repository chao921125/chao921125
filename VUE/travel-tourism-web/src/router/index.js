import Vue from 'vue'
import Router from 'vue-router'
import hotel from '../components/hotel/hotel.vue'
import homepage from '../components/homepage.vue'
import loginUser from '../loginUser.vue'
import register from '../register.vue'
import hotel_detail from '../components/hotel/hotel_detail.vue'
import scenery from '../components/scenery/scenery.vue'
import foreign from '../components/scenery/foreign.vue'
import domestic from '../components/scenery/domestic.vue'
import scenery_detail from '../components/scenery/scenery_datail.vue'
import order from '../components/scenery/order.vue'
import hotelOrder from '../components/hotel/hotelOrder.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:'/homepage',
    },
    {
      path:'/homepage',
      component:homepage,
    },
    {
      //周边游分页
      path: '/scenery',
      component:scenery,

    },
    {
      //出境游分页
      path: '/foreign',
      component:foreign,

    },
    {
      //国内游分页
      path: '/domestic',
      component:domestic,

    },
    {
      //景点详情分页
      path: '/scenery_detail',
      component:scenery_detail,

    },
    {
      //景点订单分页
      path: '/order',
      component:order,   
    },
    {
      //酒店订单分页
      path: '/hotelOrder',
      component:hotelOrder,   
    },
    {
      //酒店分页
      path: '/hotel',
      component:hotel,

    },
    {
      //酒店详情页
      path: '/hotel_detail',
      component:hotel_detail,

    },
    {
      //登录页
      path:'/loginUser',
      name:'loginuser',
      component:()=>import('@/loginUser')
    },
    {
      //注册页
      path:'/register',
      name:'register',
      component:()=>import('@/register')
    },

  ]
})

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
