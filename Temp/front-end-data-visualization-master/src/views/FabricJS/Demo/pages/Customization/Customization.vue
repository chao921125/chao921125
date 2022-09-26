<template>
  <div>代码出处 <a href="http://fabricjs.com/customization" target="view_window">http://fabricjs.com/customization</a></div>
  <div class="box">
    <div class="canvas_x">
      <div>自定义选框风格(鼠标框选时)</div>
      <canvas width="200" height="200" id="canvas1"></canvas>
    </div>

    <div class="canvas_x">
      <div>自定义边界, 控制角</div>
      <canvas width="200" height="200" id="canvas2"></canvas>
    </div>

    <div class="canvas_x">
      <div>透明控制角</div>
      <canvas width="200" height="200" id="canvas3"></canvas>
    </div>

    <div class="canvas_x">
      <div>选中后自定义背景色</div>
      <canvas width="200" height="200" id="canvas4"></canvas>
    </div>

    <div class="canvas_x">
      <div>没有边框</div>
      <canvas width="200" height="200" id="canvas5"></canvas>
    </div>

    <div class="canvas_x">
      <div>没有控制角</div>
      <canvas width="200" height="200" id="canvas6"></canvas>
    </div>

    <div class="canvas_x">
      <div>没有边框，没有控制角</div>
      <canvas width="200" height="200" id="canvas7"></canvas>
    </div>

    <div class="canvas_x">
      <div>自定义光标在对象悬停</div>
      <canvas width="200" height="200" id="canvas8"></canvas>
    </div>

    <div class="canvas_x">
      <div>元素移动状态</div>
      <canvas width="200" height="200" id="canvas9"></canvas>
    </div>

    <div class="canvas_x">
      <div>不允许框选</div>
      <canvas width="200" height="200" id="canvas10"></canvas>
    </div>

    <div class="canvas_x">
      <div>部分元素不能选中(选不到圆)</div>
      <canvas width="200" height="200" id="canvas11"></canvas>
    </div>

    <div class="canvas_x">
      <div>自定义画布背景色</div>
      <canvas width="200" height="200" id="canvas12"></canvas>
    </div>

    <div class="canvas_x">
      <div>自定义画布背景图</div>
      <canvas width="200" height="200" id="canvas13"></canvas>
    </div>

    <div class="canvas_x">
      <div>重叠影象</div>
      <canvas width="200" height="200" id="canvas14"></canvas>
    </div>

    <div class="canvas_x">
      <div>禁止元素旋转</div>
      <canvas width="200" height="200" id="canvas15"></canvas>
    </div>

    <div class="canvas_x">
      <div>禁止元素缩放</div>
      <canvas width="200" height="200" id="canvas16"></canvas>
    </div>

    <div class="canvas_x">
      <div>禁止元素横向移动</div>
      <canvas width="200" height="200" id="canvas17"></canvas>
    </div>

    <div class="canvas_x">
      <div>禁止元素纵向移动</div>
      <canvas width="200" height="200" id="canvas18"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'
import jailCellBars from '@/assets/images/jail_cell_bars.png'

const store = useStore()

// 自定义选框风格(鼠标框选时)
function init1() {
  const canvas = new fabric.Canvas('canvas1')
  canvas.add(
    new fabric.Circle({
      radius: 30,
      fill: '#f55',
      top: 70,
      left: 70
    })
  )
  canvas.selection = true // 画布是否可选中。默认true；false 不可选中
  canvas.selectionColor = 'rgba(106, 101, 216, 0.3)' // 画布鼠标框选时的背景色
  canvas.selectionBorderColor = "#1d2786" // 画布鼠标框选时的边框颜色
  canvas.selectionLineWidth = 6 // 画布鼠标框选时的边框厚度
  canvas.selectionDashArray = [30, 4, 10] // 画布鼠标框选时边框虚线规则
  canvas.selectionFullyContained = true // 只选择完全包含在拖动选择矩形中的形状
}

// 自定义边界, 控制角
function init2() {
  const canvas = new fabric.Canvas('canvas2')
  canvas.add(
    new fabric.Circle({
      radius: 30,
      fill: '#f55',
      top: 70,
      left: 70
    })
  )

  // 设置第一项选中状态
  canvas.item(0).set({
    borderColor: 'red', // 边框颜色
    cornerColor: 'green', // 控制角颜色
    cornerSize: 6, // 控制角大小
    transparentCorners: false // 控制角填充色不透明
  })
  canvas.setActiveObject(canvas.item(0)) // 选中第一项
}

function init3() {
  const canvas = new fabric.Canvas('canvas3')
  canvas.add(
    new fabric.Circle({
      radius: 30,
      fill: '#f55',
      top: 70,
      left: 70
    })
  )

  // 设置第一项选中状态
  canvas.item(0).set({
    borderColor: 'gray', // 边框颜色
    cornerColor: 'black', // 控制角颜色
    cornerSize: 12, // 控制角大小
    transparentCorners: true // 控制角填充色透明
  })
  canvas.setActiveObject(canvas.item(0)) // 选中第一项
}

// 选中的背景色
function init4() {
  const canvas = new fabric.Canvas('canvas4')
  canvas.add(
    new fabric.Circle({
      radius: 30,
      fill: '#f55',
      top: 70,
      left: 70
    })
  )
  canvas.item(0).set({
    selectionBackgroundColor: 'orange'
  })
  canvas.setActiveObject(canvas.item(0)) // 选中第一项
}

// 没有边框
function init5() {
  const canvas = new fabric.Canvas('canvas5')
  canvas.add(
    new fabric.Circle({
      radius: 30,
      fill: '#f55',
      top: 70,
      left: 70
    })
  )
  canvas.item(0).hasBorders = false
  canvas.setActiveObject(canvas.item(0))
}

// 没有控制角
function init6() {
  const canvas = new fabric.Canvas('canvas6')
  canvas.add(
    new fabric.Circle({
      radius: 30,
      fill: '#f55',
      top: 70,
      left: 70
    })
  )
  canvas.item(0).hasControls = false
  canvas.setActiveObject(canvas.item(0))
}

// 没有边框，没有控制角
function init7() {
  const canvas = new fabric.Canvas('canvas7')
  canvas.add(
    new fabric.Circle({
      radius: 30,
      fill: '#f55',
      top: 70,
      left: 70
    })
  )
  canvas.item(0).hasControls = canvas.item(0).hasBorders = false

  canvas.on({ // 画布事件集
    'mouse:down': function(e) {
      if (e.target) {
        e.target.opacity = 0.5 // 被选中的对象透明度 0.5
        canvas.renderAll()
      }
    },
    'mouse:up': function(e) {
      if (e.target) {
        e.target.opacity = 1 // 放手后，元素透明度变回 1
        canvas.renderAll()
      }
    },
    'object:moved': function(e) {
      e.target.opacity = 0.5
    },
    'object:modified': function(e) {
      e.target.opacity = 1
    }
  })
}

// 自定义光标在对象悬停
function init8() {
  var canvas = new fabric.Canvas('canvas8')
  canvas.add(
    new fabric.Circle({
      radius: 30,
      fill: '#f55',
      top: 70,
      left: 70
    })
  )
  canvas.hoverCursor = 'wait'
}

// 元素移动状态
function init9() {
  const canvas = new fabric.Canvas('canvas9')
  canvas.add(new fabric.Rect({ left: 110, top: 110, fill: '#f0f', width: 50, height: 50 }))
  canvas.add(new fabric.Rect({ left: 50, top: 50, fill: '#77f', width: 40, height: 40 }))

  canvas.forEachObject(function(o){ o.hasBorders = o.hasControls = false })

  canvas.hoverCursor = 'pointer'

  function animate(e, dir) {
    if (e.target) {
      fabric.util.animate({
        startValue: e.target.get('angle'),
        endValue: e.target.get('angle') + (dir ? 10 : -10),
        duration: 100
      })
      fabric.util.animate({
        startValue: e.target.get('scaleX'),
        endValue: e.target.get('scaleX') + (dir ? 0.2 : -0.2),
        duration: 100,
        onChange: function(value) {
          e.target.scale(value)
          canvas.renderAll()
        },
        onComplete: function() {
          e.target.setCoords()
        }
      })
    }
  }
  canvas.on('mouse:down', function(e) { animate(e, 1) })
  canvas.on('mouse:up', function(e) { animate(e, 0) })
}

// 不允许框选
function init10() {
  const canvas = new fabric.Canvas('canvas10')
  canvas.add(
    new fabric.Circle({
      radius: 30,
      fill: '#f55',
      top: 70,
      left: 70
    })
  )
  canvas.selection = false
}

// 部分元素不能选中(选不到圆)
function init11() {
  const canvas = new fabric.Canvas('canvas11')
  canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 70, left: 70 }))
  canvas.add(new fabric.Rect({ left: 30, top: 30, fill: 'green', width: 30, height: 30 }))
  canvas.add(new fabric.Rect({ left: 140, top: 30, fill: 'green', width: 30, height: 30 }))
  canvas.add(new fabric.Rect({ left: 140, top: 140, fill: 'green', width: 30, height: 30 }))
  canvas.add(new fabric.Rect({ left: 30, top: 140, fill: 'green', width: 30, height: 30 }))

  canvas.item(0).selectable = false
}

// 自定义画布背景色
function init12() {
  const canvas = new fabric.Canvas('canvas12')
  canvas.add(
    new fabric.Circle({
      radius: 30,
      fill: '#f55',
      top: 70,
      left: 70
    })
  )
  canvas.backgroundColor = 'rgba(0,0,255,0.3)' // 设置画布背景色
  canvas.renderAll() 
}

// 自定义画布背景图
function init13() {
  const canvas = new fabric.Canvas('canvas13')
  canvas.add(
    new fabric.Circle({
      radius: 30,
      fill: '#f55',
      top: 70,
      left: 70
    })
  )

  // 方法1
  // canvas.setBackgroundImage(
  //   'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27d1b4e5f8824198b6d51a2b1c2d0d75~tplv-k3u1fbpfcp-zoom-crop-mark:200:200:200:200.awebp',
  //   canvas.renderAll.bind(canvas),
  //   {
  //     angle: 10, // 旋转背景图
  //   }
  // )

  // 方法2
  // fabric.Image.fromURL(
  //   'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27d1b4e5f8824198b6d51a2b1c2d0d75~tplv-k3u1fbpfcp-zoom-crop-mark:200:200:200:200.awebp',
  //   img => {
  //     console.log(img.width)
  //     img.set({ // 缩放图片，使其完全填充满画布
  //       scaleX: canvas.width / img.width,
  //       scaleY: canvas.height / img.height
  //     })
  //     canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
  //       repeat: 'repeat'
  //     })
  //   }
  // )

  // 方法3 重复背景
  canvas.setBackgroundColor({
    source: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27d1b4e5f8824198b6d51a2b1c2d0d75~tplv-k3u1fbpfcp-zoom-crop-mark:40:40:40:40.awebp',
    repeat: 'repeat'
  }, canvas.renderAll.bind(canvas))
}

// 重叠影象
function init14() {
  const canvas = new fabric.Canvas('canvas14')
  canvas.add(
    new fabric.Circle({
      radius: 30,
      fill: '#f55',
      top: 70,
      left: 70
    })
  )

  // 设置覆盖图像的画布
  canvas.setOverlayImage( // setOverlayImage(image, callback, optionsopt)
    jailCellBars, // 图片，script开头import进来的
    canvas.renderAll.bind(canvas)
  )
}

// 禁止元素旋转
function init15() {
  const canvas = new fabric.Canvas('canvas15');
  canvas.add(
    new fabric.Rect({
      width: 50,
      height: 50,
      fill: '#77f',
      top: 75,
      left: 75
    })
  )
  canvas.item(0).lockRotation = true
}

// 禁止元素缩放
function init16() {
  var canvas = new fabric.Canvas('canvas16');
  canvas.add(
    new fabric.Rect({
      width: 50,
      height: 50,
      fill: '#77f',
      top: 75,
      left: 75
    })
  )
  canvas.item(0).lockScalingX = true // 禁止横向缩放
  canvas.item(0).lockScalingY = true // 禁止纵向缩放
}

// 禁止元素横向移动
function init17() {
  const canvas = new fabric.Canvas('canvas17');
  canvas.add(
    new fabric.Rect({
      width: 50,
      height: 50,
      fill: '#77f',
      top: 75,
      left: 75
    })
  )
  canvas.item(0).lockMovementX = true // 禁止元素横向移动
}

// 禁止元素纵向移动
function init18() {
  const canvas = new fabric.Canvas('canvas18');
  canvas.add(
    new fabric.Rect({
      width: 50,
      height: 50,
      fill: '#77f',
      top: 75,
      left: 75
    })
  )
  canvas.item(0).lockMovementY = true // 禁止元素横向移动
}



onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Demo/pages/Customization/Customization.vue')
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
  init12()
  init13()
  init14()
  init15()
  init16()
  init17()
  init18()
})
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.canvas_x {
  margin: 20px;

  canvas {
    border: 1px solid #ccc;
  }
}
</style>