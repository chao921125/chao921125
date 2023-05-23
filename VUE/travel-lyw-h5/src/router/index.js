import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Bandan from '@/components/bandan/Bandan'
import ZiJi from '@/components/my/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/bandan',
      name: 'Bandan',
      component: Bandan
    },
    {
      path: '/my',
      name: 'ZiJi',
      component: ZiJi
    }
  ]
  })