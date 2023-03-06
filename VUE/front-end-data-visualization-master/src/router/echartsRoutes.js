// echarts
export default { // ECharts
  path: '/eCharts',
  name: 'ECharts',
  component: () => import('@/views/ECharts/index.vue'),
  meta: {
    navState: true,
    navName: 'ECharts',
    icon: 'el-icon-s-data'
  },
  children: [
    {
      path: 'echarts-basic',
      name: 'EChartsBasic',
      component: () => import('@/views/ECharts/Basic/index.vue'),
      meta: {
        navState: true,
        navName: '基础',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'ECharts-Stated',
          name: 'EChartsStated',
          component: () => import('@/views/ECharts/Basic/pages/Stated/Stated.vue'),
          meta: {
            navState: true,
            navName: '起步'
          }
        },
        {
          path: 'ECharts-ThemeBuilderJS',
          name: 'EChartsThemeBuilderJS',
          component: () => import('@/views/ECharts/Basic/pages/ThemeBuilder/ThemeBuilderJS.vue'),
          meta: {
            navState: true,
            navName: '自定义主题 JS版'
          }
        },
        {
          path: 'ECharts-ThemeBuilderJSON',
          name: 'EChartsThemeBuilderJSON',
          component: () => import('@/views/ECharts/Basic/pages/ThemeBuilder/ThemeBuilderJSON.vue'),
          meta: {
            navState: true,
            navName: '自定义主题 JSON版'
          }
        },
        {
          path: 'ECharts-RendererSVG',
          name: 'EChartsRendererSVG',
          component: () => import('@/views/ECharts/Basic/pages/RendererSVG/RendererSVG.vue'),
          meta: {
            navState: true,
            navName: 'SVG渲染'
          }
        },
        {
          path: 'ECharts-Dataset',
          name: 'EChartsDataset',
          component: () => import('@/views/ECharts/Basic/pages/Dataset/Dataset.vue'),
          meta: {
            navState: true,
            navName: 'Dataset'
          }
        },
        {
          path: 'ECharts-Plugins',
          name: 'EChartsPlugins',
          component: () => import('@/views/ECharts/Basic/pages/Plugins/Plugins.vue'),
          meta: {
            navState: true,
            navName: '插件'
          }
        },
        {
          path: 'ECharts-Absolute',
          name: 'EChartsAbsolute',
          component: () => import('@/views/ECharts/Basic/pages/Absolute/Absolute.vue'),
          meta: {
            navState: true,
            navName: '定位'
          }
        },
        {
          path: 'ECharts-Scatter',
          name: 'EChartsScatter',
          component: () => import('@/views/ECharts/Basic/pages/Axis/Scatter.vue'),
          meta: {
            navState: true,
            navName: '坐标系 - 散点图'
          }
        },
        {
          path: 'ECharts-Double',
          name: 'EChartsDouble',
          component: () => import('@/views/ECharts/Basic/pages/Axis/Double.vue'),
          meta: {
            navState: true,
            navName: '坐标系 - 双坐标系'
          }
        },
        {
          path: 'ECharts-More',
          name: 'EChartsMore',
          component: () => import('@/views/ECharts/Basic/pages/Axis/More.vue'),
          meta: {
            navState: true,
            navName: '坐标系 - 多坐标系'
          }
        },
        {
          path: 'ECharts-BarYCategory',
          name: 'EChartsBarYCategory',
          component: () => import('@/views/ECharts/Basic/pages/BarYCategory/BarYCategory.vue'),
          meta: {
            navState: true,
            navName: '条形图'
          }
        },
        {
          path: 'ECharts-AreaFill',
          name: 'EChartsAreaFill',
          component: () => import('@/views/ECharts/Basic/pages/AreaFill/Fill.vue'),
          meta: {
            navState: true,
            navName: '面积填充'
          }
        },
        {
          path: 'ECharts-AreaFillGradient',
          name: 'EChartsAreaFillGradient',
          component: () => import('@/views/ECharts/Basic/pages/AreaFill/Gradient.vue'),
          meta: {
            navState: true,
            navName: '渐变填充'
          }
        },
        {
          path: 'ECharts-TypeCustom',
          name: 'EChartsTypeCustom',
          component: () => import('@/views/ECharts/Basic/pages/TypeCustom/Icon.vue'),
          meta: {
            navState: true,
            navName: '自定义 - 图标'
          }
        },
        {
          path: 'map',
          name: 'Map',
          component: () => import('@/views/ECharts/Basic/pages/Map/Map.vue'),
          meta: {
            navState: true,
            navName: 'ECharts绘制地图'
          }
        },
        {
          path: 'liquidFill',
          name: 'LiquidFill',
          component: () => import('@/views/ECharts/Basic/pages/LiquidFill/LiquidFill.vue'),
          meta: {
            navState: true,
            navName: '水球图'
          }
        },
        {
          path: 'wordCloud',
          name: 'WordCloud',
          component: () => import('@/views/ECharts/Basic/pages/WordCloud/WordCloud.vue'),
          meta: {
            navState: true,
            navName: '词云'
          }
        }
      ]
    },
    {
      path: 'datavReportDev',
      name: 'DatavReportDev',
      component: () => import('@/views/ECharts/DatavReportDev/index.vue'),
      meta: {
        navState: true,
        navName: '数据报表',
        icon: 'el-icon-s-grid'
      }
    }
  ]
}