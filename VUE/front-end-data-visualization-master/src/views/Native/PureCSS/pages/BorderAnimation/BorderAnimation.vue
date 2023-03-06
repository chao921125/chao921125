<template>
  <div>
    <div class="box" id="box"></div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/BorderAnimation/BorderAnimation.vue')
</script>

<style lang="scss" scoped>
.box {
  width: 600px;
  height: 600px;
  background: #5753C9;
  background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);
  transition: border-radius 3s linear;
  border-radius: 60% 40% 59% 41% / 55% 36% 64% 45%;
  animation: borderAnimation 50s infinite;
}

@keyframes borderAnimation
{
  0%   {border-radius: 60% 40% 59% 41% / 55% 36% 64% 45%;}
  25%  {border-radius: 40% 60% 37% 63% / 42% 56% 44% 58%;}
  50%  {border-radius: 50% 50% 39% 61% / 61% 69% 31% 39%;}
  75% {border-radius: 59% 41% 68% 32% / 48% 52% 48% 62%;}
}
</style>