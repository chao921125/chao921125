<!-- 右键菜单 -->
<template>
  <div class="context__x">
    <canvas width="600" height="600" id="canvas" style="border: 1px solid #ccc;"></canvas>
    <div
      id="menu"
      class="menu-x"
      v-show="menuVisable"
      :style="menuPosition"
      @contextmenu.prevent=""
      ref="menu"
    >
      <div>什么都不做</div>
      <div>什么都不做</div>
      <div>什么都不做</div>
      <div>什么都不做</div>
      <div @click="delEl">删除</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

const menu = ref(null) // 画布元素
let canvas = null // 画布
const menuVisable = ref(false) // 右键菜单显示状态
const menuPosition = ref('') // 右键菜单位置

let activeEl = null // 当前选中的元素

function init() {
  canvas = new fabric.Canvas('canvas', {
    fireRightClick: true, // 启用右键，button的数字为3
    stopContextMenu: true, // 禁止默认右键菜单
  })

  // 创建矩形元素
  const rect1 = new fabric.Rect({
    left: 10,
    top: 510,
    fill: 'orange',
    width: 40,
    height: 40
  })

  const rect2 = new fabric.Rect({
    left: 510,
    top: 10,
    fill: 'pink',
    width: 40,
    height: 40,
    rx: 10,
    ry: 10,
  })

  const circle = new fabric.Circle({
    radius: 30,
    fill: 'green',
    left: 20,
    top: 20,
  })

  let triangle = new fabric.Triangle({
    width: 80, // 底边宽度
    height: 100, // 底边到定点的距离
    fill: 'blue',
    left: 500,
    top: 480
  })

  // 将矩形添加到画布中
  canvas.add(rect1, rect2, circle, triangle)

  // 按下鼠标
  canvas.on('mouse:down', canvasOnMouseDown)
}

async function canvasOnMouseDown(opt) {
  // 右键，且在元素上右键
  // button: 1-左键；2-中键；3-右键
  // 在画布上右键，target 为 null
  if (opt.button === 3 && opt.target) {
    // 获取当前元素
    activeEl = opt.target

    // 显示菜单
    menuVisable.value = true

    await nextTick()
    // 设置右键菜单位置
    // 1. 获取菜单组件的宽高
    const menuWidth = menu.value.offsetWidth
    const menuHeight = menu.value.offsetHeight

    // 当前鼠标位置
    let pointX = opt.pointer.x
    let pointY = opt.pointer.y

    if (canvas.width - pointX <= menuWidth) {
      pointX -= menuWidth
    }
    if (canvas.height - pointY <= menuHeight) {
      pointY -= menuHeight
    }

    menuPosition.value = `
      left: ${pointX}px;
      top: ${pointY}px;
    `
  } else {
    hiddenMenu()
  }
}

function hiddenMenu() {
  menuVisable.value = false
  activeEl = null
}

function delEl() {
  canvas.remove(activeEl)
  canvas.requestRenderAll()
  hiddenMenu()
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Demo/pages/ContextMenu/ContextMenu.vue')
  init()
})
</script>

<style lang="scss" scoped>
.context__x {
  position: relative;
}

.menu-x {
  width: 200px;
  position: absolute;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

  div {
    box-sizing: border-box;
    padding: 4px 8px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;

    &:hover {
      background-color: antiquewhite;
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-child {
      border-bottom: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>