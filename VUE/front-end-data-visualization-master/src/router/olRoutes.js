// OpenLayers
export default {
  path: '/openlayers',
  name: 'OpenLayers',
  component: () => import('@/views/OpenLayers/index.vue'),
  meta: {
    navState: true,
    navName: 'OpenLayers',
    icon: 'el-icon-map-location'
  },
  children: [
    {
      path: 'ol-basic',
      name: 'OpenLayersBasic',
      component: () => import('@/views/OpenLayers/Basic/index.vue'),
      meta: {
        navState: true,
        navName: '基础',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'ol-stated',
          name: 'olStated',
          component: () => import('@/views/OpenLayers/Basic/pages/Stated/Stated.vue'),
          meta: {
            navState: true,
            navName: '起步'
          }
        },
        {
          path: 'ol-popup',
          name: 'olPopup',
          component: () => import('@/views/OpenLayers/Basic/pages/Popup/Popup.vue'),
          meta: {
            navState: true,
            navName: '弹窗 popup'
          }
        },
        {
          path: 'ol-zoom',
          name: 'olZoom',
          component: () => import('@/views/OpenLayers/Basic/pages/Zoom/Zoom.vue'),
          meta: {
            navState: true,
            navName: '缩放 zoom'
          }
        },
        {
          path: 'ol-tabIndex',
          name: 'olTabIndex',
          component: () => import('@/views/OpenLayers/Basic/pages/TabIndex/TabIndex.vue'),
          meta: {
            navState: true,
            navName: '点击激活地图 tabIndex'
          }
        },
        {
          path: 'ol-changeTarget',
          name: 'olChangeTarget',
          component: () => import('@/views/OpenLayers/Basic/pages/ChangeTarget/ChangeTarget.vue'),
          meta: {
            navState: true,
            navName: '切换地图容器'
          }
        },
        {
          path: 'ol-synchronization',
          name: 'olSynchronization',
          component: () => import('@/views/OpenLayers/Basic/pages/Synchronization/Synchronization.vue'),
          meta: {
            navState: true,
            navName: '同步两个地图'
          }
        },
        {
          path: 'ol-preloadMap',
          name: 'olPreloadMap',
          component: () => import('@/views/OpenLayers/Basic/pages/PreloadMap/PreloadMap.vue'),
          meta: {
            navState: true,
            navName: '预加载 preload'
          }
        },
        {
          path: 'ol-vectorJSON',
          name: 'olVectorJSON',
          component: () => import('@/views/OpenLayers/Basic/pages/VectorJSON/VectorJSON.vue'),
          meta: {
            navState: true,
            navName: '矢量图 JSON'
          }
        },
        {
          path: 'ol-vectorHigh',
          name: 'olVectorHigh',
          component: () => import('@/views/OpenLayers/Basic/pages/VectorHigh/VectorHigh.vue'),
          meta: {
            navState: true,
            navName: '矢量图 高亮'
          }
        },
        {
          path: 'ol-rotationMap',
          name: 'olRotationMap',
          component: () => import('@/views/OpenLayers/Basic/pages/RotationMap/RotationMap.vue'),
          meta: {
            navState: true,
            navName: '旋转 rotation'
          }
        },
        {
          path: 'ol-mouseRotationMap',
          name: 'olMouseRotationMap',
          component: () => import('@/views/OpenLayers/Basic/pages/MouseRotationMap/MouseRotationMap.vue'),
          meta: {
            navState: true,
            navName: '鼠标拖拽旋转/缩放'
          }
        },
        {
          path: 'ol-viewAnimate',
          name: 'olViewAnimate',
          component: () => import('@/views/OpenLayers/Basic/pages/ViewAnimate/ViewAnimate.vue'),
          meta: {
            navState: true,
            navName: '动画 animate'
          }
        },
        {
          path: 'ol-graticule',
          name: 'olGraticule',
          component: () => import('@/views/OpenLayers/Basic/pages/Graticule/Graticule.vue'),
          meta: {
            navState: true,
            navName: '网格 Graticule'
          }
        },
        {
          path: 'ol-heatmap',
          name: 'olHeatmap',
          component: () => import('@/views/OpenLayers/Basic/pages/Heatmap/Heatmap.vue'),
          meta: {
            navState: true,
            navName: '热力图'
          }
        },
        {
          path: 'ol-scaleLine',
          name: 'olScaleLine',
          component: () => import('@/views/OpenLayers/Basic/pages/ScaleLine/ScaleLine.vue'),
          meta: {
            navState: true,
            navName: '比例尺控件 ScaleLine'
          }
        },
        {
          path: 'ol-FullScreen',
          name: 'olFullScreen',
          component: () => import('@/views/OpenLayers/Basic/pages/FullScreen/FullScreen.vue'),
          meta: {
            navState: true,
            navName: '全屏控件 FullScreen'
          }
        },
        {
          path: 'ol-zoomToExtent',
          name: 'olZoomToExtent',
          component: () => import('@/views/OpenLayers/Basic/pages/ZoomToExtent/ZoomToExtent.vue'),
          meta: {
            navState: true,
            navName: '导览控件 ZoomToExtent'
          }
        },
        {
          path: 'ol-overviewMap',
          name: 'olOverviewMap',
          component: () => import('@/views/OpenLayers/Basic/pages/OverviewMap/OverviewMap.vue'),
          meta: {
            navState: true,
            navName: '总览控件（鹰眼、小地图）'
          }
        },
        {
          path: 'ol-mousePosition',
          name: 'olMousePosition',
          component: () => import('@/views/OpenLayers/Basic/pages/MousePosition/MousePosition.vue'),
          meta: {
            navState: true,
            navName: '鼠标位置控件'
          }
        },
        {
          path: 'ol-zoomSlider',
          name: 'olZoomSlider',
          component: () => import('@/views/OpenLayers/Basic/pages/ZoomSlider/ZoomSlider.vue'),
          meta: {
            navState: true,
            navName: '缩放滑块控件 ZoomSlider'
          }
        },
        {
          path: 'ol-LayerGroup',
          name: 'olLayerGroup',
          component: () => import('@/views/OpenLayers/Basic/pages/LayerGroup/LayerGroup.vue'),
          meta: {
            navState: true,
            navName: '图层组 LayerGroup'
          }
        },
        {
          path: 'ol-setZIndex',
          name: 'olSetZIndex',
          component: () => import('@/views/OpenLayers/Basic/pages/SetZIndex/SetZIndex.vue'),
          meta: {
            navState: true,
            navName: '控制图层层叠关系'
          }
        },
        {
          path: 'ol-setResolution',
          name: 'olSetResolution',
          component: () => import('@/views/OpenLayers/Basic/pages/SetResolution/SetResolution.vue'),
          meta: {
            navState: true,
            navName: '不同分辨率显示不同图层'
          }
        },
        {
          path: 'ol-setExtent',
          name: 'olSetExtent',
          component: () => import('@/views/OpenLayers/Basic/pages/SetExtent/SetExtent.vue'),
          meta: {
            navState: true,
            navName: '区域图层'
          }
        },
        {
          path: 'ol-coverageModal',
          name: 'olCoverageModal',
          component: () => import('@/views/OpenLayers/Basic/pages/CoverageModal/CoverageModal.vue'),
          meta: {
            navState: true,
            navName: '图层遮罩'
          }
        },
        {
          path: 'ol-setSource',
          name: 'olSetSource',
          component: () => import('@/views/OpenLayers/Basic/pages/SetSource/SetSource.vue'),
          meta: {
            navState: true,
            navName: '切换图源'
          }
        },
        {
          path: 'ol-simplenessLabel',
          name: 'olSimplenessLabel',
          component: () => import('@/views/OpenLayers/Basic/pages/SimplenessLabel/SimplenessLabel.vue'),
          meta: {
            navState: true,
            navName: '简单的标记'
          }
        },
        {
          path: 'ol-brightMark',
          name: 'olBrightMark',
          component: () => import('@/views/OpenLayers/Basic/pages/BrightMark/BrightMark.vue'),
          meta: {
            navState: true,
            navName: '定义标记颜色'
          }
        },
        {
          path: 'ol-polymerization',
          name: 'olPolymerization',
          component: () => import('@/views/OpenLayers/Basic/pages/Polymerization/Polymerization.vue'),
          meta: {
            navState: true,
            navName: '聚合数据'
          }
        },
        {
          path: 'ol-basicDraw',
          name: 'olBasicDraw',
          component: () => import('@/views/OpenLayers/Basic/pages/BasicDraw/BasicDraw.vue'),
          meta: {
            navState: true,
            navName: '绘制点、线、面'
          }
        },
        {
          path: 'ol-drawGraph',
          name: 'olDrawGraph',
          component: () => import('@/views/OpenLayers/Basic/pages/DrawGraph/DrawGraph.vue'),
          meta: {
            navState: true,
            navName: '绘制图形'
          }
        },
        {
          path: 'ol-freeDrawing',
          name: 'olFreeDrawing',
          component: () => import('@/views/OpenLayers/Basic/pages/FreeDrawing/FreeDrawing.vue'),
          meta: {
            navState: true,
            navName: '自由绘制图形'
          }
        },
        {
          path: 'ol-arrowLine',
          name: 'olArrowLine',
          component: () => import('@/views/OpenLayers/Basic/pages/ArrowLine/ArrowLine.vue'),
          meta: {
            navState: true,
            navName: '带箭头的线段'
          }
        },
        {
          path: 'ol-snapGraph',
          name: 'olSnapGraph',
          component: () => import('@/views/OpenLayers/Basic/pages/SnapGraph/SnapGraph.vue'),
          meta: {
            navState: true,
            navName: '修改已绘制的图形'
          }
        }
      ]
    }
  ]
}