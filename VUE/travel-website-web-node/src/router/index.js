import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main-column',
    component: () => import('../views/main-column.vue'),
    children:[
      {
        path: '',
        name:'index',
        component: () => import('../components/index-main.vue')
      },

      {
        path: 'user-main',
        name: 'user-main',
        component: () => import('../components/user/user-main.vue'),
        children:[
          {
            path: 'user-info',
            name: 'user-info',
            component: () => import('../components/user/user-info.vue')
          },
          {
            path: 'user-collection',
            name: 'user-collection',
            component: () => import('../components/user/user-collection.vue')
          },
          {
            path: 'user-go',
            name: 'user-go',
            component: () => import('../components/user/user-go.vue')
          }
        ]
      },

      {
        path:'citySpot',
        name: 'citySpot',
        component: () => import('../components/citySpot.vue')
      },
      {
        path: 'cityInfo',
        name: 'cityInfo',
        component: () => import('../components/cityInfo.vue')
      },
      {
        path: 'purchase',
        name: 'purchase',
        component: () => import('../components/purchase.vue')
      }
    ]
  },

  {
    path: '/login',
    name: 'user-login',
    component: () => import('../components/user/user-login.vue')
  },
  {
    path: '/register',
    name: 'user-register',
    component: () => import('../components/user/user-register.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(), //hash模式
  routes
})

export default router
