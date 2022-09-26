<template>
  <div>
    <canvas id="canvas" width="800" height="600" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

function init() {
  let canvas = new fabric.Canvas('canvas')

  // 圆形
  let circle = new fabric.Circle({
    top: 100,
    left: 100,
    fill: '#17b978',
    radius: 50
  })

  circle.set({
    transparentCorners: false, // 选中时，角是被填充了。true 空心；false 实心
    hasBorders: true, // 选中时，是否显示边，默认true（显示）
    borderColor: 'red', // 选中时，边为红色
    borderScaleFactor: 5, // 选中时，边的粗细
    borderDashArray: [20, 5, 10, 7], // 选中时，虚线边的规则
    cornerColor: "#a1de93", // 选中时，角的颜色是 青色
    cornerStrokeColor: 'pink', // 选中时，角的边框的颜色是 粉色
    cornerStyle: 'circle', // 选中时，叫的属性。默认rect 矩形；circle 圆形
    cornerSize: 20, // 选中时，角的大小为20
    cornerDashArray: [10, 2, 6], // 选中时，虚线角的规则
    selectionBackgroundColor: '#ffc300', // 选中时，选框的背景色
    padding: 20, // 选中时，选框离图形的距离
    borderOpacityWhenMoving: 0.6, // 当对象活动和移动时，对象控制边界的不透明度  
  })

  // 矩形
  let rect = new fabric.Rect({
    width: 200,
    height: 100,
    top: 100,
    left: 300,
    fill: '#0074e4',
    stroke: '#f6416c', // 边框颜色
    strokeWidth: 5, // 边框粗细
    strokeDashArray: [20, 5, 14] // 边框虚线规则
  })

  // 元素禁止选中
  rect.selectable = false

  // 三角形
  let triangle1 = new fabric.Triangle({
    width: 80, // 底边宽度
    height: 100, // 底边到定点的距离
    fill: 'blue',
    left: 10,
    top: 300
  })

  // 选择三角形空白位置的时候无法选中，当perPixelTargetFind设为false后可以选中。默认值是false
  triangle1.perPixelTargetFind = true

  // 三角形
  let triangle2 = new fabric.Triangle({
    width: 80, // 底边宽度
    height: 100, // 底边到定点的距离
    fill: 'green',
    left: 160,
    top: 300
  })

  // 禁止 triangle2 旋转控制
  triangle2.uniScaleTransform = true

  canvas.add(circle, rect, triangle1, triangle2)
  
  canvas.selection = true // 画布是否可选中。默认true；false 不可选中
  canvas.selectionColor = 'rgba(106, 101, 216, 0.3)' // 画布鼠标框选时的背景色
  canvas.selectionBorderColor = "#1d2786" // 画布鼠标框选时的边框颜色
  canvas.selectionLineWidth = 6 // 画布鼠标框选时的边框厚度
  canvas.selectionDashArray = [30, 4, 10] // 画布鼠标框选时边框虚线规则
  canvas.selectionFullyContained = true // 只选择完全包含在拖动选择矩形中的形状

  // 设置背景图
  // canvas.setBackgroundImage(
  //   "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27d1b4e5f8824198b6d51a2b1c2d0d75~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp",
  //   canvas.renderAll.bind(canvas)
  // )
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/SelectedStyle/SelectedStyle.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>