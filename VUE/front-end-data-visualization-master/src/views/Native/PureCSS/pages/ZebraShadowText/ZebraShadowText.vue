<template>
  <div class="zebra__shadow__text">
    Zebra
  </div>
  <div class="explain">
    <p>
      如果代码没看懂，可以看看这文章(顺便点个赞呗)：
      <b><a href="https://juejin.cn/post/7009637424611491848" target="_blank">《纯CSS实现『斑马纹理投影文字』》</a></b>
    </p>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/ZebraShadowText/ZebraShadowText.vue')
</script>

<style lang='scss' scoped>
/**
 * @作者 羊一止
 * @本例讲解 https://juejin.cn/post/7009637424611491848
 */
.zebra__shadow__text {
  font-size: 100px;
  font-weight: bold;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: 6px -6px #000, 4px -4px #fff;
  background-image: linear-gradient(135deg, #fff 0%, #fff 25%, #000 25%, #000 50%, #fff 50%, #fff 75%, #000 75%, #000 100%);
  background-size: 6px 6px;
  background-repeat: repeat;
  -webkit-background-clip: text;
  background-clip: text;
}
</style>