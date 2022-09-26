<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L89.vue</h4>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  width: 48px;
  height: 48px;
  border: 3px solid #ddd;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  animation: rotation 1s linear infinite;
}

.loading:after {
  content: "";
  position: absolute;
  left: 30px;
  top: 32px;
  border: 10px solid transparent;
  border-right-color: #ddd;
  transform: rotate(-40deg);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
