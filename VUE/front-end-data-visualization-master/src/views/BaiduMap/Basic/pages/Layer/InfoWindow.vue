<!-- BMap - 包含信息的窗口 -->
<template>
  <div class="map__x">
    <div id="container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import logo from '@/assets/images/logo.png'

const store = useStore()

const map = ref(null)
const point = ref(null)
const marker = ref(null)

// marker 点击事件
function markerHandleClick() {
  const infoWindow = new BMapGL.InfoWindow(
    '内容：数据可视化', // 可以传入纯文本，也可以传入富文本（字符串型）
    {
      width: 250,
      height: 100,
      title: '标题标题',
      offset: new BMapGL.Size(0, -20)
    }
  )
  map.value.openInfoWindow(infoWindow, point.value)
}

// 初始化地图
function initMap() {
  map.value = new BMapGL.Map('container') // 这里填入的是容器的 ID
  point.value = new BMapGL.Point(113.298378,23.20661)
  map.value.centerAndZoom(point.value, 18) // 设置中心点和基础缩放级别
  map.value.enableScrollWheelZoom(true) // 允许滚轮缩放

  // Icon 文档：https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html#a3b4
  const myIcon = new BMapGL.Icon(
    logo,
    new BMapGL.Size(60, 60)
  )

  // Marker 文档：https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html#a3b2
  marker.value = new BMapGL.Marker(point.value, { icon: myIcon })
  marker.value.addEventListener('click', markerHandleClick) // 绑定点击事件
  map.value.addOverlay(marker.value)
}

onMounted(() => {
  initMap()
  store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/Layer/InfoWindow.vue')
})

onUnmounted(() => {
  // 组件销毁时删除监听事件
  marker.value.removeEventListener('click', markerHandleClick)
})
</script>

<style lang="scss" scoped>
// 必须手动为地图容器设置宽高
#container {
  width: 600px;
  height: 600px;
}

// 隐藏右下角“百度地图”logo
:deep(.anchorBL) {
  display: none;
}
</style>