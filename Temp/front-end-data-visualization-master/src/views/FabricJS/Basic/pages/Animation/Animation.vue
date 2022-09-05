<template>
  <div>
    <canvas width="600" height="600" id="canvas" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

/**
 * fabric内置动画
 * easeOutBounce
 * easeInCubic
 * easeOutCubic
 * easeInElastic
 * easeOutElastic
 * easeInBounce
 * easeOutExpo
 */

const store = useStore()

function init() {
  let canvas = new fabric.Canvas('canvas')
  let rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 100,
    height: 100,
    fill: 'red'
  })

  /*
    animate(动画属性, 动画的结束值, [画的详细信息])

    第三个参数是一个对象，包括: {
      rom：允许指定可设置动画的属性的起始值（如果我们不希望使用当前值）。
      duration：默认为500（ms）。可用于更改动画的持续时间。
      onComplete：在动画结束时调用的回调。
      easing：缓动功能。
    }
  */

  // rect.set('angle', 45)

  // 动画，旋转角度
  // angle: 动画，接受3个属性（要进行变化的属性，值，对象[动画的缓冲效果等]）
  // 绝对值
  // rect.animate('angle', 360, {
  //   onChange:canvas.renderAll.bind(canvas) // 每次刷新的时候都会执行
  // })

  // 相对值写法
  // rect.animate('angle', '+=360', {
  //   onChange:canvas.renderAll.bind(canvas), // 每次刷新的时候都会执行
  //   duration: 2000, // 执行时间
  //   easing: fabric.util.ease.easeOutBounce, // 缓冲效果
  // })

  // 左移动动画
  // rect.animate('left', '400', {
  //   onChange:canvas.renderAll.bind(canvas), // 每次刷新的时候都会执行
  //   duration: 2000, // 执行时间
  //   easing: fabric.util.ease.easeInCubic, // 缓冲效果
  // })

  // 支持负值
  rect.animate('angle', "-50", {
    onChange:canvas.renderAll.bind(canvas), // 每次刷新的时候都会执行
  })

  canvas.add(rect)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Animation/Animation.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>