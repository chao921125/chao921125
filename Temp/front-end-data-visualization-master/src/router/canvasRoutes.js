// Canvas
export default {
  path: '/canvas',
  name: 'Canvas',
  component: () => import('@/views/Canvas/index.vue'),
  meta: {
    navState: true,
    navName: 'Canvas',
    icon: 'el-icon-data-board'
  },
  children: [
    {
      path: 'canvas-demo',
      name: 'CanvasDemo',
      component: () => import('@/views/Canvas/Demo/index.vue'),
      meta: {
        navState: true,
        navName: 'Demo',
        icon: 'el-icon-sugar'
      },
      children: [
        {
          path: 'canvas-demo-bubble',
          name: 'CanvasDemoBubble',
          component: () => import('@/views/Canvas/Demo/pages/Bubble/Bubble.vue'),
          meta: {
            navState: true,
            navName: '泡泡'
          }
        }
      ]
    }
  ]
}