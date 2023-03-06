<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L7.vue</h4>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  position: relative;
  width: 60px;
  height: 60px;
  animation: heart infinite 0.85s linear;
}

.loading:before,
.loading:after {
  position: absolute;
  top: 0;
  left: 30px;
  width: 30px;
  height: 50px;
  content: "";
  transform: rotate(-45deg);
  transform-origin: 0 100%;
  border-radius: 30px 30px 0 0;
  background: #000;
}

.loading:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}

@keyframes heart {
  0% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.8);
  }
}
</style>
