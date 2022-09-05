<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L102.vue</h4>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  width: 4.8px;
  height: 4.8px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  color: #ddd;
  background: currentColor;
  animation: loading-animation 0.3s 0.3s linear infinite alternate;
}

.loading::after,
.loading::before {
  content: "";
  width: 4.8px;
  height: 4.8px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  left: 0;
  top: 15px;
  animation: loading-animation 0.3s 0.45s linear infinite alternate;
}

.loading::after {
  top: -15px;
  animation-delay: 0s;
}

@keyframes loading-animation {
  0% {
    width: 4.8px;
  }

  100% {
    width: 48px;
  }
}
</style>
