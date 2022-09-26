// BMap
export default { // BMap
  path: '/baiduMap',
  name: 'BaiduMap',
  component: () => import('@/views/BaiduMap/index.vue'),
  meta: {
    navState: true,
    navName: '百度地图',
    icon: 'el-icon-location'
  },
  children: [
    {
      path: 'baiduMap-basic',
      name: 'BaiduMapBasic',
      component: () => import('@/views/BaiduMap/Basic/index.vue'),
      meta: {
        navState: true,
        navName: '基础',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'stated',
          name: 'Stated',
          component: () => import('@/views/BaiduMap/Basic/pages/Stated/Stated.vue'),
          meta: {
            navState: true,
            navName: '起步'
          }
        },
        {
          path: 'basic3D',
          name: 'Basic3D',
          component: () => import('@/views/BaiduMap/Basic/pages/3DMap/Basic3D.vue'),
          meta: {
            navState: true,
            navName: '基础3D地图'
          }
        },
        {
          path: '3DEarth',
          name: '3DEarth',
          component: () => import('@/views/BaiduMap/Basic/pages/3DMap/3DEarth.vue'),
          meta: {
            navState: true,
            navName: '3D 地球'
          }
        },
        {
          path: 'Control',
          name: 'Control',
          component: () => import('@/views/BaiduMap/Basic/pages/Control/Control.vue'),
          meta: {
            navState: true,
            navName: '控件'
          }
        },
        {
          path: 'CustomTheme',
          name: 'CustomTheme',
          component: () => import('@/views/BaiduMap/Basic/pages/CustomTheme/CustomTheme.vue'),
          meta: {
            navState: true,
            navName: '自定义主题'
          }
        },
        {
          path: 'draw-icon',
          name: 'DrawIcon',
          component: () => import('@/views/BaiduMap/Basic/pages/Layer/DrawIcon.vue'),
          meta: {
            navState: true,
            navName: '绘制图标'
          }
        },
        {
          path: 'draw-line',
          name: 'DrawLine',
          component: () => import('@/views/BaiduMap/Basic/pages/Layer/DrawLine.vue'),
          meta: {
            navState: true,
            navName: '绘制线段'
          }
        },
        {
          path: 'draw-polygon',
          name: 'DrawPolygon',
          component: () => import('@/views/BaiduMap/Basic/pages/Layer/DrawPolygon.vue'),
          meta: {
            navState: true,
            navName: '绘制多边形'
          }
        },
        {
          path: 'draw-label',
          name: 'DrawLabel',
          component: () => import('@/views/BaiduMap/Basic/pages/Layer/DrawLabel.vue'),
          meta: {
            navState: true,
            navName: '绘制文本'
          }
        },
        {
          path: 'draw-info-window',
          name: 'DrawInfoWindow',
          component: () => import('@/views/BaiduMap/Basic/pages/Layer/InfoWindow.vue'),
          meta: {
            navState: true,
            navName: '包含信息的窗口'
          }
        },
        {
          path: 'animation-view',
          name: 'AnimationView',
          component: () => import('@/views/BaiduMap/Basic/pages/Animation/ViewAnimation.vue'),
          meta: {
            navState: true,
            navName: '动画 ViewAnimation'
          }
        },
        {
          path: 'animation-track',
          name: 'TrackAnimation',
          component: () => import('@/views/BaiduMap/Basic/pages/Animation/TrackAnimation.vue'),
          meta: {
            navState: true,
            navName: '轨迹动画 TrackAnimation'
          }
        },
        {
          path: 'scatterDiagram',
          name: 'ScatterDiagram',
          component: () => import('@/views/BaiduMap/Basic/pages/ScatterDiagram/ScatterDiagram.vue'),
          meta: {
            navState: true,
            navName: '散点图'
          }
        },
        {
          path: 'flyLine',
          name: 'FlyLine',
          component: () => import('@/views/BaiduMap/Basic/pages/FlyLine/FlyLine.vue'),
          meta: {
            navState: true,
            navName: '飞线图'
          }
        },
        {
          path: 'flyLine2',
          name: 'FlyLine2',
          component: () => import('@/views/BaiduMap/Basic/pages/FlyLine/FlyLine2.vue'),
          meta: {
            navState: true,
            navName: '飞线图2'
          }
        },
        {
          path: '3DArchitecture',
          name: '3DArchitecture',
          component: () => import('@/views/BaiduMap/Basic/pages/3DArchitecture/3DArchitecture.vue'),
          meta: {
            navState: true,
            navName: '3D建筑'
          }
        },
        {
          path: '3DArchitecture2',
          name: '3DArchitecture2',
          component: () => import('@/views/BaiduMap/Basic/pages/3DArchitecture/3DArchitecture2.vue'),
          meta: {
            navState: true,
            navName: '3D建筑（墨卡托投影坐标）'
          }
        }
      ]
    }
  ]
}