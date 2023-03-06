<!-- BMap - 3D建筑 -->
<template>
  <div class="map__x">
    <div id="map_container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// 初始化百度地图
function initBMap() {
  const cityCenter = mapv.utilCityCenter.getCenterByCityName('北京')
  const map = initMap({
    tilt: 80, // 倾斜角，默认是60
    heading: -45.3,
    center: [116.392394, 39.910683],
    zoom: 17
  })
  return map
}

function initData() {
  let data = [{
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [116.392394, 39.910683],
          [116.405976, 39.927727],
          [116.420996, 39.910351]
        ]
      ]
    },
    properties: {
      height: 500, // 多边形高度
    }
  }]
  return data
}

function setData(map, data) {
  let view = new mapvgl.View({ map })
  let shapeLayer = new mapvgl.ShapeLayer({
    color: '#fce38a', // 多边形的颜色
    opacity: 0.3, // 透明度
    style: 'normal'
  })
  view.addLayer(shapeLayer)
  shapeLayer.setData(data)
}

onMounted(() => {
  const map = initBMap()
  const data = initData()
  setData(map, data)
  store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/3DArchitecture/3DArchitecture.vue')
})
</script>

<style lang="scss" scoped>
// 必须手动为地图容器设置宽高
#map_container {
  width: 1000px;
  height: 800px;
}

// 隐藏右下角“百度地图”logo
:deep(.anchorBL) {
  display: none;
}
</style>