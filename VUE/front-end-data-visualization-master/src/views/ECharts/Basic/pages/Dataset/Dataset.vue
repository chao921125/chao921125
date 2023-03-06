<!-- ECharts - 多系列案例 -->
<template>
  <div id="chart" class="chart" ref="chartDom"></div>
  <aside>
    <p>dataset用法：http://echarts.apache.org/zh/option.html#dataset</p>
    <p>dataset可以把数据集中起来管理</p>
  </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { useStore } from 'vuex'

const store = useStore()

// echart元素
const chartDom = ref(null)

const options = {
  dataset: {
    source: [
      ['一季度', 100, 79, '分类1', 50],
      ['二季度', 112, 81, '分类2', 60],
      ['三季度', 96, 88, '分类3', 55],
      ['四季度', 123,  72, '分类4', 70]
    ]
  },
  title: {
    text: 'ECharts 多系列案例'
  },
  xAxis: {
    data: ['一季度', '二季度', '三季度', '四季度']
  },
  yAxis: {},
  series: [{
    type: 'pie',
    center: ['65%', 60],
    radius: 35,
    encode: { itemName: 3, value: 4 }
  }, {
    type: 'line',
    encode: { x: 0, y: 1 }
  }, {
    type: 'bar',
    encode: { x: 0, y: 2 }
  }]
}

// 渲染函数
function chartInit() {
  // 指定ECharts容器元素
  const chart = echarts.init(chartDom.value) // 默认主题
  // 设置图表
  chart.setOption(options)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/ECharts/Basic/pages/Dataset/Dataset.vue')
  chartInit()
})
</script>

<style lang="scss" scoped>
.chart {
  width: 800px;
  height: 400px;
}
</style>