<!-- ECharts - 条形图 -->
<template>
  <div id="chart" class="chart" ref="chartDom"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { useStore } from 'vuex'

const store = useStore()

const options = {
  title: {
    text: "条形图",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["2011年", "2012年"],
  },
  grid: {
    containLabel: true,
  },
  xAxis: {
    type: "value",
    boundaryGap: [0, 0.01],
  },
  yAxis: {
    type: "category",
    data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
  },
  series: [
    {
      name: "2011年",
      type: "bar",
      data: [18203, 23489, 29034, 104970, 131744, 630230],
    },
    {
      name: "2012年",
      type: "bar",
      data: [19325, 23438, 31000, 121594, 134141, 681807],
    },
  ]
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
  store.commit('setComponentPath', 'src/views/ECharts/Basic/pages/BarYCategory/BarYCategory.vue')
  chartInit()
})

</script>

<style lang="scss" scoped>
.chart {
  width: 800px;
  height: 400px;
}
</style>