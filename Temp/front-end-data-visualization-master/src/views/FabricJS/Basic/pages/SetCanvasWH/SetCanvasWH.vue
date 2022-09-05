<template>
  <div class="box">
    <div class="canvas_x">
      <div>1、默认宽高</div>
      <canvas id="canvas1" style="border: 1px solid #ccc;"></canvas>
    </div>

    <div class="canvas_x">
      <div>2、在元素上设置</div>
      <canvas width="200" height="200" id="canvas2" style="border: 1px solid #ccc;"></canvas>
    </div>

    <div class="canvas_x">
      <div>3、初始化时设置</div>
      <canvas id="canvas3" style="border: 1px solid #ccc;"></canvas>
    </div>

    <div class="canvas_x">
      <div>4、设置宽度</div>
      <div style="margin-bottom: 10px">
        <el-button size="mini" @click="setCanvasWidth(200)">设置宽度</el-button>
      </div>
      <canvas width="100" height="100" id="canvas4" style="border: 1px solid #ccc;"></canvas>
    </div>

    <div class="canvas_x">
      <div>5、设置高度</div>
      <div style="margin-bottom: 10px">
        <el-button size="mini" @click="setCanvasHeight(300)">设置高度</el-button>
      </div>
      <canvas width="100" height="100" id="canvas5" style="border: 1px solid #ccc;"></canvas>
    </div>

    <div class="canvas_x">
      <div>6、一键设置宽高</div>
      <div style="margin-bottom: 10px">
        <el-button size="mini" @click="setDimensions(200, 300)">宽200, 高300</el-button>
      </div>
      <canvas width="100" height="100" id="canvas6" style="border: 1px solid #ccc;"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

// 默认宽高
function init1() {
  new fabric.Canvas('canvas1')
}

// 在元素上设置宽高
function init2() {
  new fabric.Canvas('canvas2')
}

// 初始化时设置宽高
// 初始化的设置会覆盖在元素上的设置
function init3() {
  new fabric.Canvas('canvas3', {
    width: 300,
    height: 200
  })
}

let canvas4 = null
function init4() {
  canvas4 = new fabric.Canvas('canvas4')
}

// 设置 canvas 宽度
function setCanvasWidth(width) {
  canvas4.setWidth(width)
}

let canvas5 = null
function init5() {
  canvas5 = new fabric.Canvas('canvas5')
}

// 设置canvas高度
function setCanvasHeight(height) {
  canvas5.setHeight(height)
}

let canvas6 = null
function init6() {
  canvas6 = new fabric.Canvas('canvas6')
}
// 一键设置宽高
function setDimensions(width, height) {
  canvas6.setDimensions({
    width,
    height
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/SetCanvasWH/SetCanvasWH.vue')
  init1()
  init2()
  init3()
  init4()
  init5()
  init6()
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