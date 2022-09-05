<template>
  <div>
    <button @click="addRectangle">添加长方形</button>
    <canvas id="canvas" width="600" height="600" style="border: 1px solid #ccc;"></canvas>
    <div>代码出处 <a href="http://fabricjs.com/custom-control-render" target="view_window">http://fabricjs.com/custom-control-render</a></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

// 删除按钮图片 base64
const deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E"
// 创建删除图片元素
let deleteImg = document.createElement('img')
deleteImg.src = deleteIcon

// 克隆按钮图片 base64
const cloneIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 55.699 55.699' width='100px' height='100px' xml:space='preserve'%3E%3Cpath style='fill:%23010002;' d='M51.51,18.001c-0.006-0.085-0.022-0.167-0.05-0.248c-0.012-0.034-0.02-0.067-0.035-0.1 c-0.049-0.106-0.109-0.206-0.194-0.291v-0.001l0,0c0,0-0.001-0.001-0.001-0.002L34.161,0.293c-0.086-0.087-0.188-0.148-0.295-0.197 c-0.027-0.013-0.057-0.02-0.086-0.03c-0.086-0.029-0.174-0.048-0.265-0.053C33.494,0.011,33.475,0,33.453,0H22.177 c-3.678,0-6.669,2.992-6.669,6.67v1.674h-4.663c-3.678,0-6.67,2.992-6.67,6.67V49.03c0,3.678,2.992,6.669,6.67,6.669h22.677 c3.677,0,6.669-2.991,6.669-6.669v-1.675h4.664c3.678,0,6.669-2.991,6.669-6.669V18.069C51.524,18.045,51.512,18.025,51.51,18.001z M34.454,3.414l13.655,13.655h-8.985c-2.575,0-4.67-2.095-4.67-4.67V3.414z M38.191,49.029c0,2.574-2.095,4.669-4.669,4.669H10.845 c-2.575,0-4.67-2.095-4.67-4.669V15.014c0-2.575,2.095-4.67,4.67-4.67h5.663h4.614v10.399c0,3.678,2.991,6.669,6.668,6.669h10.4 v18.942L38.191,49.029L38.191,49.029z M36.777,25.412h-8.986c-2.574,0-4.668-2.094-4.668-4.669v-8.985L36.777,25.412z M44.855,45.355h-4.664V26.412c0-0.023-0.012-0.044-0.014-0.067c-0.006-0.085-0.021-0.167-0.049-0.249 c-0.012-0.033-0.021-0.066-0.036-0.1c-0.048-0.105-0.109-0.205-0.194-0.29l0,0l0,0c0-0.001-0.001-0.002-0.001-0.002L22.829,8.637 c-0.087-0.086-0.188-0.147-0.295-0.196c-0.029-0.013-0.058-0.021-0.088-0.031c-0.086-0.03-0.172-0.048-0.263-0.053 c-0.021-0.002-0.04-0.013-0.062-0.013h-4.614V6.67c0-2.575,2.095-4.67,4.669-4.67h10.277v10.4c0,3.678,2.992,6.67,6.67,6.67h10.399 v21.616C49.524,43.26,47.429,45.355,44.855,45.355z'/%3E%3C/svg%3E%0A"
// 创建克隆图片元素
var cloneImg = document.createElement('img')
cloneImg.src = cloneIcon

let canvas = null

// 初始化
function init() {
  canvas = new fabric.Canvas('canvas')
  addRectangle()
}

// 添加新的长方形
function addRectangle() {
  var rect = new fabric.Rect({
    left: 100,
    top: 50,
    fill: 'yellow', // 填充色
    width: 200,
    height: 100,
    objectCaching: false,  // 当' false '时，对象不会缓存，除非必要(clipPath)默认为true  
    stroke: 'lightgreen', // 描边颜色
    strokeWidth: 4, // 描边宽度
  })

  rect.transparentCorners = false // 角填充色不透明
  rect.cornerColor = 'blue' // 角的颜色
  rect.cornerStyle = 'circle' // 角的样式（圆形）

  canvas.add(rect) // 将矩形添加到画布中
  canvas.setActiveObject(rect) // 并选中刚添加的矩形
}

// 渲染元素的icon按钮
function renderIcon(icon) {
  return function (ctx, left, top, styleOverride, fabricObject) {
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(icon, -size/2, -size/2, size, size);
    ctx.restore();
  }
}

// 删除对象
function deleteObject(eventData, transform) {
  var target = transform.target;
  var canvas = target.canvas;
  canvas.remove(target);
  canvas.requestRenderAll();
}

// 删除按钮控件
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: -16,
  offsetX: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon(deleteImg),
  cornerSize: 24
})

// 克隆对象
function cloneObject(eventData, transform) {
  console.log('eventData', eventData)
  console.log('transform', transform)
  var target = transform.target
  var canvas = target.canvas
  target.clone(function(cloned) {
    cloned.left += 10
    cloned.top += 10
    cloned.transparentCorners = false // 角填充色不透明
    cloned.cornerColor = 'blue' // 角的颜色
    cloned.cornerStyle = 'circle' // 角的样式（圆形）
    canvas.add(cloned)
    canvas.setActiveObject(cloned)
  });
}

// 克隆按钮控件
fabric.Object.prototype.controls.clone = new fabric.Control({
  x: -0.5,
  y: -0.5,
  offsetY: -16,
  offsetX: -16,
  cursorStyle: 'pointer',
  mouseUpHandler: cloneObject,
  render: renderIcon(cloneImg),
  cornerSize: 24
})

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Demo/pages/CustomControlRender/CustomControlRender.vue')
  init()
})

onUnmounted(() => {
  // fabric.Object.prototype.controls.deleteControl = new fabric.Control(null)
  // fabric.Object.prototype.controls.clone = new fabric.Control(null)
  delete fabric.Object.prototype.controls.deleteControl
  delete fabric.Object.prototype.controls.clone
})
</script>

<style lang="scss" scoped>

</style>