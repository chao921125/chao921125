<template>
  <div>
    <div class="btn-x">
      <el-button @click="bringToFront">矩形移到顶层</el-button>
      <el-button @click="sendToBack">矩形移到底层层</el-button>
      <el-button @click="bringForward">三角形往上走一层</el-button>
      <el-button @click="sendBackwards">圆形往下走一层</el-button>
      <el-button @click="moveTo">将三角形移到0层</el-button>
    </div>
    <canvas width="600" height="600" id="canvas" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

let canvas = null
let rect = null
let circle = null
let triangle = null

function init() {
  canvas = new fabric.Canvas('canvas')

  rect = new fabric.Rect({
    top: 30,
    left: 30,
    fill: 'orange',
    width: 100,
    height: 100
  })

  circle = new fabric.Circle({
    top: 50,
    left: 60,
    fill: 'hotpink',
    radius: 50
  })

  triangle = new fabric.Triangle({
    top: 80,
    left: 30,
    width: 80,
    height: 100,
    fill: 'blue'
  })

  canvas.add(rect, circle, triangle)
}

// 矩形移到顶层
function bringToFront() {
  // 方法1
  canvas.bringToFront(rect)

  // 方法2
  // rect.bringToFront()
}

// 矩形移到底层层
function sendToBack() {
  // 方法1
  canvas.sendToBack(rect)

  // 方法2
  // rect.sendToBack()
}

// 三角形往上走一层
function bringForward() {
  // 方法1
  canvas.bringForward(triangle)

  // 方法2
  // triangle.bringForward()
}

// 圆形往下走一层
function sendBackwards() {
  // 方法1
  canvas.sendBackwards(circle)

  // 方法2
  // circle.sendBackwards()
}

// 三角形移到0层
function moveTo() {
  // 方法1
  // canvas.moveTo(triangle, 0)

  // 方法2
  triangle.moveTo(0)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/MoveTo/MoveTo.vue')
  init()
})
</script>

<style>
.btn-x {
  margin-bottom: 10px;
}
</style>