<!-- BMap - 飞线图 -->
<template>
  <div class="map__x">
    <div id="map_container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
// 飞线图文档：https://mapv.baidu.com/gl/docs/FlyLineLayer.html
// 贝塞尔曲线工具文档（内置工具）：https://mapv.baidu.com/gl/docs/BezierCurve.html

// 基于Threejs实现，使用前需要额外引入mapvgl.threelayers包
// https://unpkg.com/mapvgl/dist/mapvgl.threelayers.min.js
// 或
// https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.130/dist/mapvgl.threelayers.min.js

// 使用 script src="https://mapv.baidu.com/gl/examples/static/common.js"
// common.js 需要指定容器 id 为 map_container

// 使用 script src="https://mapv.baidu.com/build/mapv.js 可以通过城市名获取坐标

// 使用 script src="https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.54/dist/mapvgl.min.js" mapvgl 进行绘制

// 初始化百度地图
function initBMap() {
  const cityCenter = mapv.utilCityCenter.getCenterByCityName('上海')
  const map = initMap({
    tilt: 60, // 倾斜角，默认是60
    center: [cityCenter.lng, cityCenter.lat],
    zoom: 6,
    style: purpleStyle // 底图皮肤。purpleStyle 是common.js提供的
  })
  return map
}

// 准备数据源
function initData() {
  // 数据源需要提供起点坐标和终点坐标
  let data = []

  // 生成贝塞尔曲线坐标集
  // 1. 实例化贝塞尔曲线对象
  const curve = new mapvgl.BezierCurve()

  // 2. 设置起点和终点的坐标
  let start = mapv.utilCityCenter.getCenterByCityName('上海')
  let end = mapv.utilCityCenter.getCenterByCityName('北京')
  curve.setOptions({
    start: [start.lng, start.lat],
    end: [end.lng, end.lat]
  })

  // 3. 生成贝塞尔曲线坐标集
  let curveData = curve.getPoints()
  data.push({
    geometry: {
      type: 'LineString', // 飞线
      coordinates: curveData // 坐标系
    }
  })
  
  return data
}

// 绘制数据源
function setData(map, data) {
  // 1. 初始化图层
  const view = new mapvgl.View({ map })

  // 2. 初始化飞线对象
  const flyLine = new mapvgl.FlyLineLayer({
    style: 'chaos', // 样式，chaos是随机移动的意思
    color: 'rgba(33, 242, 214, 0.3)', // 底色
    step: 0.3, // 步长，也就是动画速度，值越大越快，默认0.1
    textureColor: 'blue', // 线的颜色（运动的线）
    textureWidth: 20, // 飞线的宽度
    textureLength: 10, // 飞线的长度
  })

  // 3. 将飞线对象添加到图层中
  view.addLayer(flyLine)

  // 4. 将飞线对象与数据源进行绑定
  flyLine.setData(data)
}

onMounted(() => {
  const map = initBMap()
  const data = initData()
  setData(map, data)
  store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/FlyLine/FlyLine.vue')
})
</script>

<style lang="scss" scoped>
// 必须手动为地图容器设置宽高
#map_container {
  width: 800px;
  height: 800px;
}

// 隐藏右下角“百度地图”logo
:deep(.anchorBL) {
  display: none;
}
</style>