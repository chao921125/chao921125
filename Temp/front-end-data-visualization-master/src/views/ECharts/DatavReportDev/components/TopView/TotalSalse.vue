<!-- 累计销售额 -->
<template>
  <div>
    <CommonCard
      title="累计销售额"
      value="￥32,039,165"
    >
      <template #default>
        <div class="compare__wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">7.33%</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">38.79%</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      <template #footer>
        <span>昨日销售额</span>
        <span class="emphasis">￥ 30,000,000</span>
      </template>
    </CommonCard>
  </div>
</template>

<script setup>
import { CommonCard } from './commonCardMixin.js'
</script>

<style lang="scss" scoped>
.compare__wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.compare {
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 3px;
  color: #666;
}
</style>