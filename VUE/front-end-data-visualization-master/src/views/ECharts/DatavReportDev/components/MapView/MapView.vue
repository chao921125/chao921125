<template>
  <div class="map__view">
    <el-card class="left__x" shadow="hover" :body-style="{width: '100%', height: '100%', boxSizing: 'border-box', padding: '0' }">
      <BMapScatter class="BMapScatter__x" />
    </el-card>
    <div class="right__x">
      <el-card shadow="hover" :body-style="{width: '100%', height: '230px', padding: '0'}">
        <template #header>
          <div class="title">用户月同比增长</div>
        </template>
        <template #default>
          <LiquidFill />
        </template>
      </el-card>
      <el-card shadow="hover" :body-style="{width: '100%', height: '230px', padding: '0'}">
        <template #header>
          <div class="title">热门搜索</div>
        </template>
        <template #default>
          <WordCloud />
        </template>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import BMapScatter from './BMapScatter.vue'
import LiquidFill from './LiquidFill.vue'
import WordCloud from './WordCloud.vue'

</script>

<style lang="scss" scoped>
.map__view {
  display: flex;
  margin-top: 20px;
  
  .left__x {
    flex: 0 0 80%;
    height: 600px;
    background-color: #fff;

    .BMapScatter__x {
      width: 100%;
      height: 100%;
    }
  }

  .right__x {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;

    .title {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>