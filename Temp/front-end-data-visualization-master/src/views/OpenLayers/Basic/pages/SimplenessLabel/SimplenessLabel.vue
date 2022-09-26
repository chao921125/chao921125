<!-- ol - 简单的标记 -->
<template>
  <div id="map" class="map__x"></div>
  <div ref="popupCom" class="popup" v-show="shopPopup"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View, Feature } from 'ol'
import Tile from 'ol/layer/Tile'
import TileJSON from 'ol/source/TileJSON'
import Point from 'ol/geom/Point'
import * as style from 'ol/style'
import sourceVector from 'ol/source/Vector'
import layerVecor from 'ol/layer/Vector'
import Overlay from 'ol/Overlay'
import 'ol/ol.css'
import iconPng from '@/assets/map/icon.png' // 引入图标图片

const store = useStore()

const map = ref(null)

// 底图源
const rasterLayer = new Tile({
  source: new TileJSON({
    url: 'https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q',
    crossOrigin: ''
  })
})

// 创建图标特性
let iconFeature = new Feature({
  geometry: new Point([0, 0]), // 图标展示的位置
  name: '你点我了',
  population: 4000,
  rainfall: 500
})

// 创建图标样式
let iconStyle = new style.Style({
  image: new style.Icon({ // 定义图标锚点
    anchor: [0.5, 46], // 根据图标的大小，对应上面 [0, 0] 的坐标
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    // 图标所使用的图片文件
    // src: require('../../assets/images/icon.png')
    // 或者
    src: iconPng
  })
})

// 把样式应用到图标上
iconFeature.setStyle(iconStyle)

// 创建矢量容器，将图标特性添加进容器中
let vectorSource = new sourceVector({
  features: [iconFeature]
})

// 创建矢量图层
let vectorLayer = new layerVecor({
  source: vectorSource
})

const shopPopup = ref(false)
const popupCom = ref(null)
const popup = ref(null)

function initMap () {
  // 地图实例
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [rasterLayer, vectorLayer],
    view: new View({ // 地图视图
      center: [0, 0],
      zoom: 3
    })
  })

  map.value.on('singleclick', e => {
    let elPopup = popupCom.value
    popup.value = new Overlay({
      element: elPopup,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -50]
    })
    map.value.addOverlay(popup.value)
    let feature = map.value.forEachFeatureAtPixel(e.pixel, feature => feature)
    
    if (feature) {
      shopPopup.value = true
      elPopup.innerHTML = feature.values_.name
      let coordinates = feature.getGeometry().getCoordinates()
      setTimeout(() => {
        popup.value.setPosition(coordinates)
      }, 0)
    } else {
      shopPopup.value = false
    }
  })
}


onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/SimplenessLabel/SimplenessLabel.vue')
  initMap()
})
</script>

<style lang="scss" scoped>
.map__x {
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
}

.popup {
  background: #fff;
  padding: 10px 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
}
</style>