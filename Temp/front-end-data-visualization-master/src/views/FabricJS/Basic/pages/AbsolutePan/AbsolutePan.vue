<template>
  <div>
    <div class="btn-x">
      <el-button @click="absolutePan" type="primary">平移画布</el-button>
    </div>
    <canvas width="600" height="600" id="canvas" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'
import bg from '@/assets/images/gwen-spider-verse-ah.jpg'

const store = useStore()

let canvas = null

function init() {
  canvas = new fabric.Canvas('canvas')

  fabric.Image.fromURL(bg, img => {
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas))
  })
}

function absolutePan() {
  canvas.absolutePan(new fabric.Point(50, 100))
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/AbsolutePan/AbsolutePan.vue')
  init()
})
</script>
