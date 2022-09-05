<!-- 折线 -->
<template>
  <!-- 本例图形参考《SVG精髓》一书 -->
  <svg class="svg__x">
    <!-- 基础 -->
    <polyline
      points="5,20 20,20 25,10 35,30 45,10 55,30 65,10 75,30 80,20 95,20"
      fill="none"
      stroke="black"
      stroke-width="3"
    />

    <!-- 不设置fill的特殊情况 -->
    <polyline
      points="5,70 20,70 25,60 35,80 45,60 55,80 65,60 75,80 80,70 95,70"
      stroke="red"
      stroke-width="3"
    />

    <!-- 简单填充 -->
    <polyline points="215,10 255,10 245,40 " style="fill: red; stroke: black;" />

  </svg>

  <aside class="explain">
    <ul>
      <li>polyline 是折线标签</li>
      <li>points 指定一系列 x/一坐标对，并用逗号或空格分格</li>
      <li>不设置 fill="none" 可能会出现意想不到的情况</li>
    </ul>
  </aside>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

store.commit('setComponentPath', 'src/views/SVG/Basic/pages/BasicShape/Polyline.vue')
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