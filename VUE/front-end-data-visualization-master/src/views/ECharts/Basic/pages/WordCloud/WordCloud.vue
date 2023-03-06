<template>
  <div class="chart" ref="chartDom"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import * as echarts from 'echarts'
import 'echarts-wordcloud'

// 词云需要使用 echarts-wordcloud 插件，安装命令：npm i echarts-wordcloud -S
// 使用 echarts-wordcloud 前，必须安装 echarts！！！！！！！！
// 词云github地址：https://github.com/ecomfe/echarts-wordcloud
// 词云npm地址：https://www.npmjs.com/package/echarts-wordcloud

const store = useStore()

const chartDom = ref(null)

function chartInit() {
  const chart = echarts.init(chartDom.value)
  const data = [{
    name: '雷猴啊',
    value: 100
  }, {
    name: '警察叔叔',
    value: 50
  }, {
    name: '飞天老鼠',
    value: 20
  }, {
    name: '我母鸡',
    value: 30
  }]
  chart.setOption({
    series: [{
      type: 'wordCloud',
      data,
      textStyle: { // 文字样式
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: function () { // 随机色
          // Random color
          return 'rgb(' + [
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160)
          ].join(',') + ')';
        }
      },
      emphasis: { // 文字选中样式
        focus: 'self',
        textStyle: {
          shadowBlur: 10,
          shadowColor: '#000'
        }
      }
    }]
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/ECharts/Basic/pages/WordCloud/WordCloud.vue')
  chartInit()
})
</script>

<style lang="scss" scoped>
.chart {
  width: 300px;
  height: 300px;
}
</style>