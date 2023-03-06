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

  // 圆
  let circle1 = new fabric.Circle({
    left: 100,
    top: 100,
    radius: 50,
  })

  let gradient1 = new fabric.Gradient({
    type: 'linear', // linear or radial
    gradientUnits: 'pixels', // pixels or pencentage 像素 或者 百分比
    coords: { x1: 0, y1: 0, x2: circle1.width, y2: 0 }, // 至少2个坐标对（x1，y1和x2，y2）将定义渐变在对象上的扩展方式
    colorStops:[ // 定义渐变颜色的数组
      { offset: 0, color: 'red' },
      { offset: 0.2, color: 'orange' },
      { offset: 0.4, color: 'yellow' },
      { offset: 0.6, color: 'green' },
      { offset: 0.8, color: 'blue' },
      { offset: 1, color: 'purple' },
    ]
  })
  circle1.set('fill', gradient1);
  canvas.add(circle1)

  // 径向渐变的圆
  let circle2 = new fabric.Circle({
    left: 300,
    top: 100,
    radius: 50
  })

  let gradient2 = new fabric.Gradient({
    type: 'radial',
    coords: {
      r1: 50,
      r2: 0,
      x1: 50,
      y1: 50,
      x2: 50,
      y2: 50,
    },
    colorStops: [
      { offset: 0, color: '#fee140' },
      { offset: 1, color: '#fa709a' }
    ]
  })

  circle2.set('fill', gradient2);
  canvas.add(circle2)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Gradient/Gradient.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>