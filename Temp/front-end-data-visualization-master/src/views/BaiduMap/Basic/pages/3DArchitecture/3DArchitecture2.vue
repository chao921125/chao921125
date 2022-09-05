<!-- BMap - 3D建筑（墨卡托投影坐标） -->
<template>
  <div class="map__x">
    <div id="map_container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import cqArchitecture from '@/assets/map/cqArchitecture.json'

const store = useStore()

// 需要将 墨卡托投影坐标 转换成 百度地图坐标系
// 可以用百度地图提供的坐标转换api来实现：https://lbsyun.baidu.com/index.php?title=webapi/guide/changeposition
// https://api.map.baidu.com/geoconv/v1/?coords=114.21892734521,29.575429778924&from=1&to=5&ak=你的密钥 //GET请求

// 模仿案例：https://mapv.baidu.com/gl/docs/ShapeLayer.html

// 初始化百度地图
function initBMap() {
  const cityCenter = mapv.utilCityCenter.getCenterByCityName('北京')
  const map = initMap({
    tilt: 80, // 倾斜角，默认是60
    heading: -45.3,
    center: [106.540547, 29.564858],
    zoom: 17
  })
  return map
}

function initData() {
  let polygons = [] // 面

  let len = cqArchitecture.length
  for (let i = 0; i < len; i++) {
    let line = cqArchitecture[i]
    let polygon = []
    let pt = [line[1] * 512, line[2] * 512]
    for (let j = 3; j < line.length; j += 2) {
      pt[0] += line[j] / 100 / 2
      pt[1] += line[j + 1] / 100 / 2
      polygon.push([pt[0], pt[1]])
    }
    polygons.push({
      geometry: {
        type: 'Polygon',
        coordinates: [polygon]
      },
      properties: {
        height: line[0] / 2
      }
    })
  }

  return polygons
}

function setData(map, data) {
  let view = new mapvgl.View({ map })
  let shapeLayer = new mapvgl.ShapeLayer({
    color: '#fce38a', // 多边形的颜色
    opacity: 0.3, // 透明度
    style: 'windowAnimation', // normal，默认，正常；window，窗户效果；windowAnimation，窗户动画效果；gradual，渐变效果
    // blend: 'lighter',
    riseTime: 2000, // 建筑升起动画时长（毫秒）
    enablePicked: true, // 可以被选中
    selectedIndex: -1, // 默认时选中项为 -1
    selectedColor: '#95e1d3', // 选中时候的颜色
    autoSelect: true, // 根据鼠标位置来选中
    onClick: e => { // 选中的事件
      console.log(e)
    }
  })
  view.addLayer(shapeLayer)
  shapeLayer.setData(data)
}

onMounted(() => {
  const map = initBMap()
  const data = initData()
  setData(map, data)
  store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/3DArchitecture/3DArchitecture2.vue')
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