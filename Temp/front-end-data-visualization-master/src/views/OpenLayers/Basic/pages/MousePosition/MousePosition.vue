<!-- ol - 鼠标位置控件 -->
<template>
  <!-- 地图组件 -->
  <div id="map" class="map__x"></div>

  <!-- 鼠标当前位置 -->
  <div ref="mousePositionTxt" class="mouse__position__txt"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import BingMaps from 'ol/source/BingMaps'
import * as control from 'ol/control'
import * as coordinate from 'ol/coordinate';
import 'ol/ol.css'

const store = useStore()

const mousePositionTxt = ref(null)

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
      new control.MousePosition({
        coordinateFormat: coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        target: mousePositionTxt.value
      })
    ])
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/MousePosition/MousePosition.vue')
  initMap()
})
</script>

<style lang="scss" scoped>
.map__x {
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
}

.mouse__position__txt {
  position: relative;
  
  :deep(.ol-mouse-position) {
    position: static;
  }
}
</style>