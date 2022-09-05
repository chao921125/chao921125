<!-- BMap - 绘制多边形 -->
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
  const point = new BMapGL.Point(113.942651, 22.53945)
  map.centerAndZoom(point, 12) // 设置中心点和基础缩放级别
  map.enableScrollWheelZoom(true) // 允许滚轮缩放

  const polygon = new BMapGL.Polygon([
    new BMapGL.Point(113.942651, 22.53945),
    new BMapGL.Point(113.862651, 22.42945),
    new BMapGL.Point(113.82651, 22.43945),
    new BMapGL.Point(113.80651, 22.53945)
  ], {
    strokeColor: '#e84a5f', // 边框颜色
    strokeWeight: 10, // 边框重量（粗细的值）
    strokeOpacity: 0.5, // 边框透明度
    fillColor: '#10ddc2', // 填充色
  })

  map.addOverlay(polygon)
}

onMounted(() => {
  initMap()
  store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/Layer/DrawPolygon.vue')
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