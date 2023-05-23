<template>
  <form action="/User/Login" method="POST">
    <div class="loginkuang">
      <div class="logininskuang">
        <h1>{{ message }}</h1>

        <p><span class="loginred">*</span>邮箱：</p>

        <el-input
          type="text"
          v-model="userlogin.emailcode"
          placeholder="请输入邮箱"
          name="email"
          id="loginuser"
          ref="InputUserRef"
        ></el-input>
        <br />
        <div id="warn">
          <p for="user" v-if="userlogin.emailcode"></p>
          <p for="user" class="loginred" v-else>请输入邮箱</p>
        </div>

        <p><span class="loginred">*</span>密码：</p>

        <el-input
          type="password"
          v-model="userlogin.passwordstring"
          placeholder="请输入密码"
          name="password"
          id="loginpassword"
        ></el-input>
        <div id="warn">
          <p for="password" v-if="userlogin.passwordstring"></p>
          <p for="password" class="loginred" v-else>请输入密码</p>
        </div>
        <br />
        <br />
        <div class="buttonlogin">
          <el-button type="primary" @click="login()">登陆</el-button>
          <el-button type="text" @click="register()">注册</el-button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import event from "../../static/config/event.js";
export default {
  data() {
    return {
      message: "请您登陆",
      userlogin: {
        emailcode: "",
        passwordstring: "",
      },
    };
  },
  methods: {
    register() {
      this.$router.push({
        path: "./register",
      });
      //console.warn('打印在控制台警告')
      //console.error('打印在控制台报错')
    },
    /* rigister(){
        axios.get('/User/Rigister').then(res =>{
          console.log(res)
        })
      }, */

    async login() {
      //判断是否输入字符 前端响应
      if (this.userlogin.emailcode === "")
        return this.$message.error({
          message: "请输入邮箱",
          showClose: true,
        });
      else if (this.userlogin.passwordstring === "")
        return this.$message.error({
          message: "请输入密码",
          showClose: true,
        });
      else if (this.userlogin.passwordstring.length < 6)
        return this.$message.error({
          message: "请输入密码或密码长度大于等于6",
          showClose: true,
        });
      else if (
        this.userlogin.emailcode.length < 6 ||
        this.userlogin.emailcode === ""
      )
        return this.$message.error({
          message: "邮箱输入至少6位",
          showClose: true,
        });
        // await this.$axios({
      //   method: "post",
      //   url: "/api/User/Login",
      //   /* params :{
      //             email:this.userlogin.emailcode,
      //             password:this.userlogin.passwordstring,
      //           }, 传送参数 */
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   data: {
      //     email: this.userlogin.emailcode,
      //     password: this.userlogin.passwordstring,
      //   }, //传送json格式data数据
      // })
        var loginFormData = new FormData()
          loginFormData.append('email',  this.userlogin.emailcode)
          loginFormData.append('password', this.userlogin.passwordstring)
      await this.$axios.post('/api/User/Login', loginFormData).then((res) => {
          if (res.data.code == 200) {
            event.$emit("my-Fun", res.data.user),
            // 设置会话存储，防止刷新后无状态
            sessionStorage.setItem("email", JSON.stringify(res.data.user)),
            sessionStorage.setItem("code", JSON.stringify(res.data.code)),
            sessionStorage.setItem("token",JSON.stringify(res.data.token)),
            // 设置本地存储，防止刷新后无状态
            // localStorage.setItem("username", JSON.stringify(res.data.user)),
            // localStorage.setItem("code", JSON.stringify(res.data.code)),
            // localStorage.setItem("token",JSON.stringify(res.data.token)),
            this.$message.success({
              message: res.data.msg,
              showClose: true,
            }),
              this.$router.push({
                path: "./Home",
              });
          }
          /* setTimeout() 是设定一个指定等候时间 (单位是千分之一秒, millisecond),时间到了, 浏览器就会执行一个指定的代码, 如 setTimout(方法,4000)*/
          // console.log(res.data.user),
          //兄弟组件之间传递值，使用myFun方法 ，$emit抛出，传回res.data.user的值
          //登陆成功跳转主页

          else if (res.data.code == 500) {
            this.$message.error({
              message: res.data.msg,
              showClose: true,
            });
          } else if (res.data.code == 400) {
            this.$message.error({
              message: res.data.msg,
              showClose: true,
            });
          } else if (res.data.code == 201) {
            this.$message.success({
              message: res.data.msg,
              showClose: true,
            }),
              event.$emit("my-Fun", res.data.user),
              sessionStorage.setItem("username", JSON.stringify(res.data.user)),
              sessionStorage.setItem("code", JSON.stringify(res.data.code)),
              sessionStorage.setItem("token",JSON.stringify(res.data.token)),
            // localStorage.setItem("username", JSON.stringify(res.data.user)),
            // localStorage.setItem("code", JSON.stringify(res.data.code)),
            // localStorage.setItem("token",JSON.stringify(res.data.token)),
            this.$router.push({
              path: "./admin",
            });
          } else if (res.data.code == 401) {
            this.$message.error({
              message: res.data.msg,
              showClose: true,
            });
          } else
            this.$message.error({
              message: res.data.msg,
              showClose: true,
            });
        })
        .catch((error) => alert("登录异常")); //捕获异常
    },
  },
  mounted() {
    //利用JS源码dom方法
    // document.getElementById('loginuser').focus()
    //利用refs去调用
    this.$refs.InputUserRef.focus();
  },
};
</script>

<style scoped>
#warn {
  font-size: 11px;
  position: absolute;
  width: 300px;
  height: 18px;
  text-align: right;
}

.loginred {
  color: red;
}

.loginkuang {
  height: 400px;
  width: 400px;
  margin: auto;
  margin-top: 80px;
  padding: 20px;
}

.logininskuang {
  position: relative;
  height: 300px;
  width: 300px;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
}

.buttonlogin {
  text-align: center;
  float: left;
}
</style>
