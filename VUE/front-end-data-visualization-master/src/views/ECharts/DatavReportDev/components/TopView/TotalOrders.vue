<!-- 累计订单量 -->
<template>
  <div>
    <CommonCard
      title="累计订单量"
      value="2,157,420"
    >
      <template #default>
        <div ref="chartDom" :style="{ width: '100%', height: '100%' }"></div>
      </template>
      <template #footer>
        <span>昨日订单量</span>
        <span class="emphasis">2,000,000</span>
      </template>
    </CommonCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { CommonCard, echarts } from './commonCardMixin.js'

// echart 元素容器
const chartDom = ref(null)
const chart = ref(null)

function chartInit() {
  chart.value = echarts.init(chartDom.value)
  chart.value.setOption({
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
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1, 
            [
              { offset: 0, color: "rgba(255, 191, 0, 1)" },
              { offset: 1, color: "rgba(255, 191, 0, 0.1)" }
            ]
          )
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
  })
}

onMounted(() => {
  chartInit()
})
</script>