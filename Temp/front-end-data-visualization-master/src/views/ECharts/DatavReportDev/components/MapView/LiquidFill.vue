<!-- 水球图 -->
<template>
  <div class="liquid__x">
    <div class="chart" ref="chartDom"></div>
  </div>
</template>

<script setup>
import { ref , onMounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-liquidfill' // 引入水球图插件

const chartDom = ref(null)

function chartInit() {
  const chart = echarts.init(chartDom.value)
  chart.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.5, 0.5, 0.44],
      radius: '70%',
    }]
  })
}

onMounted(() => {
  chartInit()
})
</script>

<style lang="scss" scoped>
.liquid__x {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.chart {
  width: 230px;
  height: 230px;
}
</style>