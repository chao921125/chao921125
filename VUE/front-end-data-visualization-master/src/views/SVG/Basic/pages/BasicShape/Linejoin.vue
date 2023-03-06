<!-- 线帽 -->
<template>
  <svg class="svg__x">
    <!-- stroke-linejoin: miter -->
    <polyline
      points="30,120 65,85 100,120"
      fill="none"
      stroke="red"
      stroke-width="20"
      stroke-linejoin="miter"
    />

    <!-- stroke-linejoin: round -->
    <polyline
      points="130,120 165,85 200,120"
      fill="none"
      stroke="hotpink"
      stroke-width="20"
      stroke-linejoin="round"
    />

    <!-- stroke-linejoin: bevel -->
    <polyline
      points="230,120 265,85 300,120"
      fill="none"
      stroke="yellowgreen"
      stroke-width="20"
      stroke-linejoin="bevel"
    />
  </svg>

  <aside class="explain">
    <ul>
      <li>linejoin 线连接处，可用于 polyline</li>
      <li>linejoin="miter" 尖的（默认值）</li>
      <li>linejoin="round" 圆的</li>
      <li>linejoin="bevel" 平的</li>
    </ul>
  </aside>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

store.commit('setComponentPath', 'src/views/SVG/Basic/pages/BasicShape/Linecap.vue')
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