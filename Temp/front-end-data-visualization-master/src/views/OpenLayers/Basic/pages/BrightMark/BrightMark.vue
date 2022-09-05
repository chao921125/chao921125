<!-- ol - 定义标记颜色 -->
<template>
  <div id="map" class="map__x"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View, Feature } from 'ol'
import Point from 'ol/geom/Point'
import * as style from 'ol/style'
import Tile from 'ol/layer/Tile'
import TileJSON from 'ol/source/TileJSON'
import sourceVector from 'ol/source/Vector'
import layerVecor from 'ol/layer/Vector'
import 'ol/ol.css'

import dotPng from '@/assets/map/dot.png'

const store = useStore()

// 罗马
let rome = new Feature({
  geometry: new Point([12.5, 31.9])
})

// 伦敦
let london = new Feature({
  geometry: new Point([-0.12755, 41.507222])
})

// 马德里
let madrid = new Feature({
  geometry: new Point([-3.683333, 30.4])
})

// 设置罗马标记点样式
rome.setStyle(new style.Style({
  image: new style.Icon({
    color: '#8959A8',
    crossOrigin: 'anonymous',
    src: dotPng
  })
}))

// 设置伦敦标记点样式
london.setStyle(new style.Style({
  image: new style.Icon({
    color: '#4271AE',
    crossOrigin: 'anonymous',
    src: dotPng
  })
}))

// 设置马德里标记点样式
madrid.setStyle(new style.Style({
  image: new style.Icon({
    color: [113, 140, 0],
    crossOrigin: 'anonymous',
    src: dotPng
  })
}))

let vectorSource = new sourceVector({
  features: [rome, london, madrid]
})

let vectorLayer = new layerVecor({
  source: vectorSource
})

const map = ref(null)

let rasterLayer = new Tile({
  source: new TileJSON({
    url: 'https://api.tiles.mapbox.com/v4/mapbox.world-light.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q',
    crossOrigin: 'anonymous'
  }) 
})

function initMap () {
  // 地图实例
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [ rasterLayer, vectorLayer ],
    view: new View({ // 地图视图
      projection: "EPSG:4326",
      center: [0, 0],
      zoom: 3
    })
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/BrightMark/BrightMark.vue')
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