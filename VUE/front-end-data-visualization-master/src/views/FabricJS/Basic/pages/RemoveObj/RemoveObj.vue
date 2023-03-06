<template>
  <div>
    <div style="margin-bottom: 10px;">
      <el-button @click="delCircle" type="success">删除圆形</el-button>
      <el-button @click="delRect" type="warning">删除方形（带过渡动画，打开控制台看回调函数）</el-button>
    </div>
    <canvas id="canvas" width="600" height="600" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

let canvas = null // 画布

let circle = null // 圆形
let rect = null // 方形

// 初始化
function init() {
  canvas = new fabric.Canvas('canvas')

  // 圆形
  circle = new fabric.Circle({
    name: 'circle',
    top: 60,
    left: 60,
    radius: 30, // 圆的半径 30
    fill: '#67c23a'
  })

  // 矩形
  rect = new fabric.Rect({
    name: 'rect',
    top: 60, // 距离容器顶部 60px
    left: 200, // 距离容器左侧 200px
    fill: '#e6a23c', // 填充a 橙色
    width: 60, // 宽度 60px
    height: 60 // 高度 60px
  })
  
  // 将矩形添加到画布中
  canvas.add(circle, rect)
}

// 删除圆形
function delCircle() {
  canvas.remove(circle)
}

// 删除矩形（有过渡动画）
function delRect() {
  canvas.FX_DURATION = 1500 // 设置动画时长，默认500毫秒

  canvas.fxRemove(rect, {
    onChange() {
      console.log('在动画的每一步调用')
    },
    onComplete() {
      console.log('删除成功后调用')
    }
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/RemoveObj/RemoveObj.vue')
  init()
})
</script>