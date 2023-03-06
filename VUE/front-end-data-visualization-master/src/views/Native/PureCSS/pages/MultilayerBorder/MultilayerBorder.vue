<template>
  <div class="multilayer__border"></div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/MultilayerBorder/MultilayerBorder.vue')
</script>

<style lang="scss" scoped>
.multilayer__border {
  width: 200px;
  height: 200px;
  margin: 100px auto;
  background: #fcffc1;
  box-shadow: 0 0 0 10px #9bf4d5,
              0 0 0 20px #1dad9b,
              0 0 0 30px #346357;
}
</style>