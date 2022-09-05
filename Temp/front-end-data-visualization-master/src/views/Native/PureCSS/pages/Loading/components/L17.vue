<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L17.vue</h4>
  </div>
</template>

<style lang="scss" scoped>
.loading,
.loading > div {
  position: relative;
  box-sizing: border-box;
}

.loading {
  display: block;
  font-size: 0;
  color: #000;
}

.loading.la-dark {
  color: #333;
}

.loading > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.loading {
  width: 32px;
  height: 32px;
}

.loading > div {
  position: absolute;
  top: 50%;
  left: 50%;
  background: transparent;
  border-style: solid;
  border-width: 2px;
  border-radius: 100%;
  animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;
}

.loading > div:first-child {
  position: absolute;
  width: 32px;
  height: 32px;
  border-right-color: transparent;
  border-left-color: transparent;
}

.loading > div:last-child {
  width: 16px;
  height: 16px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation-duration: 0.5s;
  animation-direction: reverse;
}

@keyframes ball-clip-rotate-multiple-rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  50% {
    transform: translate(-50%, -50%) rotate(180deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
