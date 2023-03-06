<!-- ol - 切换图源 -->
<template>
  <div id="map" class="map__x"></div>
  <button @click="setSource('osm')">设置为OSM</button>
  <button @click="setSource('bing')">设置为BingMaps</button>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import { OSM, BingMaps } from 'ol/source'
import 'ol/ol.css'

const store = useStore()

const map = ref(null)

const source = reactive({
  osm: new OSM(),
  bing: new BingMaps({
    key: 'AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-',
    imagerySet: 'Aerial'
  })
})

const layer = new Tile()

function initMap () {
  // 地图实例
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [layer],
    view: new View({ // 地图视图
      projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
      center: [114.064839, 22.548857], // 深圳坐标
      minZoom:10, // 地图缩放最小级别
      zoom: 12 // 地图缩放级别（打开页面时默认级别）
    })
  })
  layer.setSource(source.osm)
}

// 切换/设置图源
function setSource(data) {
  layer.setSource(source[data])
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/SetSource/SetSource.vue')
  initMap()
})
</script>

<style lang="scss" scoped>
.map__x {
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
}
</style>