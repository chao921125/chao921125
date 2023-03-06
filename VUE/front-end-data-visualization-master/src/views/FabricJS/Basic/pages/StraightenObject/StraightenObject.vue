<template>
  <div>
    <div style="margin-bottom: 10px;">
      <el-button @click="straightenObject" type="success">摆正元素</el-button>
      <el-button @click="fxStraightenObject" type="warning">摆正元素</el-button>
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

let triangle = null // 三角形

// 初始化
function init() {
  canvas = new fabric.Canvas('canvas')

  triangle = new fabric.Triangle({
      top: 100,
      left: 100,
      width: 80, // 底边长度
      height: 100, // 底边到对角的距离
      fill: 'blue',
      angle: 30
    })

  canvas.add(triangle)
}

// 摆正元素
function straightenObject() {
  // 方法1
  // canvas.straightenObject(triangle)

  // 方法2
  triangle.straighten()
  canvas.renderAll()
}

// 摆正元素（有过渡动画）
function fxStraightenObject() {
  // 该动画不受 FX_DURATION 影响

  // 方法1
  // canvas.fxStraightenObject(triangle)

  // 方法2
  triangle.fxStraighten({
    onChange() {
      canvas.renderAll()
    },
    onComplete() {
      canvas.renderAll()
    }
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/StraightenObject/StraightenObject.vue')
  init()
})
</script>