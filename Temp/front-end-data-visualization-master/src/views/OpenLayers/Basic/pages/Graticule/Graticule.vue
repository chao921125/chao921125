<!-- ol - 网格 -->
<template>
  <div id="map" class="map__x"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Stroke from 'ol/style/Stroke'
import Tile from 'ol/layer/Tile'
import Graticule from 'ol/layer/Graticule'
import BingMaps from 'ol/source/BingMaps'
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
          imagerySet: 'Road'
        })
      })
    ],
    view: new View({
      projection: 'EPSG:4326', 
      center: [114.064839, 22.548857],
      zoom: 6
    })
  })

  let graticule = new Graticule({
    strokeStyle: new Stroke({
      color: 'rgba(255, 120, 0, .5)', // 线条颜色
      width: 2, // 线条宽度
      lineDash: [4] // 虚线，每隔4像素
    }),
    showLabels: true
  })

  graticule.setMap(map.value)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/Graticule/Graticule.vue')
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