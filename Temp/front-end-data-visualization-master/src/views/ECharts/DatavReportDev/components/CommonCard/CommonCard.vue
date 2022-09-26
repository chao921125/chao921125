<template>
  <div class="common__card">
    <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  value: String
})
</script>

<style lang="scss" scoped>
.title {
  font-size: 12px;
  color: #999;
}

.value {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px;
}

.chart {
  height: 50px;
}

.line {
  margin: 10px 0;
  border-top: 1px solid #eee;
}

.total {
  font-size: 12px;
  color: #666;
}
</style>

<style lang="scss">
.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}

.increase {
  width :0;
  height: 0;
  border: {
    width: 4px;
    color: transparent transparent red transparent;
    style: solid;
  }
  margin: 0 0 4px 5px;
}

.decrease {
  width :0;
  height: 0;
  border: {
    width: 4px;
    color: green transparent transparent transparent;
    style: solid;
  }
  margin: 4px 0 0 5px;
}
</style>