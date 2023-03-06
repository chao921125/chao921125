<!-- ECharts - 散点图 -->
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
    text: '散点图'
  },
  xAxis: { // x轴
  },
  yAxis: { // y轴
  },
  dataset: {
    source: [
      [12, 12],
      [58, 30],
      [17, 29],
      [49, 37],
      [83, 14]
    ]
  },
  series: { // 图表类型
    type: 'scatter', // 散点图
    encode: { x: 0, y: 1 }
  }
}

// 渲染函数
function chartInit() {
  // 指定ECharts容器元素
  const chart = echarts.init(chartDom.value) // 默认主题
  // 设置图表
  chart.setOption(option)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/ECharts/Basic/pages/Axis/Scatter.vue')
  chartInit()
})

</script>

<style lang="scss" scoped>
.chart {
  width: 800px;
  height: 400px;
}
</style>