<!-- 今日交易用户 -->
<template>
  <div>
    <CommonCard
      title="今日交易用户数"
      value="81,014"
    >
      <template #default>
        <div ref="chartDom" :style="{ width: '100%', height: '100%' }"></div>
      </template>
      <template #footer>
        <span>退货率</span>
        <span class="emphasis">5.14%</span>
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
    color: ['#3398DB'],
    xAxis: {
      type: 'category',
      data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
      show: false
    },
    yAxis: {
      show: false
    },
    series: [
      {
        type: 'bar',
        data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
        barWidth: '60%', // 控制柱状图的宽度
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#aaffff' },
              { offset: 1, color: '#188df0' }
            ]
          )
        }
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