<template>
  <div>
    <el-select v-model="currentType" @change="changeType">
      <el-option label="默认(框选)" value="default" />
      <el-option label="线段" value="line" />
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

let currentLine = null // 临时线段

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
    case 'line':
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

  if (currentType.value === 'line') {
    currentLine = new fabric.Line(
      [
        downPoint.x, downPoint.y, // 起始点坐标
        downPoint.x, downPoint.y // 结束点坐标
      ],
      {
        stroke: 'rgba(0, 0, 0, 0.2)', // 笔触颜色
      }
    )
    canvas.add(currentLine)
  }
}

// 鼠标在画布上移动
function canvasMouseMove(e) {
  if (currentType.value === 'line' && currentLine) {
    const currentPoint = e.absolutePointer

    currentLine.set('x2', currentPoint.x)
    currentLine.set('y2', currentPoint.y)

    canvas.requestRenderAll()
  }
}

// 鼠标在画布上松开
function canvasMouseUp(e) {
  upPoint = e.absolutePointer

  if (currentType.value === 'line') {
    if (JSON.stringify(downPoint) === JSON.stringify(upPoint)) {
      canvas.remove(currentLine)
    } else {
      currentLine.set('stroke', '#000')
    }
    currentLine = null
  }
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Demo/pages/CreateLine/CreateLine.vue')
  init()
})
</script>