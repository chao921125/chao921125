<template>
  <div class="login-box">
    <h2>登录</h2>
    <div class="input-box">
      <input type="text" placeholder="用户名/账号" ref="userId" />
    </div>
    <div class="input-box">
      <input type="password" placeholder="密码" ref="password" />
    </div>
    <button class="sign-in" @click="login">登 录</button>
    <a class="register" @click="toRegister">去注册</a>
    <div class="alert">{{ state.mes }}</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, ref} from "vue";
import axios from "axios";
export default {
  name: "user-login",
  setup() {
    const userId = ref(null);
    const password = ref(null);
    const router = useRouter();


    //登录
    const state = reactive({
      password: "",
      userId: "",
      mes: "",
    });
    const login = () => {
      state.userId = userId.value.value;
      state.password = password.value.value;
      axios
        .post("/user/login", {
          userId: state.userId,
          userPassword: state.password,
        })
        .then((res) => {
          state.mes = res.data.message;
          if (state.mes === "登录成功") {
            state.userId = res.data.userId;
            router.push({ path: "/", query: { userId: state.userId } });
          }
        });
    };



    //跳转到注册界面
    const toRegister = () => {
      router.push({ path: "/register" });
    };

    return {
      state,
      toRegister,
      login,
      userId,
      password
    };
  },
};
</script>

<style>
/*1.设置背景图片*/
body {
  background-image: url(../../assets/image/1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

/*2.登录框背景颜色、大小*/
.login-box {
  background-color: #ffffff;
  text-align: center;
  margin: 0px auto;
  margin-top: 150px;
  width: 400px;
  height: 320px;
}

/*3.登录字体设置*/
.login-box h2 {
  padding-top: 25px;
  padding-bottom: 10px;
  color: #333;
}

/*4.输入框属性设置*/
.input-box {
  margin-top: 10px;
}
.input-box input {
  width: 230px;
  height: 35px;
  border: none;
  background-color: rgb(208, 218, 224);
  outline: none;
  color: #333;
}

/*5.登录按钮设置*/
button:hover {
  cursor: pointer;
}
.sign-in {
  margin-top: 30px;
  width: 230px;
  height: 35px;
  font-weight: bolder;
  font-size: 15px;
  color: #ffffff;
  outline: none;
  border: none;
  background-color: rgb(67, 126, 214);
}

/*6.注册页面跳转*/
.register {
  display: block;
  margin-left: 250px;
  margin-top: 25px;
  cursor: pointer;
}
a {
  color: rgb(67, 126, 214);
}
.alert {
  color: rgb(223, 94, 94);
}
</style>