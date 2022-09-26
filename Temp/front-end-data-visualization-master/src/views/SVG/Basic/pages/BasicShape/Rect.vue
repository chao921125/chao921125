<!-- 矩形 -->
<template>
  <svg class="svg__x" viewBox="0 0 500 200">
    <!-- 默认 -->
    <rect x="10" y="10" width="60" height="30" />

    <!-- 无填充色，只描边 -->
    <rect x="10" y="50" width="60" height="30" fill="none" stroke="red" />

    <!-- 填充黄色，半透明蓝色边框 -->
    <rect x="10" y="90" width="60" height="30" fill="#ffde7d" stroke="#3f72af" stroke-width="5" stroke-opacity="0.5" />

    <!-- 填充半透明黄色，绿色虚线边框 -->
    <rect x="10" y="140" width="100" height="40" fill="#ffde7d" fill-opacity="0.5" stroke="#00b8a9" stroke-width="2" stroke-dasharray="5 2" />

    <!-- 圆角矩形 -->
    <rect x="80" y="10" width="60" height="30" rx="6" ry="6" fill="none" stroke="#3f72af" />
    <rect x="80" y="50" width="60" height="30" rx="10" ry="10" fill="none" stroke="#3f72af" />
    <rect x="80" y="90" width="60" height="30" rx="15" ry="15" fill="none" stroke="#3f72af" />

    <rect x="150" y="10" width="60" height="30" rx="6" ry="20" fill="none" stroke="#3f72af" />
    <rect x="150" y="50" width="60" height="30" rx="20" ry="6" fill="none" stroke="#3f72af" />
  </svg>
  <aside class="explain">
    <ul>
      <li>rect 是线段标签</li>
      <li>矩形只需指定其左上角的x和y坐标以及宽度和高度即可</li>
      <li>fill 填充色，默认黑色，none代表不填充（透明）</li>
      <li>fill-opacity 填充色不透明度</li>
      <li>stroke 边框颜色</li>
      <li>stroke-width 边框宽度</li>
      <li>stroke-opacity 边框不透明度</li>
      <li>stroke-dasharray 点线或虚线</li>
      <li>rx x方向的圆角半径，最大值是矩形宽度的一半</li>
      <li>ry y方向的圆角半径，最大值是矩形高度的一半</li>
      <li>如果只指定rx和ry中的一个值，则认为它们相等</li>
    </ul>
  </aside>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
  store.commit('setComponentPath', 'src/views/SVG/Basic/pages/BasicShape/Rect.vue')
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