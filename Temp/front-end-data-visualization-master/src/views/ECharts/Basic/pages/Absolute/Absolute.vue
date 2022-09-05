<!-- ECharts - 定位 -->
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
    text: '定位'
  },
  xAxis: { // x轴
    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: { // y轴

  },
  grid: { // 定位的代码
    top: 100,
    right: 200,
    bottom: 100,
    left: '10%'
  },
  series: { // 图表类型
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }
}

// 渲染函数
function chartInit() {
  // 指定ECharts容器元素
  // const chart = echarts.init(chartDom.value) // 默认主题
  const chart = echarts.init(chartDom.value, 'dark') // 深色主题
  // 设置图表
  chart.setOption(option)
}

onMounted(() => {
  chartInit()
  store.commit('setComponentPath', 'src/views/ECharts/Basic/pages/Absolute/Absolute.vue')
})

</script>

<style lang="scss" scoped>
.chart {
  width: 800px;
  height: 400px;
}
</style>