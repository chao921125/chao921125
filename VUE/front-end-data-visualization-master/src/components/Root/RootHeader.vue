<template>
  <header class="root__header">
    <i
      :class="[
        'root__header__collapseBtn',
        isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
      ]"
      @click="changeMenu"
    ></i>
    <div class="root__header__main">
      <h2 class="root__header__title" @click="toHome">前端可视化</h2>
      <div class="repository__x">
        <el-tooltip
          class="repository__item"
          content="码云仓库，欢迎 Star"
          placement="bottom"
          effect="light"
        >
          <a href="https://gitee.com/k21vin/front-end-data-visualization">
            <i class="iconfont icon-gitee2"></i>
          </a>
        </el-tooltip>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'RootHeader',
}
</script>

<script setup>
import { ref, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import RootBus from "./RootBus"

const router = useRouter()
    
const isCollapse = ref(RootBus.isCollapse)
function changeMenu() {
  // console.log(bus.$emit)
  // RootBus.$emit("change-menu-isCollapse");
  RootBus.isCollapse.value = !RootBus.isCollapse.value
}

onBeforeUnmount(() => {
  // RootBus.$off("change-menu-isCollapse")
})

function toHome() {
  router.push('/')
}

</script>

<style lang="scss" scoped>
.root__header {
  height: 60px;
  display: flex;
  align-items: center;

  &__collapseBtn {
    margin-right: 10px;
    margin-top: 4px;
    font-size: 26px;
    color: #409eff;
  }

  &__main {
    flex: 1;
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    cursor: pointer;
    background-image: linear-gradient(180deg, #3ff9ff 0%, #409eff 72%, #78BEFF 100%);
    -moz-background-clip: text;
    -webkit-background-clip: text;
    -o-background-clip: test;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;
    margin-right: 10px;
  }

  .repository__x {
    .repository__item {
      margin-left: 10px;
    }
    a {
      color: #999;
      text-decoration: none;
    }
  }
}
</style>