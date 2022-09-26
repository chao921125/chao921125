<!-- 累计用户数 -->
<template>
  <div>
    <CommonCard
      title="累计用户数"
      value="1,087,503"
    >
      <template #default>
        <div ref="chartDom" :style="{ width: '100%', height: '100%' }"></div>
      </template>
      <template #footer>
        <div class="total__users__footer">
          <span>日同比</span>
          <span class="emphasis">8.73%</span>
          <div class="increase"></div>

          <span class="month">月同比</span>
          <span class="emphasis">35.91%</span>
          <div class="decrease"></div>
        </div>
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
          color: new echarts.graphic.LinearGradient(
            0, 0, 1, 1,
            [
              { offset: 0, color: '#45cca6' },
              { offset: 1, color: '#45ffa6' }
            ]
          )
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
                  fill: '#45ee46', // 填充色
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
                  fill: '#45ee46', // 填充色
                }
              }
            ]
          }
        }
      },
      // { // 自定义系列，官方文档：https://echarts.apache.org/zh/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B3%BB%E5%88%97
      //   // 画三角形
      //   type: 'custom',
      //   data: [200],
      //   stack: '重量',
      //   renderItem: (params, api) => {
      //     // console.log(params, api)
      //     const value = api.value(0) // 获取第一个元素的值
      //     const endPoint = api.coord([value, 0]) // 获取第一个元素的坐标系(第一个参数是x轴，第二个参数是y轴，这个案例的y轴是0)
      //     // console.log(endPoint)

      //     return {
      //       type: 'path', // 线段
      //       position: endPoint,
      //       shape: { // 形状，类似于svg的绘制
      //         // d值可以去iconfont找一个图标，然后赋值svg值，再把值中的path的值复制过来
      //         d: 'M163.396608 289.168384c-40.577024 0-66.526208 54.183936-35.44064 85.25824L477.217792 723.704832c20.031488 20.031488 49.82272 20.031488 69.853184 0l349.274112-349.278208c30.30528-30.294016 6.677504-85.25824-34.927616-85.25824L163.396608 289.168384z',
      //         x: 0, // x轴偏移量
      //         y: 0, // y轴偏移量
      //         width: 20, // 宽
      //         height: 20, // 高
      //       },
      //       style: { // 样式
      //         fill: 'red', // 填充色
      //       }
      //     }
      //   }
      // }
    ],
    grid: {
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

<style lang="scss" scoped>
.total__users__footer {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;

  .month {
    margin-left: 20px;
  }
}
</style>