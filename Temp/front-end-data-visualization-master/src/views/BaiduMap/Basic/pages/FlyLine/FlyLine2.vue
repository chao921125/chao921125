<!-- BMap - 飞线图2 -->
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

// 使用边绑定算法

// 初始化百度地图
function initBMap() {
  const cityCenter = mapv.utilCityCenter.getCenterByCityName('佛山')
  const map = initMap({
    tilt: 0, // 倾斜角，默认是60
    center: [cityCenter.lng, cityCenter.lat],
    zoom: 5,
    style: purpleStyle // 底图皮肤。purpleStyle 是common.js提供的
  })
  return map
}

// 准备数据源
function initData() {
  // 数据源需要提供起点坐标和终点坐标
  let data = []
  let cities = ["北京","天津","上海","重庆","石家庄","太原","呼和浩特","哈尔滨","长春","沈阳","济南","南京","合肥","杭州","南昌","福州","郑州","武汉","长沙","广州","南宁","西安","银川","兰州","西宁","乌鲁木齐","成都","贵阳","昆明","拉萨","海口"];

  let targetCity = mapv.utilCityCenter.getCenterByCityName('佛山') // 目标城市

  let nodeData = [
    { x: targetCity.lng, y: targetCity.lat }
  ]

  let edgeData = [ // source: 起点, target: 目标点，数字表示 nodeData 的下标
    {source: 0, target: 0}
  ]

  let randomCount = 500

  // let curve = new mapvgl.BezierCurve() // 创建贝塞尔曲线对象

  for(let i = 0; i < randomCount; i++) {
    let startCity = mapv.utilCityCenter.getCenterByCityName(cities[parseInt(cities.length * Math.random())])
    // curve.setOptions({
    //   start: [startCity.lng - 5 + 10 * Math.random(), startCity.lat - 5 + 10 * Math.random()],
    //   end: [targetCity.lng, targetCity.lat]
    // })

    // let curveData = curve.getPoints() // 拿到要绘制曲线的集合
    // data.push({
    //   geometry: {
    //     type: 'LineString',
    //     coordinates: curveData
    //   }
    // })

    nodeData.push({
      x: startCity.lng - 5 + Math.random() * 10,
      y: startCity.lat - 5 + Math.random() * 10
    })

    edgeData.push({
      source: i + 1,
      target: 0
    })
  }

  // 使用边绑定算法
  let bundling = mapv.utilForceEdgeBundling().nodes(nodeData).edges(edgeData)
  let results = bundling()
  for (let i = 0; i < results.length; i++) {
    let line = results[i]
    let coordinates = []
    for(let j = 0; j < line.length; j++) {
      coordinates.push([line[j].x, line[j].y])
    }
    data.push({
      geometry: {
        type: 'LineString',
        coordinates
      }
    })
  }
  return data
}

// 绘制数据源
function setData(map, data) {
  // 1. 初始化图层
  const view = new mapvgl.View({ map })

  // 2. 初始化 LineLayer
  const lineLayer = new mapvgl.LineLayer({
    color: 'rgba(55, 50, 250, 0.3)',
    blend: 'lighter',
    width: 2
  })
  view.addLayer(lineLayer)
  lineLayer.setData(data)

  let linePointLayer = new mapvgl.LinePointLayer({
    size: 3, // 点的大小
    speed: 10, // 点运动的步长（速度）
    color: 'rgba(255, 255, 0, 0.6)', // 点的颜色
    animationType: mapvgl.LinePointLayer.ANIMATION_TYPE_SMOOTH, // 点的动画类型
    shapeType: mapvgl.LinePointLayer.SHAPE_TYPE_CIRCLE, // 点的形状（方形/圆形之类的）
    blend: 'lighter' // 点交汇时处理方式
  })

  view.addLayer(linePointLayer)
  linePointLayer.setData(data)
}

onMounted(() => {
  const map = initBMap()
  const data = initData()
  setData(map, data)
  store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/FlyLine/FlyLine2.vue')
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