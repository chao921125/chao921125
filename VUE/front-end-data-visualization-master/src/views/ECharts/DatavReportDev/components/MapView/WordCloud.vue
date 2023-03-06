<template>
  <div class="wordcloud__x">
    <div class="chart" ref="chartDom"></div>
  </div>
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
  const data = [
    { name: '麦当劳', value: 62 },
    { name: '肯德基', value: 53 },
    { name: '汉堡王', value: 21 },
    { name: '华莱士', value: 30 },
    { name: '修记牛杂', value: 40 },
    { name: '鸟剑居酒屋', value: 16 },
    { name: '君临餐厅', value: 66 },
    { name: '顺德鱼皮', value: 56 },
    { name: '辉记糖水', value: 82 },
    { name: '华之屋', value: 62 }
  ]
  chart.setOption({
    series: [{
      type: 'wordCloud',
      data,
      textStyle: { // 文字样式
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        width: '90%',
        height: '90%',
        sizeRange: [12, 60],
        gridSize: 2,
        layoutAnimation: true,
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
.wordcloud__x {
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