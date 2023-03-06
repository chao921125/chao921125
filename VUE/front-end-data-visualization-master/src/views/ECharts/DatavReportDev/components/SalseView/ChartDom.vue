<template>
  <div ref="chartDom" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  options: Object
})

// echart元素
const chartDom = ref(null)

// 渲染函数
function chartInit() {
  const chart = echarts.init(chartDom.value)
  chart.setOption(props.options)
}

onMounted(() => {
  chartInit()
})
</script>

<style lang="scss" scoped>

</style>