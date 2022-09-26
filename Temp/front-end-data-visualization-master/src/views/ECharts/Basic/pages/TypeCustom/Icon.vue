<!-- ECharts - 自定义图标 -->
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

const options = {
    title: {
      text: '自定义图标'
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      show: false
    },
    series: [
      // 两份数据的stack的值一样的时候，就会合并在一起
      {
        type: 'bar',
        data: [100],
        stack: '总量',
        barWidth: 10,
        itemStyle: {
          color: '#45c946'
        }
      },
      {
        type: 'bar',
        data: [250],
        stack: '总量',
        barWidth: 10,
        itemStyle: {
          color: '#ccc'
        }
      },
      { // 自定义系列，官方文档：https://echarts.apache.org/zh/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B3%BB%E5%88%97
        // 画三角形
        type: 'custom',
        data: [100],
        stack: '重量',
        renderItem: (params, api) => {
          // console.log(params, api)
          const value = api.value(0) // 获取第一个元素的值
          const endPoint = api.coord([value, 0]) // 获取第一个元素的坐标系(第一个参数是x轴，第二个参数是y轴，这个案例的y轴是0)
          // console.log(endPoint)

          return {
            type: 'group', // 组
            position: endPoint,
            children: [
              {
                type: 'path',
                shape: { // 形状，类似于svg的绘制
                  // d值可以去iconfont找一个图标，然后赋值svg值，再把值中的path的值复制过来
                  d: 'M163.396608 289.168384c-40.577024 0-66.526208 54.183936-35.44064 85.25824L477.217792 723.704832c20.031488 20.031488 49.82272 20.031488 69.853184 0l349.274112-349.278208c30.30528-30.294016 6.677504-85.25824-34.927616-85.25824L163.396608 289.168384z',
                  x: -5, // x轴偏移量
                  y: -18, // y轴偏移量
                  width: 10, // 宽
                  height: 10, // 高
                  layout: 'cover'
                },
                style: { // 样式
                  fill: '#45c946', // 填充色
                }
              },
              {
                type: 'path',
                shape: { // 形状，类似于svg的绘制
                  // d值可以去iconfont找一个图标，然后赋值svg值，再把值中的path的值复制过来
                  d: 'M131.974144 648.752128c-30.418944 30.430208-6.474752 84.301824 34.917376 84.301824L858.258432 733.053952c42.899456 0 65.325056-53.85216 34.916352-84.301824L547.487744 302.569472c-19.930112-19.974144-49.374208-19.95264-69.327872 0L131.974144 648.752128z',
                  x: -5, // x轴偏移量
                  y: 8, // y轴偏移量
                  width: 10, // 宽
                  height: 10, // 高
                  layout: 'cover'
                },
                style: { // 样式
                  fill: '#45c946', // 填充色
                }
              }
            ]
          }
        }
      }
    ],
    grid: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }

// 渲染函数
function chartInit() {
  // 指定ECharts容器元素
  const chart = echarts.init(chartDom.value) // 默认主题
  // 设置图表
  chart.setOption(options)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/ECharts/Basic/pages/TypeCustom/Icon.vue')
  chartInit()
})
</script>

<style lang="scss" scoped>
.chart {
  width: 800px;
  height: 400px;
}
</style>