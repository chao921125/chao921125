<!-- ol - 缩放滑块控件 -->
<template>
  <div id="map" class="map__x"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import BingMaps from 'ol/source/BingMaps'
import * as control from 'ol/control'
import 'ol/ol.css'

const store = useStore()

const map = ref(null)

function initMap () {
  // 地图实例
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [ // 图层
      new Tile({
        source: new BingMaps({
          key: 'AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-',
          imagerySet: 'Aerial'
        })
      })
    ],
    view: new View({ // 地图视图
      projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3 857
      center: [114.064839, 22.548857], // 深圳坐标
      zoom: 6 // 地图缩放级别（打开页面时默认级别）
    }),
    controls: control.defaults().extend([
      new control.ZoomSlider()
    ])
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/ZoomSlider/ZoomSlider.vue')
  initMap()
})
</script>

<style lang="scss" scoped>
.map__x {
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
}

// 控制插件的样式和位置
:deep(.ol-custom-overviewmap),
:deep(.ol-custom-overviewmap.ol-uncollapsible) {
  bottom: auto;
  left: auto;
  right: 0;
  top: 0;
}

:deep(.ol-custom-overviewmap:not(.ol-collapsed)) {
  border: 1px solid black;
}

:deep(.ol-custom-overviewmap .ol-overviewmap-map) {
  border: none;
  width: 300px;
}

:deep(.ol-custom-overviewmap .ol-overviewmap-box) {
  border: 2px solid red;
}

:deep(.ol-custom-overviewmap:not(.ol-collapsed) button) {
  bottom: auto;
  left: auto;
  right: 1px;
  top: 1px;
}

:deep(.ol-rotate) {
  top: 170px;
  right: 0;
}
</style>