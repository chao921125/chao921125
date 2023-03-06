<!-- BMap - 散点图 -->
<template>
  <div class="map__x">
    <div id="map_container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// 使用 script src="https://mapv.baidu.com/gl/examples/static/common.js"
// common.js 需要指定容器 id 为 map_container

// 使用 script src="https://mapv.baidu.com/build/mapv.js 可以通过城市名获取坐标

// 使用 script src="https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.54/dist/mapvgl.min.js" mapvgl 进行绘制

// 初始化百度地图
function initBMap() {
  const cityCenter = mapv.utilCityCenter.getCenterByCityName('上海')
  const map = initMap({
    tilt: 0, // 倾斜角，默认是60
    center: [cityCenter.lng, cityCenter.lat],
    zoom: 10,
    style: snowStyle // snowStyle 是common.js提供的
  })
  return map
}

// 准备数据源
function initData() {
  // 准备数据源
  let data = []
  let random = 700
  const cities = [ // mapv 可以通过城市名称获取坐标
    '北京', '天津', '上海', '重庆', '石家庄', '太原', '呼和浩特', '哈尔滨', '长春',
    '沈阳', '济南', '南京', '合肥', '杭州', '南昌', '福州', '郑州', '武汉', '长沙', '广州',
    '南宁', '西安', '银川', '兰州', '西宁', '乌鲁木齐', '成都', '贵阳', '昆明', '拉萨', '海口'
  ]

  while(random--) {
    const cityCenter = mapv.utilCityCenter.getCenterByCityName(cities[parseInt(Math.random() * cities.length)])
    // console.log(cityCenter)
    data.push({
      geometry: { // 点的数据
        type: 'Point',
        coordinates: [cityCenter.lng - 2 + Math.random() * 4, cityCenter.lat - 2 + Math.random() * 4]
      },
      properties: { // 模拟数据（比如销售数据）
        sales: Math.random() * 100
      }
    })
  }
  data = data.filter(_ => _.properties.sales > 90)
  return data
}

// 绘制数据源
function setData(map, data) {
  // 1. 生成 mapvgl 视图 View
  const view = new mapvgl.View({ map }) // 传入 map 对象，表示 视图 和 map 对象有一个映射关联

  // 2. 初始化 Intensity 对象（表示点的大小、颜色等属性）
  const intensity = new mapvgl.Intensity({
    min: 0,
    max: 100,
    mixSize: 5,
    maxSize: 30,
    gradient: { // 会根据设定的值自动配置渐变阶段
      0: 'rgba(25, 66, 102, 0.8)',
      0.3: 'rgba(145, 102, 192, 0.8)',
      0.7: 'rgba(210, 131, 137, 0.8)',
      1: 'rgba(248, 177, 149, 0.8)'
    }
  })

  // 3. 初始化 mapgvl 的 PointLayer 对象
  const pointLayer = new mapvgl.PointLayer({ // 图层(点图层)
    size: function(data) {
      // console.log(data)
      return intensity.getSize(data.properties.sales)
    },
    color: function(data) {
      // console.log(data)
      return intensity.getColor(data.properties.sales)
    }
  })

  // 4. 将 Point 对象加入 View 中
  view.addLayer(pointLayer)

  // 5. 将 data 与 Point 进行绑定
  pointLayer.setData(data)
}

onMounted(() => {
  const map = initBMap()
  const data = initData()
  setData(map, data)
  store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/ScatterDiagram/ScatterDiagram.vue')
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