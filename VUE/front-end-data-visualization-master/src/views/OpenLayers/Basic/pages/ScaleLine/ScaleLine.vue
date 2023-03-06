<!-- ol - 比例尺控件 -->
<template>
  <!-- 地图组件 -->
  <div id="map" class="map__x"></div>

  <!-- 单位选择器 -->
  <select id="units" v-model="scaleplate" @change="setScaleLine">
    <option v-for="item in scaleplateList" :key="item.v">{{item.t}}</option>
  </select>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import BingMaps from 'ol/source/BingMaps'
import * as control from 'ol/control'
import 'ol/ol.css'

const store = useStore()

const scaleplate = ref('度')
const scaleplateList = reactive([
  {
    t: '度',
    v: 'degrees'
  },
  {
    t: '英制英尺',
    v: 'imperial'
  },
  {
    t: '美制英尺',
    v: 'us'
  },
  {
    t: '海里',
    v: 'nautical'
  },
  {
    t: '公制',
    v: 'metric'
  }
])
const scaleLineControl = ref(null)

const map = ref(null)

function initMap () {
  scaleLineControl.value = new control.ScaleLine()

  // 地图实例
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [ // 图层
      new Tile({
        source: new BingMaps({
          key: 'AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-',
          imagerySet: 'Aerial'
        })
      })
    ],
    view: new View({ // 地图视图
      projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
      center: [114.064839, 22.548857], // 深圳坐标
      zoom: 12 // 地图缩放级别（打开页面时默认级别）
    }),
    controls: control.defaults().extend([
      scaleLineControl.value // 比例尺
    ])
  })

  setScaleLine() // 设置比例尺单位
}

// 设置比例尺单位
function setScaleLine() {
  // 从列表里找到当前单位
  let unit = scaleplateList.find(item => {
    return item.t === scaleplate.value
  })
  // 设置单位，注意unit.v的值，必须使用这些值
  scaleLineControl.value.setUnits(unit.v)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/ScaleLine/ScaleLine.vue')
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