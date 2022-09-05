<!-- 椭圆 -->
<template>
  <svg class="svg__x">
    <ellipse cx="60" cy="60" rx="20" ry="40" fill="none" stroke="#f67280" />
    <ellipse cx="60" cy="130" rx="40" ry="20" fill="none" stroke="#f67280" stroke-dasharray="10 4" />
  </svg>
  <aside class="explain">
    <ul>
      <li>circle 是线段标签</li>
      <li>cx和cy 椭圆圆心坐标（x轴和y轴）</li>
      <li>rx x轴方向的半径</li>
      <li>ry y轴方向的半径</li>
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
  store.commit('setComponentPath', 'src/views/SVG/Basic/pages/BasicShape/Ellipse.vue')
})
</script>

<style lang="scss" scoped>
.svg__x {
  width: 500px;
  height: 200px;
  border: 1px solid #ccc;
}

.explain {
  ul > li {
    margin-bottom: 16px;
  }
}
</style>