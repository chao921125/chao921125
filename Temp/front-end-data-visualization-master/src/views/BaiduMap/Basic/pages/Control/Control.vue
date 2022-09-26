<!-- BMap - 控件 -->
<template>
  <div class="map__x">
    <div id="container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// 控件文档：https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html#a2b0

function initMap() {
  const map = new BMapGL.Map('container', {
    minZoom: 11,
    maxZoom: 16,
    mapType: BMAP_NORMAL_MAP
  }) // 这里填入的是容器的 ID
  const point = new BMapGL.Point(116.404, 39.915)
  map.centerAndZoom(point, 12) // 设置中心点和基础缩放级别
  // map.setMinZoom(8) // 设置最小缩放级别
  // map.setMaxZoom(16) // 设置最大缩放级别
  map.enableScrollWheelZoom(true) // 允许滚轮缩放
  // map.setMapType(BMAP_NORMAL_MAP) // 设置成默认(普通地图)，其他类型：https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html#a5b0
  
  // 放大缩小控件
  const zoomCtrl = new BMapGL.ZoomControl({
    anchor: BMAP_ANCHOR_BOTTOM_LEFT, // 默认是在地图右下角，现在把控件设置在左下角（需要注意，因为用css把“百度地图logo”隐藏了，所以要把左下角的控件display设置成block）
    offset: new BMapGL.Size(10, 10), // 位移
  })
  map.addControl(zoomCtrl)

  // 标尺控件
  const scaleVtrl = new BMapGL.ScaleControl({
    anchor: BMAP_ANCHOR_TOP_LEFT, // 该控件必填此项，不然不会显示
    offset: new BMapGL.Size(10, 10) // 此项非必填
  })
  map.addControl(scaleVtrl)

  // 监听缩放
  map.addEventListener('zoomstart', function() {
    console.log('zoom缩放前：', map.getZoom())
  })
  map.addEventListener('zoomend', function() {
    console.log('zoom缩放后：', map.getZoom())
  })
}

onMounted(() => {
  initMap()
  store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/Control/Control.vue')
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

:deep(.BMap_stdMpZoom) {
  display: block;
}
</style>