<template>
  <div v-if="show">
    <router-link to="/login" name="login">
      <el-button type="primary" style="border-radius: 30px">登陆 / 注册</el-button>
    </router-link>
  </div>
  <div v-else>
    <div class="Username" ref="UsernameRef">
      
      {{getTimeState()}} 尊敬的<span class="usernameclass">{{ username }}</span>用户
    </div>
    <el-button size="medium" type="text" @click="logout()">退出登录</el-button>
  </div>
</template>

<script>
  import event from "../../../static/config/event.js";
  export default {
    data() {
      return {
        show: true,
        username: "",
        //双向绑定 v-model 默认选择为首页
      };
    },
    created: function() {
      if (this.show == true) {
        this.bbtn()
      };
    },
    methods: {
      //bbtn是一个方法，兄弟组件$emit抛出后，使用$on接收，方法对应，(数据)=>{ 数据操作动作 }
      bbtn: function() {
        let _this = this;
        event.$on("my-Fun", (message) => {
          //这里最好用箭头函数，不然this指向有问题
          _this.username = message;
          _this.show = false;
        });
      },

      // 登出
      logout() {
        this.$axios({
          url: "/api/User/Logout",
          method: "get",
        }).then((res) => {
          console.log("清除session");
          sessionStorage.clear()
          console.log("清除本地缓存");
          localStorage.clear();
          this.$router.push("/");
          this.$message.success({
            message: res.data.msg,
            showClose: true,
          });
          this.show = true;
          this.$emit("logout", this.show);
        });
      },

      // 判断时间段
      getTimeState() {
        // 获取当前时间
        let timeNow = new Date();
        // 获取当前小时
        let hours = timeNow.getHours();
        // 设置默认文字
        let state = ``;
        // 判断当前时间段
        if (hours >= 0 && hours <= 4) {
          state = `深夜凌晨、请注意休息 !`;
        } else if (hours > 4 && hours <= 10) {
          state = `早上好 !`;
        } else if (hours > 10 && hours <= 14) {
          state = `中午好 !`;
        } else if (hours > 14 && hours <= 18) {
          state = `下午好 !`;
        } else if (hours > 18 && hours <= 24) {
          state = `晚上好 !`;
        }
        return state;
      },
    },
    mounted() {
      //获取本地缓存中的自定义值[username、code]
      let user = JSON.parse(sessionStorage.getItem("username"))
      let code = JSON.parse(sessionStorage.getItem("code"))
      // var user = JSON.parse(localStorage.getItem("username"));
      // var code = JSON.parse(localStorage.getItem("code"))
      this.username = user;
      if (code == 200) {
        this.show = false
      } else if (code == 201) {
        this.show = false
      }
    },
  };
</script>

<style scoped>
  @import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");

  .usernameclass {
    font-size: 16px;
    color: palevioletred;
    font-style: initial;
    font-weight: 500;
    padding: 2px;
  }

  .Username {
    /* font-size: 14px; */
    float: left;
    padding-right: 15px;
    color: grey;
  }
</style>
