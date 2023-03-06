<template>
  <div>
    <el-select v-model="currentType" @change="changeType">
      <el-option label="默认(框选)" value="default" />
      <el-option label="折线" value="polyline" />
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

  let currentPolyline = null // 临时折线

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
    case 'polyline':
      canvas.selectionColor = 'transparent'
      canvas.selectionBorderColor = 'transparent'
      canvas.skipTargetFind = true // 禁止选中
      break
  }
}

// 初始化画布
function init() {
  canvas = new fabric.Canvas('canvas')

  canvas.on('mouse:down', canvasMouseDown)         // 鼠标在画布上按下
  canvas.on('mouse:move', canvasMouseMove)         // 鼠标在画布上移动
  canvas.on('mouse:dblclick', canvasMouseDblclick) // 鼠标在画布上双击
}

// 创建折线
function createPolyline(e) {
  const currentPoint = e.absolutePointer
  currentPolyline = new fabric.Polyline(
    [
      { x: currentPoint.x, y: currentPoint.y },
      { x: currentPoint.x, y: currentPoint.y }
    ],
    {
      fill: 'transparent',
      stroke: 'rgba(0, 0, 0, 0.2)',
      objectCaching: false
    }
  )
  canvas.add(currentPolyline)
}

// 修改当前正在创建的折线
function changeCurrentPolyline(e) {
  const currentPoint = e.absolutePointer

  let points = currentPolyline.points

  points.push({
    x: currentPoint.x,
    y: currentPoint.y
  })
  canvas.requestRenderAll()
}

// 折线橡皮带
function changePolylineBelt(e) {
  const currentPoint = e.absolutePointer
  let points = currentPolyline.points

  points[points.length - 1].x = currentPoint.x
  points[points.length - 1].y = currentPoint.y

  canvas.requestRenderAll()
}

// 完成折线绘制
function finishPolyline(e) {
  const currentPoint = e.absolutePointer
  let points = currentPolyline.points
  points[points.length - 1].x = currentPoint.x
  points[points.length - 1].y = currentPoint.y

  points.pop()
  points.pop()
  canvas.remove(currentPolyline)

  if (points.length > 1) {
    let polyline = new fabric.Polyline(points, {
      stroke: '#000',
      fill: 'transparent'
    })

    canvas.add(polyline)
  }
  currentPolyline = null

  canvas.requestRenderAll()
}

// 鼠标在画布上按下
function canvasMouseDown(e) {
  if (currentType.value === 'polyline') {
    if (currentPolyline === null) {
      createPolyline(e)
    } else {
      changeCurrentPolyline(e)
    }
  }
}

// 鼠标在画布上移动
function canvasMouseMove(e) {
  if (currentType.value === 'polyline' && currentPolyline) {
    changePolylineBelt(e)
  }
}

// 鼠标在画布上双击
function canvasMouseDblclick(e) {
  if (currentType.value === 'polyline') {
    finishPolyline(e)
  }
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Demo/pages/CreatePolyline/CreatePolyline.vue')
  init()
})
</script>