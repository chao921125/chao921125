<template>
  <el-card :bdoy-style="{ width: '100%', height: '100%' }">
    <template #header>
      <div class="card__header">
        <div class="card__header__title">{{title}}</div>
        <div class="card__header__componentPath">组件位置：{{componentPath}}</div>
      </div>
    </template>
    <template #default>
      <router-view />
    </template>
  </el-card>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const title = computed(() => route.meta.navName)

const componentPath = computed( () => store.getters.getComponentPath )
</script>

<style lang="scss" scoped>
.card__header {
  display: flex;
  justify-content: space-between;

  &__componentPath {
    box-sizing: border-box;
    height: 26px;
    padding: 0px 8px;
    border-radius: 4px;
    line-height: 26px;
    color: #fff;
    background-image: linear-gradient(-225deg, #65379B 0%, #886AEA 53%, #6457C6 100%);

    &::selection {
      background: #d299c2;
    }
  }
}
</style>