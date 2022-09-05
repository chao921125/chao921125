<!-- ol - 控制图层层叠关系 -->
<template>
  <div id="map" class="map__x"></div>
  <label for="idx1">
    <input type="number" v-model="squareZIndex" />
    方块所在图层的 Z-index
  </label>
  <label for="idx1">
    <input type="number" v-model="triangleZIndex" />
    三角形所在图层的 Z-index
  </label>
  <label for="idx1">
    <input type="number" v-model="starZIndex" />
    星形所在图层的 Z-index
  </label>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View, Feature } from 'ol'
import LayerVector from 'ol/layer/Vector'
import SourceVector from 'ol/source/Vector'
import Point from 'ol/geom/Point'
import { Style, RegularShape, Fill, Stroke } from 'ol/style'
import 'ol/ol.css'

const store = useStore()

const squareZIndex = ref(1)
const triangleZIndex = ref(0)
const starZIndex = ref(0)

const layer0 = ref(null)
const layer1 = ref(null)
const layer2 = ref(null)

const map = ref(null)

const styles = reactive({
  square: new Style({
    image: new RegularShape({
      fill: new Fill({ color: 'blue' }),
      stroke: new Stroke({ color: 'black', width: 1 }),
      points: 4,
      radius: 80,
      angle: Math.PI / 4
    })
  }),
  triangle: new Style({
    image: new RegularShape({
      fill: new Fill({ color: 'red' }),
      stroke: new Stroke({ color: 'black', width: 1 }),
      points: 3,
      radius: 80,
      rotation: Math.PI / 4,
      angle: 0
    })
  }),
  star: new Style({
    image: new RegularShape({
      fill: new Fill({ color: 'green' }),
      stroke: new Stroke({ color: 'black', width: 1 }),
      points: 5,
      radius: 80,
      radius2: 4,
      angle: 0
    })
  })
})

watch([starZIndex, squareZIndex, triangleZIndex], ([star, square, triangle], [prevStar, prevSquare, prevTriangle]) => {

  // // 星形所在图层的 Z-index
  layer0.value.setZIndex(parseInt(star, 10) || 0)

  // 方块所在图层的 Z-index
  layer1.value.setZIndex(parseInt(square, 10) || 0)

  // 三角形所在图层的 Z-index
  layer2.value.setZIndex(parseInt(triangle, 10) || 0)
})

function initMap () {
  layer0.value = createLayer([40, 40], styles['star'], starZIndex.value)
  layer1.value = createLayer([0, 0], styles['square'], squareZIndex.value)
  layer2.value = createLayer([0, 40], styles['triangle'], triangleZIndex.value)

  console.log(layer0.value)

  let layers = [layer1.value, layer2.value, layer0.value]

  // 地图实例
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers,
    view: new View({
      center: [0, 0],
      zoom: 18
    })
  })
}

// 绘制图形
function createLayer(coordinates, style, zIndex) {
  let feature = new Feature(new Point(coordinates))
  feature.setStyle(style)

  let source = new SourceVector({
    features: [feature]
  })

  let vectorLayer = new LayerVector({
    source: source
  })

  vectorLayer.setZIndex(zIndex)

  return vectorLayer
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/SetZIndex/SetZIndex.vue')
  initMap()
})
</script>

<style lang="scss" scoped>
.map__x {
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
}

label {
  display: block;
  margin-top: 10px;
}
</style>