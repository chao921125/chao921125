<!-- BMap - 绘制图标 -->
<template>
  <div class="map__x">
    <div id="container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import logo from '@/assets/images/logo.png'

const store = useStore()

function initMap() {
  const map = new BMapGL.Map('container') // 这里填入的是容器的 ID
  const point = new BMapGL.Point(113.298378,23.20661)
  map.centerAndZoom(point, 18) // 设置中心点和基础缩放级别
  map.enableScrollWheelZoom(true) // 允许滚轮缩放

  // Icon 文档：https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html#a3b4
  const myIcon = new BMapGL.Icon(
    logo,
    new BMapGL.Size(60, 60),
    {
      // anchor: new BMapGL.Size(100, 100), // 设置位移
      // imageOffset: new BMapGL.Size(30, 30) // 位移图片，有点像background-position
    }
  )

  // Marker 文档：https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html#a3b2
  const marker = new BMapGL.Marker(point, { icon: myIcon })
  map.addOverlay(marker)
}

onMounted(() => {
  initMap()
  store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/Layer/DrawIcon.vue')
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