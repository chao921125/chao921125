<template>
  <div class="top__view">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="top__view__item">
        <el-card shadow="hover">
          <TotalSalse />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="top__view__item">
        <el-card shadow="hover">
          <TotalOrders />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="top__view__item">
        <el-card shadow="hover">
          <TodayUsers />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="top__view__item">
        <el-card shadow="hover">
          <TotalUsers />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import TotalSalse from './TotalSalse.vue'
import TotalOrders from './TotalOrders.vue'
import TodayUsers from './TodayUsers.vue'
import TotalUsers from './TotalUsers.vue'
</script>

<style lang="scss" scoped>
.top__view__item {
  margin-bottom: 20px;
}
</style>