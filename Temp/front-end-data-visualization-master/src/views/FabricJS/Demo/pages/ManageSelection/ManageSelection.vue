<template>
  <div>
    <div>
      <el-button @click="group">建组</el-button>
      <el-button @click="ungroup">取消组</el-button>
      <el-button @click="multiselect">全选</el-button>
      <el-button @click="discard">取消选中</el-button>
      <el-button @click="addmore">添加更多图形</el-button>
    </div>
    <canvas id="canvas" width="600" height="600" style="border: 1px solid #ccc;"></canvas>
    <div>代码出处 <a href="http://fabricjs.com/manage-selection" target="view_window">http://fabricjs.com/manage-selection</a></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

let canvas = null

function init() {
  canvas = new fabric.Canvas('canvas')

  const red = new fabric.Rect({
    top: 100,
    left: 0,
    width: 80,
    height: 50,
    fill: 'red'
  })

  const blue = new fabric.Rect({
    top: 0,
    left: 100,
    width: 50,
    height: 70,
    fill: 'blue'
  })

  const green = new fabric.Rect({
    top: 100,
    left: 100,
    width: 60,
    height: 60,
    fill: 'green'
  })

  fabric.Object.prototype.transparentCorners = false // 选中时，角是被填充了。true 空心；false 实心
  canvas.add(red, blue, green)
}

// 建组
function group() {
  // 如果当前没选中东西，什么都不做
  if (!canvas.getActiveObject()) {
    return
  }

  console.log('当前选中的状态', canvas.getActiveObject().type)

  // 如果当前选中的不是框选多个元素的群组，什么都不做
  if (canvas.getActiveObject().type !== 'activeSelection') {
    return
  }
  canvas.getActiveObject().toGroup()
  canvas.requestRenderAll()
}

// 取消组
function ungroup() {
  if (!canvas.getActiveObject()) {
    return
  }

  console.log('当前选中的状态', canvas.getActiveObject().type)

  if (canvas.getActiveObject().type !== 'group') {
    return
  }
  canvas.getActiveObject().toActiveSelection()
  canvas.requestRenderAll()
}

// 全选
function multiselect() {
  canvas.discardActiveObject() // 丢弃当前活动的对象和触发事件。 如果fabric作为鼠标事件的结果调用该函数，则将该事件作为参数传递给自定义事件的fire函数。 当作为一个方法使用时，参数没有任何应用。 
  const sel = new fabric.ActiveSelection(canvas.getObjects(), {
    canvas
  })
  // console.log(sel)
  canvas.setActiveObject(sel)
  canvas.requestRenderAll()
}

// 添加更多图形（随机位置）
function addmore() {
  const red = new fabric.Rect({
    top: Math.random() * canvas.height,
    left: Math.random() * canvas.width,
    width: 80,
    height: 50,
    fill: 'red'
  })
  const blue = new fabric.Rect({
    top: Math.random() * canvas.height,
    left: Math.random() * canvas.width,
    width: 50,
    height: 70,
    fill: 'blue'
  })
  const green = new fabric.Rect({
    top: Math.random() * canvas.height,
    left: Math.random() * canvas.width,
    width: 60,
    height: 60,
    fill: 'green'
  })
  canvas.add(red, blue, green)
}

// 取消选择
function discard() {
  canvas.discardActiveObject()
  canvas.requestRenderAll()
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Demo/pages/ManageSelection/ManageSelection.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>