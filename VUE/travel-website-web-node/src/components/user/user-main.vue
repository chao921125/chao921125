<template>
  <!-- 个人主页 -->
  <div class="personalHomepage">
    <!-- 飞机图 -->
    <img src="../../assets/image/plane.jpg" alt="" class="plane" />
    <!-- 个人信息、我的收藏、我的足迹 -->
    <div class="personalMessage">
      <div class="box"></div>
      <div class="box">
        <a @click="toUserInfo">个人信息</a>
      </div>
      <div class="box">
        <a @click="toUserCollection">我的收藏</a>
      </div>
      <div class="box">
        <a @click="toUserGo">我的足迹</a>
      </div>
    </div>
    <div class="center">
      <!-- 用户名、个人简介 -->
      <div class="left">
        <!-- 头像 -->
        <img src="../../assets/image/icon/head.png" alt="" />
        <!-- 名 -->
        <div class="name">用户名</div>
        <!-- 简介 -->
        <div class="discription">
          <el-button @click="toLogin" class="user-button">{{
            state1.mes
          }}</el-button>
        </div>
      </div>
      <!-- 个人信息 -->
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
    <!-- 底部 -->
    <div class="foot"></div>
  </div>
</template>

<script>
import { reactive, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "user-main",
  setup() {
    const router = useRouter();
    const route = useRoute();

    const state1 = reactive({
      userId: "",
      cityId: "",
      mes: "登录/注册",
    });

    onMounted(() => {
      state1.userId = route.query.userId;
      state1.cityId = route.query.cityId;
      console.log(state1.userId);

      //获取用户昵称
      if (state1.userId) {
        axios
          .post("/user/getName", {
            userId: state1.userId,
          })
          .then((res) => {
            state1.mes = res.data.userNickName;
          });
      }

      document
        .getElementsByClassName("main")[0]
        .setAttribute("style", "background:#fff");
    });

    const toUserInfo = () => {
      router.push({
        path: "/user-main/user-info",
        query: { userId: state1.userId, cityId: state1.cityId },
      });
    };

    const toUserCollection = () => {
      router.push({
        path: "/user-main/user-collection",
        query: { userId: state1.userId, cityId: state1.cityId },
      });
    };

    const toUserGo = () => {
      router.push({
        path: "/user-main/user-go",
        query: { userId: state1.userId, cityId: state1.cityId },
      });
    };

    //跳转登陆界面
    const toLogin = () => {
      router.push({ path: "/login" });
    };

    return {
      state1,
      toUserInfo,
      toUserCollection,
      toUserGo,
      toLogin
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 个人主页 */
.personalHomepage {
  width: 100%;
  /* background-color: pink; */
  height: 100%;
  position: relative;
}

/* 飞机图 */
.personalHomepage .plane {
  width: 100%;
  height: 450px;
}

/* 个人信息、我的收藏、我的足迹 */
.personalHomepage .personalMessage {
  display: flex;
  justify-content: space-around;
  padding: 0 18%;
  width: 100%;
  height: 70px;
  background-color: #fff;
}

.personalHomepage .personalMessage div {
  width: 17%;
  height: 70px;
  cursor: pointer;
  /* background-color: skyblue; */
}

.personalHomepage .personalMessage div a {
  display: inline-block;
  width: 100%;
  height: 70px;
  text-decoration: none;
  text-align: center;
  line-height: 70px;
  color: #191f1a;
  font-size: 20px;
}

.personalHomepage .personalMessage div a:hover {
  border-bottom: 2px solid skyblue;
}

.personalHomepage .center {
  display: flex;
  margin: 0 auto;
  width: 1000px;
  height: 950px;
  /* background-color: skyblue; */
}

/* 用户名、个人简介 */
.personalHomepage .center .left {
  width: 20%;
  height: 300px;
  /* background-color: green; */
  border: 2px solid #f4f4f4;
}

/* 头像 */
.personalHomepage .center .left img {
  margin-top: -50%;
  /* margin-left: 38%; */
}

/* 名 */
.personalHomepage .center .left .name {
  text-align: center;
}

/* 简介 */
.personalHomepage .center .left .discription {
  margin-top: 10px;
  margin-left: 20%;
  width: 60%;
  height: 50px;
}
.user-button {
  width: 100%;
  height: 100%;
}

/* 个人信息 */
.personalHomepage .center .right {
  display: flex;
  width: 80%;
  height: 700px;
  /* background-color: orange; */
  border: 2px solid #f4f4f4;
}

/* 底部 */
.personalHomepage .foot {
  width: 100%;
  bottom: 0px;
  margin-bottom: 0px;
  height: 200px;
  background-color: #595959;
}
</style>