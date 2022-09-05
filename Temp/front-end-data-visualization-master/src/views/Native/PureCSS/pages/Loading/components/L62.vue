<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L62.vue</h4>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  width: 45px;
  height: 45px;
  display: inline-block;
  padding: 0px;
  border-radius: 100%;
  border: 5px solid;
  border-top-color: rgba(0, 0, 0, 1);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 1);
  border-right-color: rgba(0, 0, 0, 0.1);
  animation: loading-animation 1s ease-in-out infinite;
}

@keyframes loading-animation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
