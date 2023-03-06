<template>
  <div>
    <div>
      <el-button @click="copy">复制</el-button>
      <el-button @click="paste">粘贴</el-button>
    </div>
    <canvas width="600" height="600" id="canvas" style="border: 1px solid #ccc;"></canvas>
    <div>代码出处 <a href="http://fabricjs.com/copypaste" target="view_window">http://fabricjs.com/copypaste</a></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

let canvas = null // canvas实例，初始化时赋值
let _clipboard  = null // 复制到的内容

function init() {
  canvas = new fabric.Canvas('canvas')

  const rect = new fabric.Rect({
    left: 100,
    top: 50,
    fill: '#D81B60',
    width: 100,
    height: 100,
    strokeWidth: 2,
    stroke: "#880E4F",
    rx: 10,
    ry: 10,
    angle: 45
  })

  var rect2 = new fabric.Rect({
    left: 200,
    top: 50,
    fill: '#F06292',
    width: 100,
    height: 100,
    strokeWidth: 2,
    stroke: "#880E4F",
    rx: 10,
    ry: 10,
    angle: 45
  })

  const circle1 = new fabric.Circle({
    radius: 65,
    fill: '#039BE5',
    left: 0
  })

  const circle2 = new fabric.Circle({
    radius: 65,
    fill: '#4FC3F7',
    left: 110,
    opacity: 0.7
  })

  const group = new fabric.Group([circle1, circle2], {
    left: 40,
    top: 250
  })

  canvas.add(rect, rect2, group)
}

// 复制
function copy() {
  if (!canvas.getActiveObject()) {
    alert('请先选择元素')
    return
  }
  canvas.getActiveObject().clone(function(cloned) {
    _clipboard = cloned;
	})
}

// 粘贴
function paste() {
  if (!_clipboard) {
    alert('还没复制过任何内容')
    return
  }

  _clipboard.clone(clonedObj => {
    console.log(clonedObj)
    canvas.discardActiveObject() // 取消选择

    // 设置新内容的坐标位置
    clonedObj.set({
			left: clonedObj.left + 10,
			top: clonedObj.top + 10,
			evented: true
		})

    if (clonedObj.type === 'activeSelection') {
			// 活动选择需要一个对画布的引用
			clonedObj.canvas = canvas;
			clonedObj.forEachObject(function(obj) {
				canvas.add(obj)
			})

			clonedObj.setCoords()
		} else {
			canvas.add(clonedObj)
		}
		_clipboard.top += 10
		_clipboard.left += 10
		canvas.setActiveObject(clonedObj)
		canvas.requestRenderAll()
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Demo/pages/CopyPaste/CopyPaste.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>