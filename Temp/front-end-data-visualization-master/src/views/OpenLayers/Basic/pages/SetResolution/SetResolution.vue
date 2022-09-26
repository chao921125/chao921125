<!-- ol - 不同分辨率显示不同图层 -->
<template>
  <div id="map" class="map__x"></div>
  <div class="explain">
    <p>在限制的范围之内时显示图层，在限制的范围之外时不显示图层</p>
    <p>只有当指定图层在 minResolution 和 maxResolution 范围内，才显示。</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import { OSM, TileJSON } from 'ol/source'
import 'ol/ol.css'

const store = useStore()

const map = ref(null)

function initMap() {
  map.value = new Map({
    target: 'map',
    layers: [
      new Tile({
        source: new OSM()
      }),
      new Tile({
        source: new TileJSON({
          url: 'https://api.tiles.mapbox.com/v4/mapbox.natural-earth-hypso-bathy.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q',
          crossOrigin: 'anonymous'
        }),

        // 当图层在 2000 至 20000 时显示
        minResolution: 2000,
        maxResolution: 20000
      })
    ],
    view: new View({
      center: [653600, 5723680],
      zoom: 5
    })
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/SetResolution/SetResolution.vue')
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