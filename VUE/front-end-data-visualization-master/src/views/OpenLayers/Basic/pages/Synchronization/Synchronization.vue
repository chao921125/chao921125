<!-- ol - 同步两个地图 -->
<template>
  <div class="map__container">
    <div id="OSM" class="map__x"></div>
    <div id="BingMaps" class="map__x"></div>
  </div>

  <div class="explain">
    <p>两个地图使用同一个view，所以在移动、缩放、旋转等操作都是同步的。</p>
    <p>按住shift，鼠标在地图上选区，可以放大选区。</p>
    <p>按住alt+shift，鼠标可以在地图上拖拽，进行旋转。</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import BingMaps from 'ol/source/BingMaps'
import 'ol/ol.css'

const store = useStore()

const mapO = ref(null)
const mapB = ref(null)

const mapView = new View({
  center: [0, 0],
  zoom: 2
})

const layerO = new Tile({
  source: new OSM()
})

const layerB = new Tile({
  source: new BingMaps({
    key: 'AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-',
    imagerySet: 'Aerial'
  })
})

// 初始化
function initMap () {
  mapO.value = new Map({
    target: 'OSM',
    layers: [layerO],
    view: mapView
  })

  mapB.value = new Map({
    target: 'BingMaps',
    layers: [layerB],
    view: mapView
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/Synchronization/Synchronization.vue')
  initMap()
})
</script>

<style lang="scss" scoped>
.map__container {
  width: 800px;
  height: 380px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;

  .map__x {
    width: 380px;
    height: 380px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    position: relative;
  }

  #OSM::after,
  #BingMaps::after {
    position: absolute;
    display: block;
    font-size: 18px;
    left: 50%;
    bottom: -28px;
    transform: translateX(-50%);
  }

  #OSM::after {
    content: 'OSM'
  }

  #BingMaps::after {
    content: 'BingMap'
  }
}
</style>