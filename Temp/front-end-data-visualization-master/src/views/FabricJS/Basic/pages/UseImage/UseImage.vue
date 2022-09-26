<template>
  <div>
    <canvas width="600" height="600" id="canvas" style="border: 1px solid #ccc;"></canvas>
    <img src="@/assets/images/logo.png" id="logo">
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'
import logo from '@/assets/images/logo.png'

const store = useStore()

function init() {
  let canvas = new fabric.Canvas('canvas')
  let imgElement = document.getElementById('logo')
  console.log(imgElement)
  imgElement.onload = () => {
    let imgInstance = new fabric.Image(imgElement, {
      left: 100,
      top: 100,
      width: 200,
      height: 200,
      angle: 50, // 旋转
    })
    canvas.add(imgInstance)
  }

  fabric.Image.fromURL(logo, oImg => {
    oImg.scale(0.5) // 缩放
    // console.log(oImg)
    canvas.add(oImg) // 将图片加入到画布
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/UseImage/UseImage.vue')
  init()
})
</script>

<style lang="scss" scoped>
#logo {
  display: none;
}
</style>