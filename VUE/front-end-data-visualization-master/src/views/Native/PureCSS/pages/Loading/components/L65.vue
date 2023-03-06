<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L65.vue</h4>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: inline-block;
  width: 30px;
  height: 4px;
  background: #000;
  animation: loading-animation 1.5s linear infinite;
}

@keyframes loading-animation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(720deg);
  }
}
</style>
