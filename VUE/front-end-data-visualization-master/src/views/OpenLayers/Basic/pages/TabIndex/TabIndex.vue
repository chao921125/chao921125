<!-- ol - 点击激活地图 -->
<template>
  <div tabindex="2" id="map" class="map__x"></div>
  <div class="explain">
    <p>通过给地图容器设置 tabindex="2" 来控制默认不会选中地图。</p>
    <p>只有当鼠标点击地图时，才能进行缩放等操作。</p>
    <p>如果没选中地图，即使在地图上滑动滚轮，也不会操作到地图。</p>
  </div>
  <div class="occupied"></div>
</template>

<script setup>
/**
 * @作者 羊一止
 * @本例讲解 https://juejin.cn/post/7008808627326681101/
 */
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import 'ol/ol.css'

const store = useStore()

const map = ref(null)

function initMap() {
  map.value = new Map({
    target: 'map',
    layers: [
      new Tile({
        source: new OSM()
      })
    ],
    view: new View({
      projection: "EPSG:4326",
      center: [113.120444,23.034742],
      zoom: 12
    })
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/TabIndex/TabIndex.vue')
  initMap()
})
</script>

<style lang="scss" scoped>
.map__x {
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
}

.occupied {
  width: 1px;
  height: 2000px;
}
</style>