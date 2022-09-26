<template>
  <div>
    <el-select v-model="currentType" @change="changeType">
      <el-option label="默认(框选)" value="default" />
      <el-option label="三角形" value="triangle" />
    </el-select>
    <canvas id="canvas" width="600" height="600" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

let canvas = null // 画布实例

let downPoint = null
let upPoint = null

let currentTriangle = null // 临时三角形

let currentType = ref('default') // 当前操作类型（默认选框 || 创建矩形）

// 修改当前操作类型。如果是矩形模式，选框填充透明，有个小灰框。
function changeType(val) {
  switch(val) {
    case 'default':
      canvas.selection = true
      canvas.selectionColor = 'rgba(100, 100, 255, 0.3)'
      canvas.selectionBorderColor = 'rgba(255, 255, 255, 0.3)'
      canvas.skipTargetFind = false // 允许选中
      break
    case 'triangle':
      canvas.selectionColor = 'transparent'
      canvas.selectionBorderColor = 'transparent'
      canvas.skipTargetFind = true // 禁止选中
      break
  }
}

// 初始化画布
function init() {
  canvas = new fabric.Canvas('canvas')

  canvas.on('mouse:down', canvasMouseDown)   // 鼠标在画布上按下
  canvas.on('mouse:move', canvasMouseMove)   // 鼠标在画布上移动
  canvas.on('mouse:up', canvasMouseUp)       // 鼠标在画布上松开
}

// 鼠标在画布上按下
function canvasMouseDown(e) {
  downPoint = e.absolutePointer

  if (currentType.value === 'triangle') {
    currentTriangle = new fabric.Triangle({
      top: downPoint.y,
      left: downPoint.x,
      width: 0,
      height: 0,
      fill: 'transparent',
      stroke: 'rgba(0, 0, 0, 0.2)'
    })
    canvas.add(currentTriangle)
  }
}

// 鼠标在画布上移动
function canvasMouseMove(e) {
  if (currentType.value === 'triangle' && currentTriangle) {
    const currentPoint = e.absolutePointer

    let width = Math.abs(downPoint.x - currentPoint.x)
    let height = Math.abs(downPoint.y - currentPoint.y)

    let top = currentPoint.y > downPoint.y ? downPoint.y : currentPoint.y
    let left = currentPoint.x > downPoint.x ? downPoint.x : currentPoint.x

    currentTriangle.set('width', width)
    currentTriangle.set('height', height)
    currentTriangle.set('top', top)
    currentTriangle.set('left', left)
    canvas.requestRenderAll()
  }
}

// 鼠标在画布上松开
function canvasMouseUp(e) {
  upPoint = e.absolutePointer

  if (currentType.value === 'triangle') {
    if (JSON.stringify(downPoint) === JSON.stringify(upPoint)) {
      canvas.remove(currentTriangle)
    } else {
      currentTriangle.set('stroke', '#000')
    }
    currentTriangle = null
  }
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Demo/pages/CreateTriangle/CreateTriangle.vue')
  init()
})
</script>