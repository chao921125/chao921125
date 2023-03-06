<template>
  <div class="box">
    <div class="canvas_x">
      <div>1、loadFromJSON</div>
      <canvas width="200" height="200" id="canvas1" style="border: 1px solid #ccc;"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

// 参考：https://blog.csdn.net/qq_43759079/article/details/115357084?spm=1001.2014.3001.5501

const store = useStore()

function init1() {
  const str = '{"version":"4.6.0","objects":[{"type":"rect","version":"4.6.0","originX":"left","originY":"top","left":50,"top":50,"width":20,"height":20,"fill":"green","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"rx":0,"ry":0},{"type":"circle","version":"4.6.0","originX":"left","originY":"top","left":80,"top":80,"width":80,"height":80,"fill":"red","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"radius":40,"startAngle":0,"endAngle":6.283185307179586}],"background":"#ddd"}'
  let canvas = new fabric.Canvas('canvas1')
  canvas.loadFromJSON(str)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Deserialization/Deserialization.vue')
  init1()
})
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.canvas_x {
  margin: 10px;

  canvas {
    border: 1px solid #ccc;
  }
}
</style>