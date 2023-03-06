<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L100.vue</h4>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  width: 8px;
  height: 48px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  left: -40px;
  color: #ddd;
  animation: loading-animation 0.6s linear infinite;
}

@keyframes loading-animation {
  0% {
    box-shadow: 20px -10px, 40px 10px, 60px 0px;
  }

  25% {
    box-shadow: 20px 0px, 40px 0px, 60px 10px;
  }

  50% {
    box-shadow: 20px 10px, 40px -10px, 60px 0px;
  }

  75% {
    box-shadow: 20px 0px, 40px 0px, 60px -10px;
  }

  100% {
    box-shadow: 20px -10px, 40px 10px, 60px 0px;
  }
}
</style>
