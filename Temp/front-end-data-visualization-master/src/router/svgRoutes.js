// SVG
export default {
  path: '/svg',
  name: 'SVG',
  component: () => import('@/views/SVG/index.vue'),
  meta: {
    navState: true,
    navName: 'SVG',
    icon: 'el-icon-picture'
  },
  children: [
    {
      path: 'SVG-basic',
      name: 'SVGBasic',
      component: () => import('@/views/SVG/Basic/index.vue'),
      meta: {
        navState: true,
        navName: '基础',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'SVG-viewportAndViewBox',
          name: 'SVGStated',
          component: () => import('@/views/SVG/Basic/pages/ViewportAndViewBox/ViewportAndViewBox.vue'),
          meta: {
            navState: true,
            navName: 'Viewport 和 ViewBox'
          }
        },
        {
          path: 'SVG-basicShapeLine',
          name: 'SVGShapeLine',
          component: () => import('@/views/SVG/Basic/pages/BasicShape/Line.vue'),
          meta: {
            navState: true,
            navName: '基础形状 - 线段 line'
          }
        },
        {
          path: 'SVG-basicShapeRect',
          name: 'SVGShapeRect',
          component: () => import('@/views/SVG/Basic/pages/BasicShape/Rect.vue'),
          meta: {
            navState: true,
            navName: '基础形状 - 矩形 rect'
          }
        },
        {
          path: 'SVG-basicShapeCircle',
          name: 'SVGShapeCircle',
          component: () => import('@/views/SVG/Basic/pages/BasicShape/Circle.vue'),
          meta: {
            navState: true,
            navName: '基础形状 - 圆 circle'
          }
        },
        {
          path: 'SVG-basicShapeEllipse',
          name: 'SVGShapeEllipse',
          component: () => import('@/views/SVG/Basic/pages/BasicShape/Ellipse.vue'),
          meta: {
            navState: true,
            navName: '基础形状 - 椭圆 ellipse'
          }
        },
        {
          path: 'SVG-basicShapePolygon',
          name: 'SVGShapePolygon',
          component: () => import('@/views/SVG/Basic/pages/BasicShape/Polygon.vue'),
          meta: {
            navState: true,
            navName: '基础形状 - 多边形 polygon'
          }
        },
        {
          path: 'SVG-basicShapePolyline',
          name: 'SVGShapePolyline',
          component: () => import('@/views/SVG/Basic/pages/BasicShape/Polyline.vue'),
          meta: {
            navState: true,
            navName: '基础形状 - 折线 polyline'
          }
        },
        {
          path: 'SVG-basicShapeLinecap',
          name: 'SVGShapeLinecap',
          component: () => import('@/views/SVG/Basic/pages/BasicShape/Linecap.vue'),
          meta: {
            navState: true,
            navName: '基础形状 - 线帽 Linecap'
          }
        },
        {
          path: 'SVG-basicShapeLinejoin',
          name: 'SVGShapeLinejoin',
          component: () => import('@/views/SVG/Basic/pages/BasicShape/Linejoin.vue'),
          meta: {
            navState: true,
            navName: '基础形状 - 线连接 Linejoin'
          }
        }
      ]
    }
  ]
}