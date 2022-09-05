<template>
  <div>
    <div style="margin-bottom: 10px;">
      <el-button @click="viewportCenterObjectH">水平居中</el-button>
      <el-button @click="viewportCenterObjectV">垂直居中</el-button>
      <el-button @click="viewportCenterObject">垂直水平居中</el-button>
      <el-button @click="fxCenterObjectH">动画水平居中</el-button>
      <el-button @click="fxCenterObjectV">动画水垂直中</el-button>
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

let rect = null // 矩形

// 初始化
function init() {
  canvas = new fabric.Canvas('canvas')

  rect = new fabric.Rect({
    name: 'rect',
    top: 60, // 距离容器顶部 60px
    left: 60, // 距离容器左侧 200px
    fill: 'orange', // 填充a 橙色
    width: 60, // 宽度 60px
    height: 60, // 高度 60px
    originX: 'center',
    originY: 'center'
  })

  canvas.add(rect)
}

// 水平居中
function viewportCenterObjectH() {
  // 方法1
  canvas.viewportCenterObjectH(rect)

  // 方法2
  // rect.viewportCenterH()
}

// 垂直居中
function viewportCenterObjectV() {
  // 方法1
  canvas.viewportCenterObjectV(rect)

  // 方法2
  // rect.viewportCenterV()
}

// 垂直水平居中
function viewportCenterObject() {
  // 方法1
  canvas.viewportCenterObject(rect)

  // 方法2
  // rect.viewportCenter()
}

// 动画水平居中
function fxCenterObjectH() {
  canvas.fxCenterObjectH(rect)
}

// 动画水垂直中
function fxCenterObjectV() {
  canvas.fxCenterObjectV(rect)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/CenterObject/CenterObject.vue')
  init()
})
</script>