<template>
  <div>
    <el-select v-model="currentType" @change="changeType">
      <el-option label="默认(框选)" value="default" />
      <el-option label="绘制矩形" value="rect" />
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
    case 'rect':
      canvas.selectionColor = 'transparent'
      canvas.selectionBorderColor = 'rgba(0, 0, 0, 0.2)'
      canvas.skipTargetFind = true // 禁止选中
      break
  }
}

// 初始化画布
function init() {
  canvas = new fabric.Canvas('canvas')

  canvas.on('mouse:down', canvasMouseDown)   // 鼠标在画布上按下
  canvas.on('mouse:up', canvasMouseUp)       // 鼠标在画布上松开
}


let downPoint = null // 鼠标按下的坐标

// 鼠标在画布上按下
function canvasMouseDown(e) {
  downPoint = e.absolutePointer
}

// 鼠标在画布上松开
function canvasMouseUp(e) {
  if (currentType.value === 'rect') {
    // 创建矩形
    createRect(e.absolutePointer)
  }
}

// 创建矩形
function createRect(pointer) {
  // 点击事件，不生成矩形
  if (JSON.stringify(downPoint) === JSON.stringify(pointer)) {
    return
  }

  // 创建矩形
  // 矩形参数计算
  let top = Math.min(downPoint.y, pointer.y)
  let left = Math.min(downPoint.x, pointer.x)
  let width = Math.abs(downPoint.x - pointer.x)
  let height = Math.abs(downPoint.y - pointer.y)

  // 矩形对象
  const rect = new fabric.Rect({
    top,
    left,
    width,
    height,
    fill: 'transparent',
    stroke: '#000'
  })

  // 将矩形添加到画布上
  canvas.add(rect)

  downPoint = null
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Demo/pages/CreateRect/CreateRect.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>