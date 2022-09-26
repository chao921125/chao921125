<!-- ol - 矢量图 JSON -->
<template>
  <div id="map" class="map__x"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import SourceVector from 'ol/source/Vector'
import LayerVector from 'ol/layer/Vector'
import GeoJSON from 'ol/format/GeoJSON'
import CN from '@/assets/map/MapOfChina.json' // 矢量图（中国版）
import 'ol/ol.css'

// 矢量图数据生成网站：https://datav.aliyun.com/tools/atlas/index.html

const store = useStore()

const map = ref(null)

function initMap () {
  // 地图实例
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [ // 图层
      new LayerVector({
        source: new SourceVector({
          features: new GeoJSON().readFeatures(CN, {
            dataProjection: 'EPSG:4326',
            featureProjection: "EPSG:4326"
          })
        })
      })
    ],
    view: new View({ // 地图视图
      projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
      center: [114.064839, 22.548857],
      zoom: 3 // 地图缩放级别（打开页面时默认级别）
    })
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/VectorJSON/VectorJSON.vue')
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