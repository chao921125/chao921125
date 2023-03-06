<!-- 动态渐变背景 -->
<template>
	<div class="explain">
    <p>图文讲解：<a href="https://juejin.cn/post/7040376300296470535" target="_blank">《纯CSS：动态渐变背景【一分钟学会】》</a></p>
  </div>

  <div class="gradient"></div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/GradientBGAnimation/GradientBGAnimation.vue')
</script>

<style lang="scss" scoped>
.gradient {
  width: 400px;
  height: 400px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 600% 600%;
	animation: gradientBG 5s ease infinite;
}

@keyframes gradientBG {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>