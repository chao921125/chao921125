import nativeRoutes from './nativeRoutes.js'
import svgRoutes from './svgRoutes.js'
import canvasRoutes from './canvasRoutes.js'
import echartsRoutes from './echartsRoutes.js'
import bmapRoutes from './bmapRoutes.js'
import olRoutes from './olRoutes.js'
import threeRoutes from './threeRoutes.js'
import fabricRoutes from './fabricRoutes.js'
import Home from '@/views/Home/index.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  nativeRoutes,
  svgRoutes,
  canvasRoutes,
  echartsRoutes,
  bmapRoutes,
  olRoutes,
  threeRoutes,
  fabricRoutes,
  { // 404
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound/NotFound.vue')
  }
]