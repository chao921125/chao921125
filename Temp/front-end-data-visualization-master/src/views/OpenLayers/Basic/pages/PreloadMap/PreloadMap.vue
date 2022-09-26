<!-- ol - 预加载 preload -->
<template>
  <!-- 预加载 -->
  <div id="map1" class="map__x"></div>

  <!-- 默认 -->
  <div id="map2" class="map__x"></div>

  <div class="explain">
    <p>预加载：preload: Infinity</p>
    <p>默认值：preload: 0</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import BingMaps from 'ol/source/BingMaps'
import 'ol/ol.css'

const store = useStore()

const map1 = ref(null)
const map3 = ref(null)

const mapView = new View({
  projection: "EPSG:4326",
  center: [114.064839, 22.548857],
  zoom: 10
})

function initMap() {
  // 初始化 map1
  map1.value = new Map({
    target: 'map1',
    layers: [
      new Tile({
        preload: Infinity, // 预加载
        source: new BingMaps({
          key: 'AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-',
          imagerySet: 'Aerial'
        })
      })
    ],
    view: mapView
  })

  // 初始化 map2
  map2.value = new Map({
    target: 'map2',
    layers: [
      new Tile({
        preload: 0, // 默认值
        source: new BingMaps({
          key: 'AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-',
          imagerySet: 'Aerial'
        })
      })
    ],
    view: mapView
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/PreloadMap/PreloadMap.vue')
  initMap()
})
</script>

<style lang="scss" scoped>
.map__x {
  width: 800px;
  height: 380px;
  position: relative;
  margin-bottom: 40px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

#map1::after,
#map2::after {
  position: absolute;
  display: block;
  font-size: 18px;
  left: 50%;
  bottom: -28px;
  transform: translateX(-50%);
}

#map1::after {
  content: '预加载'
}

#map2::after {
  content: '默认'
}
</style>