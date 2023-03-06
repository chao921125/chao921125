// css
export default {
  path: '/native',
  name: 'Native',
  component: () => import('@/views/Native/index.vue'),
  meta: {
    navState: true,
    navName: '原生',
    icon: 'el-icon-s-open'
  },
  children: [
    {
      path: 'pureCSS',
      name: 'PureCSS',
      component: () => import('@/views/Native/PureCSS/index.vue'),
      meta: {
        navState: true,
        navName: '纯CSS',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'batman',
          name: 'Batman',
          component: () => import('@/views/Native/PureCSS/pages/Batman/Batman.vue'),
          meta: {
            navState: true,
            navName: '蝙蝠侠'
          }
        },
        {
          path: 'gradientText',
          name: 'GradientText',
          component: () => import('@/views/Native/PureCSS/pages/GradientText/GradientText.vue'),
          meta: {
            navState: true,
            navName: '渐变文字'
          }
        },
        {
          path: 'zebraShadowText',
          name: 'ZebraShadowText',
          component: () => import('@/views/Native/PureCSS/pages/ZebraShadowText/ZebraShadowText.vue'),
          meta: {
            navState: true,
            navName: '斑马投影文字'
          }
        },
        {
          path: 'materialInput',
          name: 'MaterialInput',
          component: () => import('@/views/Native/PureCSS/pages/MaterialInput/MaterialInput.vue'),
          meta: {
            navState: true,
            navName: 'Material风格输入框'
          }
        },
        {
          path: 'carousel',
          name: 'Carousel',
          component: () => import('@/views/Native/PureCSS/pages/Carousel/Carousel.vue'),
          meta: {
            navState: true,
            navName: '走马灯（手动控制）'
          }
        },
        {
          path: 'tapeEdge',
          name: 'TapeEdge',
          component: () => import('@/views/Native/PureCSS/pages/TapeEdge/TapeEdge.vue'),
          meta: {
            navState: true,
            navName: '缝边边框'
          }
        },
        {
          path: 'multilayerBorder',
          name: 'MultilayerBorder',
          component: () => import('@/views/Native/PureCSS/pages/MultilayerBorder/MultilayerBorder.vue'),
          meta: {
            navState: true,
            navName: '多重边框'
          }
        },
        {
          path: 'filletedCorner',
          name: 'FilletedCorner',
          component: () => import('@/views/Native/PureCSS/pages/FilletedCorner/FilletedCorner.vue'),
          meta: {
            navState: true,
            navName: '内圆角'
          }
        },
        {
          path: 'parallelogram',
          name: 'Parallelogram',
          component: () => import('@/views/Native/PureCSS/pages/Parallelogram/Parallelogram.vue'),
          meta: {
            navState: true,
            navName: '平行四边形'
          }
        },
        {
          path: 'frostedGlass',
          name: 'FrostedGlass',
          component: () => import('@/views/Native/PureCSS/pages/FrostedGlass/FrostedGlass.vue'),
          meta: {
            navState: true,
            navName: '毛玻璃'
          }
        },
        {
          path: 'photoFrame',
          name: 'PhotoFrame',
          component: () => import('@/views/Native/PureCSS/pages/PhotoFrame/PhotoFrame.vue'),
          meta: {
            navState: true,
            navName: '相框'
          }
        },
        {
          path: 'turnBorder',
          name: 'TurnBorder',
          component: () => import('@/views/Native/PureCSS/pages/TurnBorder/TurnBorder.vue'),
          meta: {
            navState: true,
            navName: '旋转边框'
          }
        },
        {
          path: 'loading',
          name: 'Loading',
          component: () => import('@/views/Native/PureCSS/pages/Loading/Loading.vue'),
          meta: {
            navState: true,
            navName: 'Loading'
          }
        },
        {
          path: 'GradientBGAnimation',
          name: 'GradientBGAnimation',
          component: () => import('@/views/Native/PureCSS/pages/GradientBGAnimation/GradientBGAnimation.vue'),
          meta: {
            navState: true,
            navName: '动态渐变背景'
          }
        },
        {
          path: 'BorderAnimation',
          name: 'BorderAnimation',
          component: () => import('@/views/Native/PureCSS/pages/BorderAnimation/BorderAnimation.vue'),
          meta: {
            navState: true,
            navName: '边框动画'
          }
        }
      ]
    },
    {
      path: 'threePiece',
      name: 'ThreePiece',
      component: () => import('@/views/Native/ThreePiece/index.vue'),
      meta: {
        navState: true,
        navName: '三件套',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'parallax',
          name: 'Parallax',
          component: () => import('@/views/Native/ThreePiece/pages/Parallax/Parallax.vue'),
          meta: {
            navState: true,
            navName: '视差效果'
          }
        },
      ]
    }
  ]
}