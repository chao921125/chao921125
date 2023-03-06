<!-- ol - 标记 -->
<template>
  <div id="map" class="map__x" ref="mapCom"></div>
  <a
    class="vienna"
    target="_blank"
    ref="viennaTxtCom"
    href="https://baike.baidu.com/item/%E7%BB%B4%E4%B9%9F%E7%BA%B3/6412?fr=aladdin"
  >维也纳（点击跳转）</a>
  <div class="marker" title="Marker" ref="markerCom"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import { OSM } from 'ol/source'
import { fromLonLat } from 'ol/proj'
import Overlay from 'ol/Overlay.js'
import 'ol/ol.css'

// 文档说明：https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html#setPosition

const store = useStore()

const mapCom = ref(null) // 地图容器
const viennaTxtCom = ref(null) // 文本标签链接
const markerCom = ref(null) // 标记容器（使用css设置成圆圈）

let pos = fromLonLat([16.3725, 48.208889]) // 维也纳坐标

const map = ref(null) // 地图实例
const vienna = ref(null) // 维也纳文字标签
const marker = ref(null) // 维也纳“圆点”标签

// 初始化
function initMap() {

  // 文字标签
  vienna.value = new Overlay({
    position: pos,
    element: viennaTxtCom.value,
    positioning: 'top-center'
  })

  // 圆圈标签
  marker.value = new Overlay({
    position: pos,
    positioning: 'bottom-center', // 如果不配置，则圆的左上角和坐标点对其
    element: markerCom.value,
    stopEvent: false, // 不阻止默认事件，比如鼠标放到圆点上时，滚动鼠标滚轮，也可以缩放地图
  })

  // 实例化地图
  map.value = new Map({
    target: mapCom.value,
    layers: [
      new Tile({
        source: new OSM()
      })
    ],
    // overlays: [marker.value, vienna.value], // 添加标记方式1
    view: new View({
      center: pos,
      zoom: 12
    })
  })

  // 添加标记方式2
  map.value.addOverlay(marker.value)
  map.value.addOverlay(vienna.value)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/Marker/Marker.vue')
  initMap()
})
</script>

<style lang="scss" scoped>
.map__x {
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
}

.marker {
  width: 30px;
  height: 30px;
  border: 6px solid rgb(89, 0, 255);
  border-radius: 50%;
  background-color: rgb(0, 252, 252);
  opacity: 0.5;
}
.vienna {
  text-decoration: none;
  color: #fff;
  font-size: 20pt;
  font-weight: bold;
  text-shadow: 0 0 0.4em #000;
}
</style>