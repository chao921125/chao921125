<template>
  <div>
    <canvas width="600" height="600" id="canvas" style="border: 1px solid #ccc;"></canvas>
    <div>代码出处 <a href="http://fabricjs.com/hovering" target="view_window">http://fabricjs.com/hovering</a></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

function init() {
  const canvas = new fabric.Canvas('canvas')
  // 随机生成一些图形
  for (var i = 15; i--; ) {
    var dim = fabric.util.getRandomInt(30, 60);
    var klass = ['Rect', 'Triangle', 'Circle'][fabric.util.getRandomInt(0,2)];
    var options = {
      top: fabric.util.getRandomInt(0, 600),
      left: fabric.util.getRandomInt(0, 600),
      fill: 'green'
    };
    if (klass === 'Circle') {
      options.radius = dim;
    }
    else {
      options.width = dim;
      options.height = dim;
    }
    canvas.add(new fabric[klass](options));
  }

  // 鼠标经过的时候变红色
  canvas.on('mouse:over', function(e) {
    if (e.target) {
      e.target.set('fill', 'red')
      canvas.renderAll()
    }
  })

  // 鼠标移开后变回绿色
  canvas.on('mouse:out', function(e) {
    if (e.target) {
      e.target.set('fill', 'green')
      canvas.renderAll()
    }
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Demo/pages/Hovering/Hovering.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>