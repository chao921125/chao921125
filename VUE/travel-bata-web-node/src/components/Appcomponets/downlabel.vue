<template>
  <!-- 下拉菜单链接模块-->
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      更多连接<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="a">携程网旅行</el-dropdown-item>
      <el-dropdown-item command="b">boss直聘</el-dropdown-item>
      <el-dropdown-item command="c">智联招聘</el-dropdown-item>
      <el-dropdown-item command="d">猎聘</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
  a{
    text-decoration:none;
    cursor: pointer;
    color: #409EFF;
  }

</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        if (command == 'a')
          // this.$message('您已选择 ' + command+ '，正在跳转请勿关闭');
          this.$message('您已选择 ' + '携程网'+ '，正在跳转请勿关闭'),
          setTimeout("window.open('https://hotels.ctrip.com', '_blank')",1000)

        else if (command == 'b')
          // this.$message('您已选择 ' + command+ '，正在跳转请勿关闭');
          this.$message('您已选择 ' + 'boss直聘'+ '，正在跳转请勿关闭'),
          setTimeout("window.open('https://www.zhipin.com', '_blank')",1000)

        else if (command == 'c')
          // this.$message('您已选择 ' + command+ '，正在跳转请勿关闭');
          this.$message('您已选择 ' + '智联招聘'+ '，正在跳转请勿关闭'),
          setTimeout("window.open('https://landing.zhaopin.com', '_blank')",1000)

        else
            // this.$message('您已选择 ' + command+ '，正在跳转请勿关闭');
            this.$message('您已选择 ' + '猎聘'+ '，正在跳转请勿关闭'),
            setTimeout("window.open('https://wow.liepin.com', '_blank')",1000)

      }
    }
  }
</script>
