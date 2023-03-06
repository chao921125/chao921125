<!-- ol - 绘制图形 -->
<template>
  <div id="map" class="map__x"></div>
  <select id="type" v-model="tool" @change="addInteraction">
    <option v-for="item in tools" :key="item.value" :value="item.value">{{item.label}}</option>
  </select>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import LayerVector from 'ol/layer/Vector'
import SourceVector from 'ol/source/Vector'
import Draw, {createRegularPolygon, createBox} from 'ol/interaction/Draw'
import Polygon from 'ol/geom/Polygon'
import 'ol/ol.css'

const store = useStore()

const tool = ref('Hexagram')
const tools = reactive([ // 工具集
  {
    value: 'Circle',
    label: '圆'
  },
  {
    value: 'Square',
    label: '方形'
  },
  {
    value: 'Rectangle',
    label: '矩形'
  },
  {
    value: 'Hexagram',
    label: '六芒星'
  },
  {
    value: 'None',
    label: '无'
  }
])

const map = ref(null)

// 底图
const raster = new Tile({
  source: new OSM()
})

const source = new SourceVector({
  wrapX: false // 禁止横向无限重复（底图渲染的时候会横向无限重复），设置了这个属性，可以让绘制的图形不跟随底图横向无限重复
})

const vector = new LayerVector({
  source: source
})

function initMap () {
  // 地图实例
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [raster, vector],
    view: new View({ // 地图视图
      projection: "EPSG:4326",
      center: [113.1206, 23.034996],
      zoom: 10
    })
  })

  addInteraction()
}

const draw = ref(null)

function addInteraction() {
  if (draw.value !== null) {
    map.value.removeInteraction(draw.value)
  }
  if (tool.value !== 'None') {
    let geometryFunction
    let type = 'Circle'
    
    if (tool.value === 'Square') {
      // 方形
      geometryFunction = createRegularPolygon(4)
    } else if (tool.value === 'Rectangle') {
      // 矩形
      geometryFunction = createBox()
    } else if (tool.value === 'Hexagram') {
      geometryFunction = function (coordinates, geometry) {
        //中心点
        var center = coordinates[0];
        //鼠标点击的另一个点
        var last = coordinates[1];
        var dx = center[0] - last[0];
        var dy = center[1] - last[1];
        //半径
        var radius = Math.sqrt(dx * dx + dy * dy);
        //旋转的角度
        var rotation = Math.atan2(dy, dx);
        //用来记录顶点坐标的数组
        var newCoordinates = [];
        //顶点个数
        var numPoints = 12;
        for (var i = 0; i < numPoints; ++i) {
          //顶点相对转过的角度
          var angle = rotation + i * 2 * Math.PI / numPoints;
          //确定凸顶点和凹顶点
          var fraction = i % 2 === 0 ? 1 : 0.58;
          //计算顶点的坐标
          var offsetX = radius * fraction * Math.cos(angle);
          var offsetY = radius * fraction * Math.sin(angle);							
          newCoordinates.push([center[0] + offsetX, center[1] + offsetY]);
        }
        newCoordinates.push(newCoordinates[0].slice());
        if (!geometry) {
          geometry = new Polygon([newCoordinates]);
        } else {
          geometry.setCoordinates([newCoordinates]);
        }
        return geometry;
      }
    }

    draw.value = new Draw({
      source: source,
      type,
      geometryFunction
    })
    map.value.addInteraction(draw.value)
  }
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/DrawGraph/DrawGraph.vue')
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