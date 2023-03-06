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

  // 使用 IText，可编辑文本
  const text = new fabric.IText(
    '雷猴啊，双击打几个字试下~',
    {
      fontFamily: 'Comic Sans'
    }
  )
  canvas.add(text)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/IText/IText.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>