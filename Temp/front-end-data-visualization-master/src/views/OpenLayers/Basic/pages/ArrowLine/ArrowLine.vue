<!-- ol - 带箭头的线段 -->
<template>
  <div id="map" class="map__x"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import LayerVector from 'ol/layer/Vector'
import SourceVector from 'ol/source/Vector'
import Draw from 'ol/interaction/Draw'
import { Style, Stroke, Icon } from 'ol/style'
import Point from 'ol/geom/Point'
import 'ol/ol.css'

// 箭头图片
import arrowPng from '@/assets/map/arrow.png'

const store = useStore()

function styleFunction(feature) {
  let geometry = feature.getGeometry()
  let styles = [
    new Style({
      stroke: new Stroke({
        color: '#ffcc33',
        width: 2
      })
    })
  ]

  geometry.forEachSegment((start, end) => {
    let dx = end[0] - start[0]
    let dy = end[1] - start[1]
    let rotation = Math.atan2(dy, dx)
    styles.push(new Style({
      geometry: new Point(end),
      image: new Icon({
        src: arrowPng,
        anchor: [0.75, 0.5],
        rotateWithView: true,
        rotation: -rotation
      })
    }))
  })
  return styles
}

// 底图
const raster = new Tile({
  source: new OSM()
})

const source = new SourceVector({
  wrapX: false // 禁止横向无限重复（底图渲染的时候会横向无限重复），设置了这个属性，可以让绘制的图形不跟随底图横向无限重复
})
const vector = new LayerVector({
  source: source,
  style: styleFunction
})

const map = ref(null)

function initMap () {
  // 地图实例
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [raster, vector],
    view: new View({
      projection: "EPSG:4326",
      center: [115.543045,45.16871],
      zoom: 10
    })
  })

  map.value.addInteraction(new Draw({
    source: source,
    type: 'LineString',
    // freehand: true // 如果加上自由绘制哈哈哈哈哈哈
  }))
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/ArrowLine/ArrowLine.vue')
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