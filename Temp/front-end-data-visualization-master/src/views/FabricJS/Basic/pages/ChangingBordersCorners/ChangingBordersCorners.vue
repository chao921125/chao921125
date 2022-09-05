<template>
  <div>
    <canvas id="canvas" width="600" height="600" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

function init() {
  let canvas = new fabric.Canvas('canvas')

  let circle1 = new fabric.Circle({
    left: 100,
    top: 100,
    fill: '#6eb6ff',
    radius: 50
  })

  // 隐藏操作时的边
  circle1.hasBorders = false

  let circle2 = new fabric.Circle({
    left: 300,
    top: 100,
    fill: '#fb929e',
    radius: 50
  })

  // 隐藏操作时的角，隐藏后无法做缩放旋转等操作
  circle2.hasControls = false

  canvas.add(circle1, circle2)

}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/ChangingBordersCorners/ChangingBordersCorners.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>