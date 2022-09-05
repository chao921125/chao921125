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
  const canvas = new fabric.Canvas('canvas')
  const textbox = new fabric.Textbox('Lorum ipsum dolor sit amet', {
    left: 50,
    top: 50,
    width: 150,
    fontSize: 20
  })

  canvas.add(textbox)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Textbox/Textbox.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>