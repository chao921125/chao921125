<!-- ol - 弹窗 -->
<template>
<div id="map" class="map__x" ref="mapCom"></div>
<div ref="popupCom" class="popup">
  <span class="icon-close" @click="closePopup">✖</span>
  <div class="content">{{currentCoordinate}}</div>
</div>
</template>

<script setup>
/**
 * @作者 羊一止
 * @本例讲解 https://juejin.cn/post/7008372799441993742/
 */
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ' // 引入XYZ地图格式
import Overlay from 'ol/Overlay'
import 'ol/ol.css'

// 本例用到 Overlay.setPosition
// Overlay.setPosition文档：https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html#setPosition

const store = useStore()

// 地图容器
const mapCom = ref(null)

// 弹窗容器
const popupCom = ref(null)

const map = ref(null) // 地图实例
const currentCoordinate = ref('') // 弹窗信息

const overlay = ref(null)

function initMap() {
  overlay.value = new Overlay({
    element: popupCom.value, // 弹窗标签，在html里
    autoPan: true, // 如果弹窗在底图边缘时，底图会移动
    autoPanAnimation: { // 底图移动动画
      duration: 250
    }
  })
  map.value = new Map({
    target: mapCom.value,
    layers: [
      new Tile({
        name: 'defaultLayer',
        source: new XYZ({
          url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
        })
      })
    ],
    view: new View({
      projection: 'EPSG:4326',
      center: [113.1206, 23.034996],
      zoom: 12 // 地图缩放级别（打开页面时默认级别）
    }),
    overlays: [overlay.value]
  })

  mapClick()
}

// 点击地图
function mapClick() {
  map.value.on('singleclick', evt => {
    const coordinate = evt.coordinate // 获取坐标
    currentCoordinate.value = coordinate // 保存坐标点
    overlay.value.setPosition(coordinate)
  })
}

// 关闭弹窗
function closePopup () {
  overlay.value.setPosition(undefined) // setPosition 传入undefined会隐藏弹窗元素
  currentCoordinate.value = ''
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/Popup/Popup.vue')
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
  width: 300px;
  height: 100px;
  background: #fff;
  position: absolute;
  top: -115px;
  left: -150px;
  box-sizing: border-box;
  padding: 10px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    background: #fff;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }

  .icon-close {
    position: absolute;
    top: 0px;
    right: 8px;
    cursor: pointer;
  }

  .content {
    margin-top: 14px;
  }
}
</style>