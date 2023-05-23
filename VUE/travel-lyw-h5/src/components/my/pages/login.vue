<template>
  <div>
    <wd-button plain @click="alert" class="btn">点击登录</wd-button>
  </div>
</template>

<script>
export default {
  methods: {
    alert () {
      this.$messageBox.alert('抱歉!您暂无权限操作!!')
    }
  }
}
</script>

<style>
.btn{
  width: 100%;
  height: 200%;
  background: burlywood;
}
</style>