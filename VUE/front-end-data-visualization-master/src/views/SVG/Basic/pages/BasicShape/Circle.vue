<!-- 圆形 -->
<template>
  <svg class="svg__x">
    <circle cx="100" cy="100" r="80" style="stroke: black; fill: none;" />
    <circle cx="280" cy="100" r="80" stroke="#cca8e9" stroke-width="10" fill="none" />
    <circle cx="480" cy="100" r="80" stroke="#cca8e9" stroke-width="4" stroke-dasharray="10 4" fill="none" />
  </svg>
  <aside class="explain">
    <ul>
      <li>circle 是线段标签</li>
      <li>cx和cy 圆心坐标（x轴和y轴）</li>
      <li>r 半径</li>
      <li>fill 填充色</li>
      <li>fill-opacity 填充色不透明度</li>
      <li>stroke 边框颜色</li>
      <li>stroke-opacity 边框不透明度</li>
      <li>stroke-width 边框宽度</li>
      <li>stroke-dasharray 点线或虚线</li>
    </ul>
  </aside>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
  store.commit('setComponentPath', 'src/views/SVG/Basic/pages/BasicShape/Circle.vue')
})
</script>

<style lang="scss" scoped>
.svg__x {
  width: 600px;
  height: 200px;
  border: 1px solid #ccc;
}

.explain {
  ul > li {
    margin-bottom: 16px;
  }
}
</style>