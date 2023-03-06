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

  // 基础用法
  let text1 = new fabric.Text('Hello World!', {
    left: 40,
    top: 10,
    fontFamily: 'Comic Sans', // 字体
    fontSize: 60, // 字号
    fontWeight: 600, // 字体重量（粗细），normal、bold 或 数字（100、200、400、600、800）
    charSpacing: 100, // 字距
    fill: 'red', // 字体颜色
    cornerColor: 'pink', // 角的颜色（被选中时）
    angle: 30, // 旋转
    backgroundColor: '#ffd460', // 背景色
    borderColor: 'yellowGreen', // 边框颜色（被选中时）
    borderScaleFactor: 4, // 边框粗细（被选中时）
    borderDashArray: [10, 4, 20], // 创建边框虚线
    stroke: '#3f72af', // 文字描边颜色（蓝色）
    strokeWidth: 2, // 文字描边粗细
    textAlign: 'lfet', // 对齐方式：left 左对齐； right 右对齐； center 居中
    opacity: 0.8, // 不透明度
    // text: '雷猴', // 文字内容，会覆盖之前设置的值
    selectable: true, // 能否被选中，默认true
    shadow: 'rgba(0, 0, 0, 0.5) 5px 5px 5px', // 投影
  })
  canvas.add(text1)

  // 下划线
  let text2 = new fabric.Text('下划线', {
    left: 0,
    top: 400,
    fontSize: 20,
    underline: true,
  })
  canvas.add(text2)

  // 中划线
  let text3 = new fabric.Text('中划线', {
    left: 80,
    top: 400,
    fontSize: 20,
    linethrough: true,
  })
  canvas.add(text3)

  // 上划线
  let text4 = new fabric.Text('上划线', {
    left: 160,
    top: 400,
    fontSize: 20,
    overline: true,
  })
  canvas.add(text4)

  // 混合 textDecoration 上划线、中划线、下划线一起用
  let text5 = new fabric.Text('上中下划线', {
    left: 240,
    top: 400,
    fontSize: 20,
    overline: true,
    linethrough: true,
    underline: true,
  })
  canvas.add(text5)

  // 投影
  let text6 = new fabric.Text('投影 shadow', {
    left: 0,
    top: 440,
    fontSize: 20,
    shadow: 'rgba(0, 0, 0, 0.8) 5px 5px 2px', // 投影
  })
  canvas.add(text6)
  
  // 投影
  let text7 = new fabric.Text('投影 shadow', {
    left: 140,
    top: 440,
    fontSize: 20,
    shadow: '#f6416c -3px -3px 2px', // 投影
  })
  canvas.add(text7)

  // 左对齐
  let msg1 = '左\n左左\n左对齐'
  let text8 = new fabric.Text(msg1, {
    top: 10,
    left: 500,
    fontSize: 16,
    textAlign: 'left',
  })
  canvas.add(text8)

  // 居中对齐
  let msg2 = '中\n中中\n居中对齐'
  let text9 = new fabric.Text(msg2, {
    top: 100,
    left: 500,
    fontSize: 16,
    textAlign: 'center',
  })
  canvas.add(text9)

  // 右对齐
  let msg3 = '右\n右右\n右对齐'
  let text10 = new fabric.Text(msg3, {
    top: 200,
    left: 500,
    fontSize: 16,
    textAlign: 'right',
  })
  canvas.add(text10)

  // 行高
  var msg4 = "Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt\nut labo"
  
  let text11 = new fabric.Text(msg4, {
    top: 350,
    left: 380,
    fontSize: 16,
    lineHeight: 1,
  })

  let text12 = new fabric.Text(msg4, {
    top: 450,
    left: 380,
    fontSize: 16,
    lineHeight: 2,
  })
  canvas.add(text12, text11)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Text/Text.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>