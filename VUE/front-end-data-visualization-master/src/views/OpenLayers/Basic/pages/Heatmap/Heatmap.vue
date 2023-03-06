<!-- ol - 热力图 -->
<template>
  <div id="map" class="map__x" ref="map"></div>

  <label>半径大小</label>
  <input id="radius" type="range" min="1" max="50" step="1" v-model="radius" @change="changeRadius" />
  
  <label>模糊半径</label>
  <input id="blur" type="range" min="1" max="50" step="1" v-model="blur" @change="changeBlur" />

  <button @click="getHeatName">在控制台输出涂层名</button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import { Heatmap, Tile } from 'ol/layer'
import { Vector as SourceVector, Stamen } from 'ol/source' // Stamen是底图
import GeoJSON from 'ol/format/GeoJSON' // 解析geojson格式
import HeatData from '@/assets/map/heatData.json'
import 'ol/ol.css'

const radius = ref(15)
const blur = ref(5)

const store = useStore()

const map = ref(null)
const vector = ref(null)

function initMap () {
  vector.value = new Heatmap({ // 热力图
    name: '热力热力',
    source: new SourceVector({
      features: new GeoJSON().readFeatures(HeatData, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:4326"
      })
    }),
    radius: 10, // 半径大小
    blur: 10, // 模糊
    gradient: ["#00f", "#0ff", "#0f0", "#ff0", "#f00"], // 热力图颜色（可以不设置）
  })
  // 地图实例
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [ // 图层
      new Tile(
        {
          name: '底图',
          source: new Stamen({ // 底图
            layer: 'toner'
          })
        }
      ),
      vector.value
    ],
    view: new View({ // 地图视图
      projection: "EPSG:3857", // 坐标系，有EPSG:4326和EPSG:3857
      center: [20.042007, -35.349998], // 深圳坐标
      zoom: 19 // 地图缩放级别（打开页面时默认级别）
    })
  })
}

// 修改半径大小
function changeRadius() {
  vector.value.setRadius(parseInt(radius.value, 10))
}

// 修改模糊半径
function changeBlur() {
  vector.value.setBlur(parseInt(blur.value, 10))
}

// 在控制台输出图层名
function getHeatName() {
  let layers = map.value.getLayers()
  for (var i = 0; i < layers.getLength(); i++) {
    // console.log(layers.item(i))
    console.log('图层名：', layers.item(i).get('name'))
  }
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/Heatmap/Heatmap.vue')
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