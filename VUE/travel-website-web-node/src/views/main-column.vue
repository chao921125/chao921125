<template>
  <div class="main">
    <!-- 导航栏（顶部） -->
    <div class="nav-bar-bg">
      <div class="nav-bar">
        <ul>
          <li>
            <a><router-link :to="{path:'/', query:{userId:state1.userId,cityId:state1.cityId}}">首页</router-link></a>
          </li>
          <li>
            <a><router-link :to="{path:'/citySpot', query:{userId:state1.userId,cityId:state1.cityId}}">
            同城景点
            </router-link></a>
          </li>
          <li>
            <a><router-link :to="{path:'/purchase', query:{userId:state1.userId,cityId:state1.cityId}}">订单</router-link></a>
          </li>
          <li>
            <a><router-link :to="{path:'/user-main/user-info', query:{userId:state1.userId,cityId:state1.cityId}}">个人主页</router-link></a>
          </li>
        </ul>
      </div>
    </div>

    <router-view @setInfo="getInfo"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { reactive, onMounted } from "vue";
export default {
  name: "main_column",
  components: {
    // HelloWorld
  },
  setup() {
    const state1 = reactive({
      userId: '',
      cityId: '',
    });

    onMounted(() => {
        document.getElementsByClassName('main')[0].setAttribute('style', 'background:#fff');
    })

    //父组件接收用户id和城市id
    const getInfo = (e) =>{
      state1.userId=e.userId
      state1.cityId=e.cityId
      console.log(state1.userId)
      console.log(state1.cityId)
    }

    return {
      state1,
      getInfo
    }
  },
};
</script>

<style scoped>

::-webkit-scrollbar {
    display: none;
}
/* 清除默认样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
}
.nav-bar-bg {
  width: 100%;
  height: 78px;
  background-color: #fff;
}
.nav-bar {
  width: 664px;
  height: 78px;
  margin: 0 auto;
}
.nav-bar ul {
  height: 78px;
}
.nav-bar ul li {
  width: 166px;
  float: left;
  height: 78px;
  background-color: #fff;
  list-style: none;
  cursor: pointer;
}
.nav-bar ul li a {
  display: inline-block;
  width: 166px;
  height: 78px;
  line-height: 78px;
  text-align: center;
  text-decoration: none;
  color: #191f1a;
  font-size: 25px;
}
.nav-bar ul li a:hover {
  background-color: #f4f4f4;
}
</style>
