<template>
  <div>
    <div>
      <el-select v-model="selectedVal" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button @click="exercise" :disabled="btnDisabled">动吧</el-button>
    </div>
    <canvas width="600" height="600" id="canvas" style="border: 1px solid #ccc;"></canvas>
    <div>代码出处 <a href="http://fabricjs.com/animation-easing" target="view_window">http://fabricjs.com/animation-easing</a></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

const btnDisabled = ref(false)

const options = ref([])
const selectedVal = ref('easeInOutQuad')

let animationList = [
  'easeInOutQuad',
  'easeInCubic',
  'easeOutCubic',
  'easeInOutCubic',
  'easeInQuart',
  'easeOutQuart',
  'easeInOutQuart',
  'easeInQuint',
  'easeOutQuint',
  'easeInOutQuint',
  'easeInSine',
  'easeOutSine',
  'easeInOutSine',
  'easeInExpo',
  'easeOutExpo',
  'easeInOutExpo',
  'easeInCirc',
  'easeOutCirc',
  'easeInOutCirc',
  'easeInElastic',
  'easeOutElastic',
  'easeInOutElastic',
  'easeInBack',
  'easeOutBack',
  'easeInOutBack',
  'easeInBounce',
  'easeOutBounce',
  'easeInOutBounce'
]

animationList.forEach(item => {
  options.value.push({
    value: item,
    label: item
  })
})

let canvas = null

// 初始化画布
function init() {
  canvas = new fabric.Canvas('canvas')

  const rect = new fabric.Rect({
    width: 50,
    height: 50,
    left: 100,
    top: 100,
    stroke: '#aaf',
    strokeWidth: 5,
    fill: '#faa',
    selectable: false
  })

  canvas.add(rect)
}

// 动吧
function exercise() {
  btnDisabled.value = true

  // canvas.item(0)是canvas第一个元素，这里只有一个矩形元素，所以就是它咯
  let rect = canvas.item(0)
  rect.animate('left', rect.left === 100 ? 400 : 100, {
    duration: 1000, // 动画执行时长
    onChange: canvas.renderAll.bind(canvas), // 动画渲染
    onComplete: function() {
      btnDisabled.value =  false // 动画结束后才解开按钮可点击
    },
    easing: fabric.util.ease[selectedVal.value] // 动画执行效果
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Demo/pages/AnimationEasing/AnimationEasing.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>