<template>
  <div class="filleted__corner"></div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/FilletedCorner/FilletedCorner.vue')
</script>

<style lang="scss" scoped>
// 需求
// 只使用一个元素实现，只在内侧有圆角，而边框或描边的四个角在外部仍然保持直角的状态。

.filleted__corner {
  width: 300px;
  height: 200px;
  background: #f5564e;
  border-radius: 20px;
  box-shadow: 0 0 0 10px #1a3263;
  outline: 14.142135px solid #1a3263;
}
</style>