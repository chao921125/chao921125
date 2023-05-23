<template>
  <!-- 头像一栏 -->
  <div class="left1">
    <!-- 头像 -->
    <div class="touxiang">
      <img src="../../assets/image/icon/照相机.png" alt="" />
    </div>
  </div>
  <!-- 填写信息一栏 -->
  <div class="right1">
    <!-- 填写昵称 -->
    <div class="nickName">
      <el-alert  type="info" :closable="false">
        昵称：{{state.userInfo.userNickName}}
      </el-alert>
    </div>
    <!-- 选择性别 -->
    <div class="sex">
        <el-radio v-model="radio1" label="1" size="large">男</el-radio>
        <el-radio v-model="radio1" label="2" size="large">女</el-radio>
    </div>
    <!-- 填写真实姓名 -->
    <div class="realName">
      <el-alert  type="info" :closable="false">
        用户名：{{state.userInfo.userId}}
      </el-alert>
    </div>
    <!-- 联系电话 -->
    <div class="tel">
      <el-alert  type="info" :closable="false">
        联系电话：{{state.userInfo.userPhone}}
      </el-alert>
    </div>
    <!-- 个人简介 -->
    <div class="jianjie">
      <el-alert  type="warning" :closable="false">
        个人简介：无
      </el-alert>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "user-info",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const radio1 = ref('1')

    const state = reactive({
      userId: "",
      userInfo:[]
    });

    onMounted(() => {
      state.userId = route.query.userId;
      console.log(state.userId);
        axios.post('/user/showUserInfo',{
          userId:state.userId
        }).then((res)=>{
          state.userInfo=res.data.data[0]
          console.log(state.userInfo)
        })        

    });

    return {
      state,
      radio1
    };
  },
};
</script>

<style>
/* 头像一栏 */
.left1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding-top: 20px;
  /* background-color: pink; */
}

/* 填写信息一栏 */
.right1 {
  flex: 2;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
  /* background-color: orange; */
}

/* 头像 */
.left1 .touxiang {
  margin-bottom: 10px;
  width: 45%;
  height: 18%;
  /* background-color: skyblue; */
  border-radius: 50%;
  text-align: center;
  border: 1px solid #191f1a;
  transition: all;
}

.left1 .touxiang img {
  width: 100px;
  transform: scale(0.9) translateY(5px);
}

/* 填写昵称 */
.right1 .nickName {
  /* flex: 1; */
  width: 90%;
  height: 10%;
  /* background-color: pink; */
}

.el-alert {
  width: 100%;
  height: 100%;
  --el-alert-description-font-size: 17px;
}

.el-radio.el-radio--large .el-radio__label {
    font-size: 17px;
}

.el-radio.el-radio--large .el-radio__inner {
    width: 18px;
    height: 18px;
}

/* 选择性别 */
.right1 .sex {
  /* flex: 1; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 0%;
  /* background-color: pink; */
  text-align: center;
  font-size: 20px;
}

/* 填写真实姓名 */
.right1 .realName {
  /* flex: 1; */
  width: 90%;
  height: 10%;
  /* background-color: #f4f4f4; */
}


/* 联系电话 */
.right1 .tel {
  /* flex: 1; */
  width: 90%;
  height: 10%;
  /* background-color: pink; */
}


/* 个人简介 */
.right1 .jianjie {
  /* flex: 2; */
  width: 90%;
  height: 20%;
  /* background-color: pink; */
}


/* 确认修改 */
.right1 .xiugai {
  /* flex: 1; */
  width: 90%;
  height: 10%;
  /* background-color: pink; */
}

</style>