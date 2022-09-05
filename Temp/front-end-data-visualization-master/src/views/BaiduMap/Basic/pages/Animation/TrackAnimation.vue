<!-- BMap - 轨迹动画 TrackAnimation -->
<template>
  <div class="map__x">
    <div id="container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// 要使用 TrackAnimation 动画，需要引入 TrackAnimation.js
// https://api.map.baidu.com/library/TrackAnimation/src/TrackAnimation_min.js
// TrackAnimation.js 在 index.html 中已引入

function initMap() {
  const map = new BMapGL.Map('container') // 这里填入的是容器的 ID
  const point = new BMapGL.Point(116.2967611, 40.047363)
  map.centerAndZoom(point, 15) // 设置中心点和基础缩放级别
  map.enableScrollWheelZoom(true) // 允许滚轮缩放
  map.setHeading(0)

  // 路径
  let points = [
    new BMapGL.Point(116.418038, 39.91979),
    new BMapGL.Point(116.418267, 40.0592479),
    new BMapGL.Point(116.307899, 40.057038)
  ]

  const opts = {
    delay: 1000, // 延迟
    duration: 20000, // 动画时长（默认是10秒）
    titl: 30, // 倾角动画
    overallView: true, // 动画播放完会自动调整倾斜角
  }

  const lines = new BMapGL.Polyline(points)
  const trackAnimation = new BMapGLLib.TrackAnimation(map, lines, opts)
  trackAnimation.start() // 开始播放
  // trackAnimation.cancel() // 暂停
}

onMounted(() => {
  initMap()
  store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/Animation/TrackAnimation.vue')
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