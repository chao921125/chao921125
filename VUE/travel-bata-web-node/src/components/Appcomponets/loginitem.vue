<template>
  <div class="loginmodule">
    <el-menu
      v-if="status"
      class="el-menu-demo"
      mode="horizontal"
      router=""
      height="60px"
    >
      <!-- 默认路由为false 得增添再elment -->
      <el-menu-item index="/Home" @click="statusdetail()">首 页</el-menu-item>
      <el-menu-item index="/Second">历 史</el-menu-item>
      <el-menu-item index="/Three">评 论</el-menu-item>
      <el-menu-item index="/Source">资 源</el-menu-item>
    </el-menu>
    <div v-else>
      <h3>admin管理平台</h3>
    </div>
  </div>
</template>

<script>
import event from "../../../static/config/event"
export default {

    data() {
      return {
        show:false
        //双向绑定 v-model 默认选择为首页
      }
    },
    methods:{
      statusdetail(){
        
        // console.log("首页")
      },
      
    },
    props:['status'],
    create(){
      // this.statusdetail()
    }


  }
</script>

<style>
.loginmodule {
  height: 50%;
  width: 100%;
  line-height: 25px;
}
</style>
