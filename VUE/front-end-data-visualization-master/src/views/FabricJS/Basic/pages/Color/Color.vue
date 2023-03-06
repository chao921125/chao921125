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

  // 2种颜色配置
  let color1 = new fabric.Color('#ff0')
  let color2 = new fabric.Color('#ffff00')
  let color3 = new fabric.Color('ff0')
  let color4 = new fabric.Color('rgb(10, 200, 80)')
  let color5 = new fabric.Color('rgba(10, 200, 80, 0.5)')
  console.log(color4)

  // 颜色转换
  let color6 = color1.toRgb() // 转换成rgb
  let color7 = color4.toHex() // 转换成十六进制
  console.log(color6)
  console.log(color7)

  // 颜色叠加
  let color8 = color1.overlayWith(color4).toRgb()

  // 矩形
  let rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 100,
    height: 100,
    // fill: color4.toRgb() // 使用颜色
    fill: color8
  })

  canvas.add(rect)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Color/Color.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>