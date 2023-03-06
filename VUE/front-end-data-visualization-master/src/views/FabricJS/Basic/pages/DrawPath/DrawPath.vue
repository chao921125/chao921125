<!-- 绘制路径 -->
<template>
  <div>
    <canvas width="600" height="600" id="canvas" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

function init() {
  let canvas = new fabric.Canvas('canvas')
  let path = new fabric.Path('M 0 0 L 200 100 L 170 200 z')
  path.set({
    left: 120,
    top: 120,
    fill: 'hotpink',
    opacity: 0.5,
    stroke: 'black',
    strokeWidth: 10
  })
  canvas.add(path)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/DrawPath/DrawPath.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>