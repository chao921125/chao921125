<template>
      <div class="register-box">
        <h2>注册</h2>
        <div class="input-box">
            <input type="text" placeholder="用户名/账号" ref="userId">
        </div>
        <div class="input-box">
            <input type="text" placeholder="电话" ref="phone">
        </div>
        <div class="input-box">
            <input type="text" placeholder="用户昵称" ref="userNickName">
        </div>
        <div class="input-box">
            <input type="password" placeholder="密码" ref="password">
        </div>
        <button class="sign-in" @click="register">注 册</button>
        <a class="login" @click="toLogin">去登录</a>
        <div class="alert">{{ state.mes }}</div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import axios from "axios";
export default {
  name:'user-register',
  setup(){
    const userId = ref(null)
    const phone = ref(null)
    const userNickName = ref(null)
    const password = ref(null)
    const router = useRouter()

    //注册
    const state = reactive({
      password: '',
      userId: '',
      phone: '',
      userNickName: '',
      mes: ''
    })
    const register = () => {
      state.userId = userId.value.value
      state.userNickName = userNickName.value.value
      state.password = password.value.value
      state.phone = phone.value.value
      console.log(state.password)
      console.log(state.phone)
      if(state.password&&state.userId&&state.phone&&state.userNickName){
        axios.post('/user/checkRegister',{
          userId: state.userId
        }).then((res)=>{
          if(res.data.message===true){
            axios.post('/user/register',{
              userId: state.userId,
              userNickName: state.userNickName,              
              userPassword: state.password,
              userPhone: state.phone
            }).then((res)=>{
              state.mes=res.data.message
            })
          }else if(res.data.message===false){
            state.mes="此账号已注册"
          }
        })
      }else{
        state.mes="全部信息必须输入完整！"
      }
    }
    
    //跳转到登录界面
    const toLogin = () => {
      router.push({path:'/login'})
    }

    return{
      state,
      toLogin,
      register,
      userId,
      phone,
      userNickName,
      password
    }
  }
}
</script>

<style>
/*1.设置背景图片*/
body{
    background-image: url(../../assets/image/1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}

/*2.注册框背景颜色、大小*/
.register-box{
    background-color: #ffffff;
    text-align: center;
    margin: 0px auto;
    margin-top: 150px;
    width: 400px;
    height: 415px;
}

/*3.注册字体设置*/
.register-box h2{
    padding-top: 25px;
    padding-bottom: 10px;
    color: #333;
}

/*4.输入框属性设置*/
.input-box{
    margin-top: 10px;
}
.input-box input{
    width: 230px;
    height: 35px;
    border: none;
    background-color: rgb(208, 218, 224);
    outline: none;
    color: #333;
}

/*5.注册按钮设置*/
button:hover{
    cursor: pointer;
}
.sign-in{
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

/*6.登录页面跳转*/
.login{
    display: block;
    margin-top: 25px;
    margin-left: 250px;
    cursor: pointer;
}
a{
    color: rgb(67, 126, 214);
}

.alert{
    color: rgb(223, 94, 94);
}
</style>