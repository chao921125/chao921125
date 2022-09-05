<template>
  <div>
    <canvas width="600" height="600" id="canvas" style="border: 1px solid #ccc;"></canvas>
    <button @click="addClickEvent">添加画布点击事件</button>
    <button @click="removeClickEvent">移除画布点击事件</button>
    <div>打开控制台，然后用鼠标点击画布试试</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

/**
 * 事件对象（options）上有2个属性：
 * e: 原始事件；
 * target: 目标元素对象
 * 
 * 更多事件
 * mouse:down
 * mouse:move
 * mouse:up
 * 
 * after:render 重新绘制了整个画布
 * 
 * before:selection:cleared
 * selection:created
 * selection:cleared
 * 
 * object:modified
 * object:selected
 * object:moving
 * object:scaling
 * object:rotating
 * object:added
 * object:removed
 * 
 * 更多事件案例：http://fabricjs.com/events
 * 
 * 每次移动（或缩放）一个对象（甚至移动一个像素）时，都会连续触发 object:moving（或 object:scaling ）之类的事件
 * 仅在操作（对象修改或选择创建）结束时才触发 object:modified 或 selection:created 之类的事件
 * 
 * 常用属性
 * 点击点在canvas中的位置：e.pointer/{e.e.offsetX,e.e.offsetY}
 * 
 * 点击点在页面中的位置：{e.e.clientX,e.e.clientY}/{e.e.pageX,e.e.pageY}
 * 
 * 点击点在对象中的位置：{e.transform.offsetX,e.transform.offsetY}
 */

let canvas = null

// 初始化画布
function init() {
  canvas = new fabric.Canvas('canvas')

  let rect = new fabric.Rect({
    top: 20,
    left: 20,
    width: 100,
    height: 50,
    fill: '#9896f1'
  })

  // 给矩形添加一个选中事件
  rect.on('selected', options => {
    console.log('选中矩形啦', options)
  })
  canvas.add(rect)

  addClickEvent()
}

// 移除画布点击事件
function removeClickEvent() {
  canvas.off('mouse:down')
}

// 添加画布点击事件
function addClickEvent() {
  removeClickEvent() // 在添加事件之前先把该事件清除掉，以免重复添加
  canvas.on('mouse:down', options => {
    console.log(`x轴坐标: ${options.e.clientX};    y轴坐标: ${options.e.clientY}`)
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Event/Event.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>