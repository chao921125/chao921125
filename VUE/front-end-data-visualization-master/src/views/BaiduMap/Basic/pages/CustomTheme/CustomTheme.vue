<!-- BMap - 自定义主题 -->
<template>
  <div class="map__x">
    <div id="container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// 个性化地图文档：https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/custom
// 个性化地图编辑器：https://lbsyun.baidu.com/apiconsole/custommap

function initMap() {
  const map = new BMapGL.Map('container') // 这里填入的是容器的 ID
  const point = new BMapGL.Point(116.404, 39.915)
  map.centerAndZoom(point, 12) // 设置中心点和基础缩放级别
  map.enableScrollWheelZoom(true) // 允许滚轮缩放
  map.setMapStyleV2({
    // styleJson: [{}], // JSON的方式
    styleId: 'f1479cb75b9c850e24c98229cb077a67' // 使用生成ID的方式
  })
}

onMounted(() => {
  initMap()
  store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/CustomTheme/CustomTheme.vue')
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