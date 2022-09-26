<!-- ECharts - 插件 -->
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

// 数据 + 配置项
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
    text: '主标题',
    subtext: '副标题'
  },
  xAxis: {
    data: ['一季度', '二季度', '三季度', '四季度']
  },
  yAxis: {},
  legend: { // 图例
    data: [{
      name: '饼图',
      icon: 'circle', // 强制变成圆形
      textStyle: { // 图例文本样式
        color: 'hotpink'
      }
    }, '折线图', '柱状图'],
    left: 100, // 图例距离左侧有100像素
  },
  toolbox: { // 工具箱 官方文档：http://echarts.apache.org/zh/option.html#toolbox
    feature: { // 按钮的位置和配置参数的排序有关
      restore: {}, // 刷新按钮
      dataZoom: { // 缩放按钮
        yAxisIndex: false // 不选取y轴的坐标（就是全选y轴）
      },
      saveAsImage: {}, // 保存为图片的按钮
    }
  },
  dataZoom: [ // 区域缩放 官方文档：http://echarts.apache.org/zh/option.html#dataZoom
    {
      show: true,
      start: 0, // 默认开始位置
      end: 100, // 默认结束位置
    }
  ],
  series: [{
    name: '饼图', // 图例名
    type: 'pie',
    center: ['65%', 60],
    radius: 35,
    encode: { itemName: 3, value: 4 }
  }, {
    name: '折线图', // 图例名
    type: 'line',
    encode: { x: 0, y: 1 }
  }, {
    name: '柱状图', // 图例名
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
  store.commit('setComponentPath', 'src/views/ECharts/Basic/pages/Plugins/Plugins.vue')
  chartInit()
})
</script>

<style lang="scss" scoped>
.chart {
  width: 800px;
  height: 400px;
}
</style>