<!-- BMap - 起步 -->
<template>
  <div class="map__x">
    <div id="container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

function initMap() {
  const map = new BMapGL.Map('container') // 这里填入的是容器的 ID
  const point = new BMapGL.Point(116.404, 39.915)
  map.centerAndZoom(point, 12) // 设置中心点和基础缩放级别
  map.enableScrollWheelZoom(true) // 允许滚轮缩放
}

onMounted(() => {
  initMap()
  store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/Stated/Stated.vue')
})
</script>

<style lang="scss" scoped>
// 必须手动为地图容器设置宽高
#container {
  width: 600px;
  height: 600px;
}

// 隐藏右下角“百度地图”logo
:deep(.anchorBL) {
  display: none;
}
</style>