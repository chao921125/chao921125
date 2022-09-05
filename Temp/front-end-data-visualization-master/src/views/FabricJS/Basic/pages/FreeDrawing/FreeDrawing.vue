<template>
  <div class="box">
    <canvas id="canvas" width="600" height="600" style="border: 1px solid #ccc;"></canvas>
    <div class="tools__x">
      <el-button type="primary" v-if="!isDrawing" @click="toggleIsDrawing">绘图模式</el-button>
      <el-button type="success" v-if="isDrawing" @click="toggleIsDrawing">框选模式</el-button>
      <el-button type="danger" @click="clearCanvas">清空画布</el-button>
      <!-- <div v-show="isDrawing" class="control__x">
        
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

let canvas = null
const isDrawing = ref(true) // 是否开启绘图，true 开启；false 关闭

function init() {
  canvas = new fabric.Canvas('canvas', {
    isDrawingMode: isDrawing.value, // 开启绘图模式
  })

  // 设置画笔颜色
  canvas.freeDrawingBrush.color = '#11999e'

  // 设置画笔粗细
  canvas.freeDrawingBrush.width = 10

  // 画笔投影
  canvas.freeDrawingBrush.shadow = new fabric.Shadow({
    blur: 10,
    offsetX: 10,
    offsetY: 10,
    affectStroke: true,
    color: '#30e3ca',
  })
}

// 切换绘画和框选模式
function toggleIsDrawing() {
  isDrawing.value = !isDrawing.value
  canvas.isDrawingMode  = isDrawing.value
}

// 清除画布
function clearCanvas() {
  canvas.clear()
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/FreeDrawing/FreeDrawing.vue')
  init()
})
</script>

<style lang="scss" scoped>
.box {
  width: 900px;
  height: 600px;
  display: flex;

  .tools__x {
    flex: 1;
    box-sizing: border-box;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    :deep(.el-button+.el-button) {
      margin-left: 0;
      margin-top: 10px;
    }
  }

  .control__x {
    width: 100%;
    flex: 1;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 8px;
    background: #d6e6f2;
  }
}
</style>