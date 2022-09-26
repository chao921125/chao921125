<template>
  <div class="box">
    <div class="canvas_x">
      <div>鼠标滚轮缩放画布，alt + 单击动作进行拖动画布</div>
      <canvas width="400" height="400" id="canvas1"></canvas>
    </div>

    <div class="canvas_x">
      <div>以鼠标指针为缩放中心</div>
      <canvas width="400" height="400" id="canvas2"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

function init1() {
  let canvas = new fabric.Canvas('canvas1')
  let rect = new fabric.Rect({
    left: 10,
    top: 10,
    fill: 'orange',
    width: 40,
    height: 40
  })

  let circle = new fabric.Circle({
    radius: 50,
    fill: 'green',
    left: 30,
    top: 30,
  })
  canvas.add(rect, circle)

  canvas.on('mouse:wheel', opt => {
    let delta = opt.e.deltaY // 滚轮向上滚一下是 -100，向下滚一下是 100
    let zoom = canvas.getZoom() // 获取画布当前缩放值
    zoom *= 0.999 ** delta
    if (zoom > 20) zoom = 20
    if (zoom < 0.01) zoom = 0.01
    canvas.setZoom(zoom)
    opt.e.preventDefault()
    opt.e.stopPropagation()
  })

  canvas.on('mouse:down', opt => { // 鼠标按下时触发
    let evt = opt.e
    if (evt.altKey === true) { // 是否按住alt
      canvas.isDragging = true // isDragging 是自定义的
      canvas.lastPosX = evt.clientX // lastPosX 是自定义的
      canvas.lastPosY = evt.clientY // lastPosY 是自定义的
    }
  })

  canvas.on('mouse:move', opt => { // 鼠标移动时触发
    if (canvas.isDragging) {
      let evt = opt.e
      let vpt = canvas.viewportTransform // 聚焦视图的转换
      vpt[4] += evt.clientX - canvas.lastPosX
      vpt[5] += evt.clientY - canvas.lastPosY
      canvas.requestRenderAll()
      canvas.lastPosX = evt.clientX
      canvas.lastPosY = evt.clientY
    }
  })

  canvas.on('mouse:up', opt => { // 鼠标松开时触发
    canvas.setViewportTransform(canvas.viewportTransform) // 设置此画布实例的视口转换  
    canvas.isDragging = false
  })
}

function init2() {
  let canvas = new fabric.Canvas('canvas2')
  let rect = new fabric.Rect({
    left: 210,
    top: 210,
    fill: 'orange',
    width: 40,
    height: 40
  })

  let circle = new fabric.Circle({
    radius: 50,
    fill: 'green',
    left: 120,
    top: 130,
  })
  canvas.add(rect, circle)

  canvas.on('mouse:wheel', opt => {
    let delta = opt.e.deltaY // 滚轮，向上滚一下是 -100，向下滚一下是 100
    let zoom = canvas.getZoom() // 获取画布当前缩放值
    zoom *= 0.999 ** delta
    if (zoom > 20) zoom = 20
    if (zoom < 0.01) zoom = 0.01
    canvas.zoomToPoint({ // 关键点
      x: opt.e.offsetX,
      y: opt.e.offsetY
      },
      zoom
    )
    opt.e.preventDefault()
    opt.e.stopPropagation()
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/ZoomAndPanning/ZoomAndPanning.vue')
  init1()
  init2()
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