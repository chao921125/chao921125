<template>
  <div>
    <canvas width="600" height="600" id="canvas" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'
import gwen from '@/assets/images/gwen-spider-verse-ah.jpg'

/**
 * fabric 内置滤镜
 * BaseFilter 基本过滤器
 * Blur 模糊
 * Brightness 亮度
 * ColorMatrix 颜色矩阵
 * Contrast 对比
 * Convolute 卷积
 * Gamma 伽玛
 * Grayscale 灰度
 * HueRotation 色调旋转
 * Invert 倒置
 * Noise 噪音
 * Pixelate 像素化
 * RemoveColor 移除颜色
 * Resize 调整大小
 * Saturation 饱和
 * Sepia 色偏
 */

const store = useStore()

function init() {
  let canvas = new fabric.Canvas('canvas')
  // 正常图
  fabric.Image.fromURL(gwen, img => {
    img.scale(0.5)
    canvas.add(img)
  })

  // 单个滤镜
  fabric.Image.fromURL(gwen, img => {
    img.scale(0.5)
    img.left = 300
    // 添加滤镜
    img.filters.push(new fabric.Image.filters.Grayscale())
    // 图片加载完成之后，应用滤镜效果
    img.applyFilters()
    canvas.add(img)
  })

  // 叠加滤镜
  // “filters”属性是一个数组，我们可以用数组方法执行任何所需的操作：移除滤镜（pop，splice，shift），添加滤镜（push，unshift，splice），甚至可以组合多个滤镜。当我们调用 applyFilters 时，“filters”数组中存在的任何滤镜将逐个应用，所以让我们尝试创建一个既色偏又明亮（Brightness）的图像。
  fabric.Image.fromURL(gwen, img => {
    img.scale(0.5)
    // 添加滤镜
    img.filters.push(
        new fabric.Image.filters.Grayscale(),
        new fabric.Image.filters.Sepia(), //色偏
        new fabric.Image.filters.Brightness({ brightness: 0.2 }) //亮度
    )
    // 图片加载完成之后，应用滤镜效果
    img.applyFilters()
    img.set({
      left: 300,
      top: 250,
    })

    canvas.add(img)
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Filter/Filter.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>