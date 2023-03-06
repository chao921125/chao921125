<!-- 线帽 -->
<template>
  <svg class="svg__x">
    <!-- butt 平头 -->
    <line
      x1="30" y1="15"
      x2="130" y2="15"
      stroke="black"
      stroke-linecap="butt"
      stroke-width="15"
    />

    <!-- round 凸圆头 -->
    <line
      x1="30" y1="60"
      x2="130" y2="60"
      stroke="black"
      stroke-linecap="round"
      stroke-width="15"
    />

    <!-- square 凸方头 -->
    <line
      x1="30" y1="105"
      x2="130" y2="105"
      stroke="black"
      stroke-linecap="square"
      stroke-width="15"
    />
  </svg>

  <aside class="explain">
    <ul>
      <li>linecap 线帽，可用于 line 和 polyline</li>
      <li>linecap="butt" 平头（默认值）</li>
      <li>linecap="round" 凸圆头</li>
      <li>linecap="square" 凸方头</li>
      <li>round 和 square 在起止位置都超过了真实位置</li>
      <li>butt 精确与起止位置对齐</li>
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