<!-- ECharts - ECharts绘制地图 -->
<template>
  <div>
    <div id="chart" class="chart" ref="chartDom"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import * as echarts from 'echarts'
import 'echarts/extension/bmap/bmap'
import ashenTheme from '@/assets/map/ashenTheme.json'

const store = useStore()

// 要使用 echarts 渲染百度地图，需要引入百度地图2.0

const chartDom = ref(null)

const options = {
  title: {
    text: '大标题',
    subtext: '小标题（有链接，点击跳转）',
    sublink: 'https://mapv.baidu.com/gl/docs/CircleLayer.html',
    left: 'center'
  },
  bmap: {
    key: 'EcuCFchyeUS7tTG2De4AlsYos1Ky2FOC',
    center: [121.475941, 31.222836],
    zoom: 5,
    roam: true, // 不允许缩放
    mapStyle: {
      styleJson: ashenTheme
    }
  },
  tooltip: {},
  series: [
    {
      name: '销售额',
      type: 'scatter', // scatter：普通散点图
      coordinateSystem: 'bmap', // 使用百度地图的坐标系
      data: [
        {
          name: '海门',
          value: [121.15, 31.89, 80]
        },
        {
          name: '南京',
          value: [118.78, 32.04, 100]
        }
      ],
      encode: {
        value: 2 // 显示data子项的value下标为2的值
      },
      itemStyle: {
        color: 'purple'
      },
      symbolSize: function(val) {
        return val[2] / 10
      },
      label: {
        show: false, // 可以使用true来显示，但这里打算使用 emphasis 来强调
        color: 'purple',
        position: 'right',
        // formatter: '{b}',
        formatter: function(v) {
          return `${v.data.name} - ${v.data.value[2]}`
        }
      },
      emphasis: {
        label: { // 鼠标移动到label上才显示
          show: true
        }
      }
    },
    {
      name: 'Top 2',
      type: 'effectScatter',
      coordinateSystem: 'bmap',
      data: [
        {
          name: '北京',
          value: [116.404269, 39.913385, 200]
        },
        {
          name: '上海',
          value: [121.475941, 31.222836, 200]
        }
      ],
      symbolSize: function(val) {
        return val[2] / 10
      },
      encode: {
        value: 2 // 显示data子项的value下标为2的值
      },
      label: {
        // formatter: '{b}',
        formatter: v => `${v.data.name} - ${v.data.value[2]}`,
        position: 'right',
        show: true
      },
      hoverAnimation: true, // 鼠标移上去后出现动画效果
      rippleEffect: { // 波纹效果
        brushType: 'stroke'
      },
      itemStyle: {
        color: 'purple',
        shadowBlur: 10, // 阴影
        shadowColor: '#333', // 阴影的颜色
      }
    }
  ]
}

function chartInit() {
  // 指定ECharts容器元素
  const chart = echarts.init(chartDom.value) // 默认主题
  // 设置图表
  chart.setOption(options)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/ECharts/Basic/pages/Map/Map.vue')
  chartInit()
})

</script>

<style lang="scss" scoped>
.chart {
  width: 800px;
  height: 800px;
}
</style>