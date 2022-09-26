<template>
  <div>
    <div class="gradient__text-vertical">垂直渐变文字</div>
    <div class="gradient__text-horizontal">水平渐变文字</div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/GradientText/GradientText.vue')
</script>

<style lang="scss" scoped>
.gradient__text-vertical {
  font-size: 30px;
  font-weight: 600;
  background-image: linear-gradient(180deg, #3ff9ff 0%, #409eff 72%, #78BEFF 100%);
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -o-background-clip: test;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient__text-horizontal {
  display: inline-block;
  font-size: 30px;
  font-weight: 600;
  background-image: linear-gradient(90deg, #3ff9ff 0%, #409eff 100%);
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -o-background-clip: test;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>