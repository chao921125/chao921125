<template>
  <div class="box">
    <div class="canvas_x">
      <div>裁剪单一图形</div>
      <canvas width="300" height="300" id="canvas1"></canvas>
    </div>

    <div class="canvas_x">
      <div>裁剪一个组</div>
      <canvas width="300" height="300" id="canvas2"></canvas>
    </div>

    <div class="canvas_x">
      <div>组合剪辑</div>
      <canvas width="300" height="300" id="canvas3"></canvas>
    </div>

    <div class="canvas_x">
      <div>剪完再剪（组合剪辑）</div>
      <canvas width="300" height="300" id="canvas4"></canvas>
    </div>

    <div class="canvas_x">
      <div>组内嵌套剪辑</div>
      <canvas width="300" height="300" id="canvas5"></canvas>
    </div>

    <div class="canvas_x">
      <div>剪文字</div>
      <canvas width="300" height="300" id="canvas6"></canvas>
    </div>

    <div class="canvas_x">
      <div>裁剪画布</div>
      <canvas width="300" height="300" id="canvas7"></canvas>
    </div>

    <div class="canvas_x">
      <div>裁剪画布，但不裁控件</div>
      <canvas width="300" height="300" id="canvas8"></canvas>
    </div>

    <div class="canvas_x">
      <div>动画裁剪</div>
      <canvas width="300" height="300" id="canvas9"></canvas>
    </div>

    <div class="canvas_x">
      <div>使用绝对定位裁剪</div>
      <canvas width="300" height="300" id="canvas10"></canvas>
    </div>

    <div class="canvas_x">
      <div>颠倒的clipPaths</div>
      <canvas width="300" height="300" id="canvas11"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

// 参考 https://blog.csdn.net/qq_43759079/article/details/115357288?spm=1001.2014.3001.5501

const store = useStore()

// 裁剪单一图形
function init1() {
  const canvas = new fabric.Canvas('canvas1')

  // 裁剪的图形
  // clipPath从对象的中心开始定位，对象originX和originY不起任何作用，而clipPath originX和originY起作用。定位逻辑与fabric.Group相同
  const clipPath = new fabric.Circle({
    radius: 40,
    left: -40,
    top: -40
  })

  // 矩形
  const rect = new fabric.Rect({
    width: 200,
    height: 100,
    fill: 'red'
  })

  // 裁剪矩形
  rect.clipPath = clipPath

  canvas.add(rect)
}

// 裁剪一个组
function init2() {
  const canvas = new fabric.Canvas('canvas2')

  // 裁剪的图形
  // clipPath从对象的中心开始定位，对象originX和originY不起任何作用，而clipPath originX和originY起作用。定位逻辑与fabric.Group相同
  const clipPath = new fabric.Circle({
    radius: 40,
    left: -40,
    top: -40
  })

  const group = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: 'red' }),
    new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }),
    new fabric.Rect({
      width: 100,
      height: 100,
      fill: 'green',
      left: 100,
      top: 100
    })
  ])

  // 裁剪一个组
  group.clipPath = clipPath

  canvas.add(group)
}

function init3() {
  const canvas = new fabric.Canvas('canvas3')

  const clipPath = new fabric.Group(
    [
      new fabric.Circle({ radius: 70, top: -70, left: -70 }),
      new fabric.Circle({ radius: 40, top: -95, left: -95 }),
      new fabric.Circle({ radius: 40, top: 15, left: 15 })
    ],
    { left: -95, top: -95 }
  )

  const group = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: 'red' }),
    new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }),
    new fabric.Rect({
      width: 100,
      height: 100,
      fill: 'green',
      left: 100,
      top: 100
    })
  ])

  group.clipPath = clipPath
  canvas.add(group)
}

function init4() {
  const canvas = new fabric.Canvas('canvas4')

  const clipPath = new fabric.Circle({ radius: 70, top: -50, left: -50 })
  const innerClipPath = new fabric.Circle({ radius: 70, top: -90, left: -90 })
  clipPath.clipPath = innerClipPath

  const group = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: 'red' }),
    new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: 'green', left: 100, top: 100 }),
  ])

  group.clipPath = clipPath
  canvas.add(group)
}

function init5() {
  const canvas = new fabric.Canvas('canvas5')

  const clipPath = new fabric.Circle({ radius: 100, top: -100, left: -100 })
  const small = new fabric.Circle({ radius: 50, top: -50, left: -50 })

  const group = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: "red", clipPath: small }),
    new fabric.Rect({ width: 100, height: 100, fill: "yellow", left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: "blue", top: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: "green", left: 100, top: 100 }),
  ])

  group.clipPath = clipPath
  canvas.add(group)
}

function init6() {
  const canvas = new fabric.Canvas('canvas6')

  const clipPath = new fabric.Text(
    'Hi I\'m the \nnew ClipPath!\nI hope we\'ll\nbe friends',
    { top: -100, left: -100 }
  )

  const group = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: "red" }),
    new fabric.Rect({ width: 100, height: 100, fill: "yellow", left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: "blue", top: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: "green", left: 100, top: 100 }),
  ])

  group.clipPath = clipPath
  canvas.add(group)
}

function init7() {
  const canvas = new fabric.Canvas('canvas7', {
    backgroundColor: "#ddd"
  })

  const group = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: "red" }),
    new fabric.Rect({ width: 100, height: 100, fill: "yellow", left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: "blue", top: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: "green", left: 100, top: 100 }),
  ])

  const clipPath = new fabric.Circle({ radius: 100, top: 0, left: 50 })
  canvas.clipPath = clipPath
  canvas.add(group)
}

function init8() {
  const canvas = new fabric.Canvas('canvas8', {
    backgroundColor: "#ddd"
  })

  const group = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: "red" }),
    new fabric.Rect({ width: 100, height: 100, fill: "yellow", left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: "blue", top: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: "green", left: 100, top: 100 }),
  ])

  // 裁剪区之外控件可见
  canvas.controlsAboveOverlay = true

  const clipPath = new fabric.Circle({ radius: 100, top: 0, left: 50 })
  canvas.clipPath = clipPath
  canvas.add(group)
}

function init9() {
  const canvas = new fabric.Canvas('canvas9', {
    backgroundColor: "#ddd"
  })

  const clipPath = new fabric.Rect({ width: 100, height: 100, top: 0, left: 0 })

  function animateLeft(){
    clipPath.animate({
      left: 200,
    },{
      duration: 900,
      onChange: canvas.requestRenderAll.bind(canvas),
      onComplete: animateRight
    })
  }

  function animateRight(){
    clipPath.animate({
      left: 0,
    },{
      duration: 1200,
      onChange: canvas.requestRenderAll.bind(canvas),
      onComplete: animateLeft
    })
  }

  function animateDown(){
    clipPath.animate({
      top: 100,
    },{
      duration: 500,
      onChange: canvas.requestRenderAll.bind(canvas),
      onComplete: animateUp
    })
  }

  function animateUp(){
    clipPath.animate({
      top: 0,
    },{
      duration: 400,
      onChange: canvas.requestRenderAll.bind(canvas),
      onComplete: animateDown
    })
  }

  const group = new fabric.Group([
    new fabric.Rect({ width: 100, height: 100, fill: "red" }),
    new fabric.Rect({ width: 100, height: 100, fill: "yellow", left: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: "blue", top: 100 }),
    new fabric.Rect({ width: 100, height: 100, fill: "green", left: 100, top: 100 }),
  ], {
    scale: 1.5
  })

  canvas.controlsAboveOverlay = true

  animateLeft()
  animateDown()

  canvas.clipPath = clipPath
  canvas.add(group)
}

function init10() {
  const canvas = new fabric.Canvas("canvas10")

  const clipPath = new fabric.Rect({ width: 300, height: 300, top: 0, left: 0, absolutePositioned: true })

  const clipPath2 = new fabric.Rect({ width: 300, height: 300, top: 0, left: 0, absolutePositioned: true })

  fabric.Image.fromURL("http://fabricjs.com/assets/dragon.jpg", function(img){
    img.clipPath = clipPath
    img.scaleToWidth(300)
    canvas.add(img)
  })

  fabric.Image.fromURL("http://fabricjs.com/assets/dragon2.jpg", function(img){
    img.clipPath =clipPath2
    img.scaleToWidth(300)
    img.top = 150
    canvas.add(img)
  })
}

function init11() {
  const canvas = new fabric.Canvas("canvas11")

  const clipPath = new fabric.Circle({ radius: 100, top: -200, left: -200 })
  const clipPath2 = new fabric.Circle({ radius: 100, top: 0, left: 0 })
  const clipPath3 = new fabric.Circle({ radius: 100, top: 0, left: -200 })
  const clipPath4 = new fabric.Circle({ radius: 100, top: -200, left: 0 })
  const g = new fabric.Group([ clipPath, clipPath2, clipPath3, clipPath4 ])

  g.inverted = true // 颠倒裁剪

  fabric.Image.fromURL("http://fabricjs.com/assets/dragon.jpg", function(img) {
    img.clipPath = g
    img.scaleToWidth(500)
    canvas.add(img)
  })
}

onMounted(() => {
  store.commit(
    'setComponentPath',
    'src/views/FabricJS/Basic/pages/ClipPath/ClipPath.vue'
  )
  init1()
  init2()
  init3()
  init4()
  init5()
  init6()
  init7()
  init8()
  init9()
  init10()
  init11()
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
