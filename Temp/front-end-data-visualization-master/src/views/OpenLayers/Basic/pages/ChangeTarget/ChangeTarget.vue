<!-- ol - 切换地图容器 -->
<template>
  <div class="map__container">
    <div id="map1" class="map__x"></div>
    <div id="map2" class="map__x"></div>
  </div>
  <button class="btn" @click="changeMap">change</button>
</template>

<script setup>
/**
 * @作者 羊一止
 * @本例讲解 https://juejin.cn/post/7010960895421448199
 */
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import 'ol/ol.css'

const store = useStore()

const map = ref(null)

function initMap () {
  // 地图实例
  map.value = new Map({
    layers: [ // 图层
      new Tile({
        source: new OSM() // 图层数据源
      })
    ],
    view: new View({ // 地图视图
      projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
      center: [114.064839, 22.548857], // 深圳坐标
      minZoom:10, // 地图缩放最小级别
      zoom: 12 // 地图缩放级别（打开页面时默认级别）
    })
  })

  map.value.setTarget('map1') // 使用 setTarget 绑定地图容器
}

function changeMap() {
  // 获取当前地图容器，并进行判断
  let target = map.value.getTarget() === 'map1' ? 'map2' : 'map1'

  // 重新设置地图容器
  map.value.setTarget(target)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/ChangeTarget/ChangeTarget.vue')
  initMap()
})
</script>

<style lang="scss" scoped>
.map__container {
  width: 800px;
  height: 380px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;

  .map__x {
    width: 380px;
    height: 380px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
}
</style>