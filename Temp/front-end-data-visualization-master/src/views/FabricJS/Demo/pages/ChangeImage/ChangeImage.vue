<!-- 修改图片 -->
<template>
  <div class="context__x">
    <div class="box">
      <button @click="change1">修改图片1</button>
      <canvas width="300" height="300" id="canvas1"></canvas>
    </div>
    
    <div class="box">
      <button @click="change2">修改图片2</button>
      <canvas width="300" height="300" id="canvas2"></canvas>
    </div>
    
    <div class="box">
      <button @click="change3">修改图片3</button>
      <canvas width="300" height="300" id="canvas3"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'
import Agumon from '@/assets/images/Agumon.png'
import Bhikkhu from '@/assets/images/Bhikkhu.png'

const store = useStore()

let canvas1 = null // 画布1
let canvas2 = null // 画布2
let canvas3 = null // 画布3

function init1() {
  canvas1 = new fabric.Canvas('canvas1')
  fabric.Image.fromURL(Agumon, oImg => {
    canvas1.add(oImg)
  })
}

function init2() {
  canvas2 = new fabric.Canvas('canvas2')
  fabric.Image.fromURL(Agumon, oImg => {
    const text = new fabric.Text('没缓存的组', {
      fontSize: 14,
      top: 50
    })
    const group = new fabric.Group([oImg, text], {
      objectCaching: false
    })
    canvas2.add(group)
  })
}

function init3() {
  canvas3 = new fabric.Canvas('canvas3')
  fabric.Image.fromURL(Agumon, oImg => {
    const text = new fabric.Text('有缓存的组', {
      fontSize: 14,
      top: 50
    })
    const group = new fabric.Group([oImg, text])
    canvas3.add(group)
  })
}

function change1() {
  // 获取图片
  const img = canvas1.getObjects()[0]
  img.setSrc(Bhikkhu, () => {
    canvas1.renderAll()
  })
}

// 在建组时设置了不缓存
function change2() {
  // 获取组
  const group = canvas2.getObjects()[0]
  // 获取图片（因为图片放在了组的第一位）
  const img = group.getObjects().find(item => {
    return item.isType('image')
  })
  img.setSrc(Bhikkhu, () => {
    canvas2.renderAll()
  })
}

// 有缓存的组
function change3() {
  // 获取组
  const group = canvas3.getObjects()[0]
  // 获取图片（因为图片放在了组的第一位）
  const img = group.getObjects().find(item => {
    return item.isType('image')
  })
  group.removeWithUpdate(img)
  img.setSrc(Bhikkhu, () => {
    group.addWithUpdate(img)
    canvas3.renderAll()
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Demo/pages/ChangeImage/ChangeImage.vue')
  init1()
  init2()
  init3()
})
</script>

<style lang="scss" scoped>
.context__x {
  display: flex;
  flex-wrap: wrap;
}
.box {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
}

canvas {
  border: 1px solid #ccc;
}
</style>