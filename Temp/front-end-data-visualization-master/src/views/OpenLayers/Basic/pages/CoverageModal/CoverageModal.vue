<!-- ol - 图层遮罩 -->
<template>
  <div id="map" class="map__x"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import 'ol/ol.css'

const store = useStore()

const map = ref(null)

function initMap () {
  let osm = new Tile({
    preload: Infinity,
    source: new OSM()
  })
  // 地图实例
  map.value = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [osm],
    view: new View({
      projection: "EPSG:4326",
      center: [114.064839, 22.548857],
      zoom: 12
    })
  })

  osm.on('postrender', event => {
    var ctx = event.context;
    ctx.save()
    var pixelRatio = event.frameState.pixelRatio;
    var size = map.value.getSize();
    // 平移
    ctx.translate(size[0] / 2 * pixelRatio, size[1] / 2 * pixelRatio);
    //缩放
    ctx.scale(3 * pixelRatio, 3 * pixelRatio);
    //平移
    ctx.translate(-75, -80);
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.clip();
    ctx.translate(75, 80);
    ctx.scale(1 / 3 / pixelRatio, 1 / 3 / pixelRatio);
    ctx.translate(-size[0] / 2 * pixelRatio, -size[1] / 2 * pixelRatio);
  })

  osm.on('rendercomplete', function(event) {
    var ctx = event.context;
      ctx.restore();
  });
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/CoverageModal/CoverageModal.vue')
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