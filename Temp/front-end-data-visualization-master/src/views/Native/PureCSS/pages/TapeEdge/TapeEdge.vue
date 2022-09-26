<template>
  <div class="tape__edge"></div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/TapeEdge/TapeEdge.vue')
</script>

<style lang="scss" scoped>
.tape__edge {
  width: 400px;
  height: 300px;
  background: #3f72af;
  border-radius: 10px;
  outline: 2px dashed #fff;
  outline-offset: -20px;
}
</style>