<template>
  <div>
    <el-backtop
      :target="eleSelector"
      :bottom="60"
      :visibility-height="180"
      @click="backTop"
      :right="40"
    >
      <el-tooltip
        class="item"
        effect="dark"
        content="回到顶部"
        placement="left-start"
        bi
      >
        <el-button circle="" icon="el-icon-top" round> </el-button>
      </el-tooltip>
    </el-backtop>
  </div>
</template>
<script>
export default {
  props: ["eleSelector"],
  methods: {
    backTop() {
      this.$emit("backTop");
    },
  },
};
</script>
<style scoped>
.backto-top-icon-box {
  text-align: center;
}
.backto-top-icon {
  font-size: 30px；;
}
</style>