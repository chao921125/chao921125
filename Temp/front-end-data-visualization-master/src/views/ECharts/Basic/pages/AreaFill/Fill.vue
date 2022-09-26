<!-- ECharts - 面积填充 -->
<template>
  <div id="chart" class="chart" ref="chartDom"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { useStore } from 'vuex'

const store = useStore()

const options = {
  xAxis: {
    type: 'category',
    show: false,
    boundaryGap: false // 默认在x轴两侧有间距，设置成false就取消间距
  },
  yAxis: {
    show: false
  },
  series: [
    {
      type: 'line',
      data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
      areaStyle: { // 用面积的方式进行展示
        color: 'purple'
      },
      lineStyle: { // 设置线的样式
        width: 0
      },
      itemStyle: { // 设置点的样式
        opacity: 0
      },
      smooth: true, // 平滑展示
    }
  ],
  grid: { // 布局位置
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
}

// echart元素
const chartDom = ref(null)

// 渲染函数
function chartInit() {
  // 指定ECharts容器元素
  const chart = echarts.init(chartDom.value) // 默认主题
  // 设置图表
  chart.setOption(options)
}

onMounted(() => {
  chartInit()
  store.commit('setComponentPath', 'src/views/ECharts/Basic/pages/AreaFill/Fill.vue')
})
</script>

<style lang="scss" scoped>
.chart {
  width: 800px;
  height: 400px;
}
</style>