<!-- ol - 聚合数据 -->
<template>
  <div id="map" class="map__x"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { Style, Circle, Stroke, Fill, Text } from 'ol/style'
import layerVector from 'ol/layer/Vector'
import sourceVector from 'ol/source/Vector'
import Cluster from 'ol/source/Cluster'
import Point from 'ol/geom/Point'
import Feature from 'ol/Feature'
import 'ol/ol.css'

const store = useStore()

const map = ref(null)

let count = 20000 // 点的数量
let features = [] // 存放点要素的数组

// 初始化每个点的坐标位置
let e = 4500000
for (let i = 0; i < count; ++i) {
  let coordinates = [2 * e * Math.random() - e, 2* e * Math.random() - e]
  // 根据坐标生成点状几何
  features[i] = new Feature(new Point(coordinates))
}

// 把点状要素放到矢量源里
let source = new sourceVector({
  features
})

let clusterSource = new Cluster({
  // 通过 distance 来控制两个点聚合的间距，如果2个点的间距小于 distance 所设置的数时，就会以聚合的方式显示
  distance: parseInt(40, 10),
  source // 就是前面用到的矢量数据源
})

// 点的样式
let styleCache = {}
let clusters = new layerVector({
  source: clusterSource, // 源，指向上面的聚合数据源
  style: feature => { // feature 是聚合后的数据，每一个 feature 代表距离小于上面设置的点状要素
    let size = feature.get('features').length // features 是点状要素
    let style = styleCache[size]
    
    if (!style) {
      style = new Style({
        image: new Circle({
          radius: 10,
          stroke: new Stroke({
            color: '#fff'
          }),
          fill: new Fill({
            color: '#3399cc'
          })
        }),
        text: new Text({
          text: size.toString(), // 以聚合点的数量作为显示的内容
          fill: new Fill({
            color: '#fff'
          })
        })
      })

      styleCache[size] = style
    }

    return style
  }
})

// 底图
let raster = new Tile({
  source: new OSM()
})

function initMap () {
  // 地图实例
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [raster, clusters],
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/Polymerization/Polymerization.vue')
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