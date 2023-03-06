<!-- ol - 起步 -->
<template>
  <div id="map" class="map__x"></div>
</template>

<script setup>
/**
 * @作者 羊一止
 * @本例讲解 https://juejin.cn/post/7006583321152978958/
 */
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import 'ol/ol.css'

const store = useStore()

const map = ref(null)

function initMap () {
  // 地图实例
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [ // 图层
      new Tile({
        source: new OSM() // 图层数据源
      })
    ],
    view: new View({ // 地图视图
      projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
      center: [114.064839, 22.548857], // 深圳坐标
      minZoom:10, // 地图缩放最小级别
      zoom: 12 // 地图缩放级别（打开页面时默认级别）
    })
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/Stated/Stated.vue')
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