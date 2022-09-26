<template>
  <div class="parallelogram">一个元素实现，背景倾斜，文字不倾斜</div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/Parallelogram/Parallelogram.vue')
</script>

<style lang="scss" scoped>
.parallelogram {
  margin: 0 30px;
  display: inline-block;
  padding: 10px 30px;
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
}

.parallelogram::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #58a;
  transform: skew(135deg);
}
</style>