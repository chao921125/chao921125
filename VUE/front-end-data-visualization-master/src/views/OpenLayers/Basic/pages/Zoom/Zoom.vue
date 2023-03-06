<!-- ol - 缩放 -->
<template>
  <div id="map" class="map__x"></div>
  <div class="zoom__info">
    <p>当前zoom: {{currentZoom}}</p>
    <p>minZoom: {{minZoom}}</p>
    <p>maxZoom: {{maxZoom}}</p>
  </div>
  <div>
    <button @click="zoomIn">放大</button>
    <button @click="zoomOut">缩小</button>
  </div>
</template>

<script setup>
/**
 * @作者 羊一止
 * @本例讲解 https://juejin.cn/post/7008444700398977061
 */
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import 'ol/ol.css'

const store = useStore()

const map = ref(null)

const zoom = 12 // 初始化zoom
const minZoom = 10 // 最小zoom
const maxZoom = 14 // 最大zoom

// 初始化
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
      zoom, // 地图缩放级别（打开页面时默认级别）
      minZoom, // 地图缩放最小级别
      maxZoom // 地图缩放最大级别
    })
  })
}

// 实时获取当前地图的 zoom
const currentZoom = computed(() => {
  if (map.value) {
    return map.value.getView().getZoom()
  }
  return zoom
})

// 放大1级
function zoomIn() {
  let view = map.value.getView() // 获取当前视图
  let zoom = view.getZoom() // 获取当前缩放级别
  view.setZoom(zoom + 1)
}

// 缩小1级
function zoomOut() {
  let view = map.value.getView() // 获取当前视图
  let zoom = view.getZoom() // 获取当前缩放级别
  view.setZoom(zoom - 1)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/Zoom/Zoom.vue')
  initMap()
})
</script>

<style lang="scss" scoped>
.map__x {
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
}

.zoom__info {
  display: flex;

  p {
    margin-right: 60px;
  }
}
</style>