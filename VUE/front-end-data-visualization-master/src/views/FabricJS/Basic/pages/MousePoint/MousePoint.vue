<template>
  <div>
    <div>点击画布</div>
    <canvas id="canvas" width="600" height="600" style="border: 1px solid #ccc;"></canvas>
    <div>在页面的坐标：{{pointInWindow}}</div>
    <div>在画布的坐标：{{pointInCanvas}}</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

const pointInWindow = ref('')
const pointInCanvas = ref('')

function init() {
  let canvas = new fabric.Canvas('canvas')
  canvas.on('mouse:down', opt => {
    pointInWindow.value = `x: ${opt.e.clientX}, y: ${opt.e.clientY}`

    const point = canvas.getPointer(opt.e)
    pointInCanvas.value = `x: ${point.x}, y: ${point.y}`

  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/MousePoint/MousePoint.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>