<template>
  <div class="box">
    <div class="frosted__glass">毛玻璃</div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/FrostedGlass/FrostedGlass.vue')
</script>

<style lang="scss" scoped>
.box {
  width: 700px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../../../../assets/images/bg01.jpg');
  background-size: 100%;
  background-position: center;
}

.frosted__glass {
  width: 80%;
  height: 40%;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  letter-spacing: 0.5em;
  backdrop-filter: blur(20px);
  color: #fff;
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, .3);
}
</style>