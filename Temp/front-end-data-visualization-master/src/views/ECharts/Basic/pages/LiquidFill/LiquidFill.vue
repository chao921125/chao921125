<template>
  <div class="liquid__x">
    <div class="chart" ref="chartDom1"></div>
    <div class="chart" ref="chartDom2"></div>
    <div class="chart" ref="chartDom3"></div>
    <div class="chart" ref="chartDom4"></div>
    <div class="chart" ref="chartDom5"></div>
    <div class="chart" ref="chartDom6"></div>
    <div class="chart" ref="chartDom7"></div>
    <div class="chart" ref="chartDom8"></div>
    <div class="chart" ref="chartDom9"></div>
    <div class="chart" ref="chartDom10"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import * as echarts from 'echarts'
import 'echarts-liquidfill' // 引入水球图插件

// 水球图需要使用 echarts-liquidfill 插件，安装命令：npm i echarts-liquidfill -S
// 使用 echarts-liquidfill 前，必须安装 echarts！！！！！！！！
// 水球图文档：https://github.com/ecomfe/echarts-liquidfill#api

const store = useStore()

// echart元素
const chartDom1 = ref(null)
const chartDom2 = ref(null)
const chartDom3 = ref(null)
const chartDom4 = ref(null)
const chartDom5 = ref(null)
const chartDom6 = ref(null)
const chartDom7 = ref(null)
const chartDom8 = ref(null)
const chartDom9 = ref(null)
const chartDom10 = ref(null)


// 渲染第一个水球
function chartInit1() {
  const chart1 = echarts.init(chartDom1.value)
  chart1.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.6]
    }]
  })
}

// 渲染第二个水球
function chartInit2() {
  // 指定ECharts容器元素
  const chart2 = echarts.init(chartDom2.value)
  // 设置图表
  chart2.setOption({
    series: [{
      type: 'liquidFill', // 类型为水球图
      // 数据必须从大到小排列，不然会出现遮挡情况；也可以只传一个参数
      data: [0.68, 0.5, 0.4, 0.3, {
        // 单独设置
        value: 0.2,
        itemStyle: {
          color: '#3f72af',
          opacity: 0.6
        },
        emphasis: {
          itemStyle: {
            opacity: 0.9
          }
        }
      }
      ],
      color: ['#ffde7d', '#f6416c', '#f8f3d4', '#00b8a9'], // 数据颜色，每个颜色对应一个数据
      itemStyle: {
        opacity: 0.4, // 每个数据展示出来的不透明度
      },
      emphasis: {
        itemStyle: {
          opacity: 0.8 // 选中时的不透明度
        }
      }
    }]
  })
}

// 渲染第三个水球图（静态）
function chartInit3() {
  const chart3 = echarts.init(chartDom3.value)
  chart3.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.68, 0.5, 0.4, 0.3],
      waveAnimation: false,
      animationDuration: 0,
      animationDurationUpdate: 0
    }]
  })
}

// 渲染第四个水球图（波浪为直线）
function chartInit4() {
  const chart4 = echarts.init(chartDom4.value)
  chart4.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.68, 0.5, 0.4, 0.3],
      waveAnimation: false,
      animationDuration: 0,
      animationDurationUpdate: 0,
      amplitude: 0, // 振幅为0，就是没有波浪；振幅越大波浪越陡峭
    }]
  })
}

// 渲染第五个水球图（不同方向的波浪）
function chartInit5() {
  const chart5 = echarts.init(chartDom5.value)
  chart5.setOption({
    series: [{
      type: 'liquidFill',
      data: [{
        value: 0.68,
        direction: 'left'
      }, {
        value: 0.34,
        direction: 'right'
      }]
    }]
  })
}

// 渲染第六个水球图（修改边框颜色和背景色）
function chartInit6() {
  const chart6 = echarts.init(chartDom6.value)
  chart6.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.68, 0.5, 0.4, 0.3],
      backgroundStyle: {
        borderWidth: 10,
        borderColor: 'red',
        color: 'yellow'
      }
    }]
  })
}

// 渲染第七个水球图（修改外边框样式与形状）
function chartInit7() {
  const chart7 = echarts.init(chartDom7.value)
  chart7.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.6, 0.5, 0.4, 0.3],
      shape: 'diamond', // 菱形，支持：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
      outline: {
        show: true,
        borderDistance: 30, // 外边框与里面的缝隙
        itemStyle: {
          borderWidth: 4, // 边框粗细
          borderColor: 'hotpink', // 边框颜色
          shadowBlur: 'none', // 隐藏边框阴影
        }
      }
    }]
  })
}

// 渲染第八个水球图（隐藏外边框）
function chartInit8() {
  const chart8 = echarts.init(chartDom8.value)
  chart8.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.6, 0.5, 0.4, 0.3],
      outline: {
        show: false
      }
    }]
  })
}

// 渲染第九个水球图（全屏）
function chartInit9() {
  const chart9 = echarts.init(chartDom9.value)
  chart9.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.6, 0.5, 0.4, 0.3],
      shape: 'container',
      radius: '60%',
      outline: {
        show: false // 隐藏外边框
      },
    }]
  })
}

// 渲染第十个水球图（鲸鱼）
function chartInit10() {
  const chart10 = echarts.init(chartDom10.value)
  chart10.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.6, 0.5, 0.4, 0.3],
      shape: 'path://M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z',
      radius: '60%',
      outline: {
        show: false // 隐藏外边框
      },
      backgroundStyle: {
        borderColor: '#156ACF',
        borderWidth: 1,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowBlur: 20
      },
      label: {
        position: ['38%', '40%'],
        formatter: function() {
          return '狗子\n\n顶住啊狗子';
        },
        fontSize: 20,
        color: '#D94854'
      }
    }]
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/ECharts/Basic/pages/LiquidFill/LiquidFill.vue')
  chartInit1()
  chartInit2()
  chartInit3()
  chartInit4()
  chartInit5()
  chartInit6()
  chartInit7()
  chartInit8()
  chartInit9()
  chartInit10()
})
</script>

<style lang="scss" scoped>
.liquid__x {
  display: flex;
  flex-wrap: wrap;
}
.chart {
  width: 360px;
  height: 360px;
}
</style>