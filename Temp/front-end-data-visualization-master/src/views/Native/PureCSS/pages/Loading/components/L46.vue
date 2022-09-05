<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L46.vue</h4>
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
  bottom: 0;
  left: 50%;
  width: 12px;
  height: 12px;
  border-radius: 0;
  border-radius: 2px;
  transform: translateY(0) translateX(-50%) rotate(45deg) scale(0);
  animation: fire-diamonds 1.5s infinite linear;
}

.loading > div:nth-child(1) {
  animation-delay: -0.85s;
}

.loading > div:nth-child(2) {
  animation-delay: -1.85s;
}

.loading > div:nth-child(3) {
  animation-delay: -2.85s;
}

.loading.la-sm {
  width: 16px;
  height: 16px;
}

.loading.la-sm > div {
  width: 6px;
  height: 6px;
}

.loading.la-2x {
  width: 64px;
  height: 64px;
}

.loading.la-2x > div {
  width: 24px;
  height: 24px;
}

.loading.la-3x {
  width: 96px;
  height: 96px;
}

.loading.la-3x > div {
  width: 36px;
  height: 36px;
}

@keyframes fire-diamonds {
  0% {
    transform: translateY(75%) translateX(-50%) rotate(45deg) scale(0);
  }

  50% {
    transform: translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);
  }

  100% {
    transform: translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);
  }
}
</style>
