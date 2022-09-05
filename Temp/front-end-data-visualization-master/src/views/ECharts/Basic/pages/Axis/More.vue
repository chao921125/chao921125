<!-- ECharts - 多坐标系 -->
<template>
  <div id="chart" class="chart" ref="chartDom"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { useStore } from 'vuex'

const store = useStore()

// echart元素
const chartDom = ref(null)

// 数据和配置项
const option = {
  title: {
    text: '多坐标系'
  },
  xAxis: [
    { // x轴
      type: 'category', // 多坐标系的时候需要明确指定 x 轴的类型
      gridIndex: 0
    },
    {
      type: 'category',
      gridIndex: 1
    }
  ],
  yAxis: [ // y轴
    // 这里需要使用数组，然后传入两个对象，代表2个坐标系
    {
      min: 0,
      max: 100,
      gridIndex: 0
    },
    {
      splitLine: {
        show: false // 将右侧坐标系的线隐藏
      },
      gridIndex: 0
    },
    {
      min: 0,
      max: 150,
      gridIndex: 1
    }
  ],
  grid: [
    { // 第一个图的位置
    bottom: '55%'
    },
    { // 第二个图的位置
      top: '55%'
    }
  ],
  dataset: {
    source: [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1]
    ]
  },
  series: [
    {
      type: 'bar', // 第一个图为柱状图
      seriesLayoutBy: 'row', // 以行的方式进行数据读取并渲染
      xAxisIndex: 0,
      yAxisIndex: 0 // 意思是对应 yAxis 的第一个坐标系
    },
    {
      type: 'line', // 折线图
      seriesLayoutBy: 'row',
      xAxisIndex: 0,
      yAxisIndex: 1
    },
    {
      type: 'bar',
      seriesLayoutBy: 'row',
      xAxisIndex: 1,
      yAxisIndex: 2
    }
  ]
}

// 渲染函数
function chartInit() {
  // 指定ECharts容器元素
  const chart = echarts.init(chartDom.value) // 默认主题
  // 设置图表
  chart.setOption(option)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/ECharts/Basic/pages/Axis/More.vue')
  chartInit()
})

</script>

<style lang="scss" scoped>
.chart {
  width: 800px;
  height: 400px;
}
</style>