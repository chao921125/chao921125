<!-- Viewport 和 ViewBox -->
<template>
  <div class="svg__x">
    <!-- currentColor 继承父级的color -->
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <line
        x1="0" y1="50"
        x2="100" y2="50"
        stroke-width="8"
        stroke="currentColor"
      />
      <line
        x1="50" y1="0"
        x2="50" y2="100"
        stroke-width="8"
        stroke="currentColor"
      />
    </svg>
  </div>

  <svg width="500px" height="200px" viewBox="0 0 50 20" style="border: 1px solid #ccc;">
    <rect x="20" y="10" width="10" height="5" style="stroke: #000; fill: none;" />
  </svg>

  <svg width="500px" height="200px" style="border: 1px solid #ccc;">
    <rect x="200" y="100" width="100" height="50" stroke-width="10" style="stroke: #000; fill: none;" />
  </svg>

  <aside class="explain">
    <ul>
      <li>viewport 是 svg 图像的可见区域</li>
      <li>viewBox 是用于在画布上绘制 svg 图形的坐标系统</li>
      <li>viewBox 要是不指定，默认值是和 svg 的宽高一致的</li>
      <li>比如宽高为 50px * 50px，不指定 viewBox，默认值为 viewBox="0 0 50 50"</li>
    </ul>
  </aside>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
  store.commit('setComponentPath', 'src/views/SVG/Basic/pages/ViewportAndViewBox/ViewportAndViewBox.vue')
})
</script>

<style lang="scss" scoped>
.svg__x {
  width: 50px;
  height: 50px;
  color: hotPink;
  border: 1px solid #ccc;
}

.explain {
  ul > li {
    margin-bottom: 16px;
  }
}
</style>