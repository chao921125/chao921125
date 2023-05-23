<template>
  <!-- 搜索栏 -->
  <div class="search-bg">
    <div class="search">
      <el-select v-model="value" class="m-2" size="large">
        <el-option
          v-for="item in state2.options"
          :key="item.cityId"
          :label="item.cityName"
          :value="item.cityName"
          @click="selectCity(item)"
        >
        </el-option>
      </el-select>
      <div class="find">
        <div class="glass"></div>
        <input type="text" placeholder="输入景点名搜索景点" ref="spotName" />
        <button class="found">
          <el-button class="index-found" type="primary" @click="searchSpot"
            >搜索</el-button
          >
        </button>
        <button class="login1">
          <el-button @click="toLogin" class="index-login">{{
            state1.mes1
          }}</el-button>
        </button>
      </div>
    </div>
  </div>

  <el-dialog v-model="dialog" title="查询结果" width="30%">
    <div class="picker2 red">查询无此景点！</div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialog = false">确认</el-button>
      </span>
    </template>
  </el-dialog>

  <!-- 轮播图 -->
  <div class="move">
    <el-carousel indicator-position="outside">
      <el-carousel-item class="carousel">
        <img src="../assets/image/index_1.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/image/index_2.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/image/index_3.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/image/index_4.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/image/index_5.jpg" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <!-- center部分 -->
  <div class="center">
    <!-- 热门城市 -->
    <div class="popular">
      <div class="title">
        <h2>热门城市</h2>
        <h2>Popular City</h2>
      </div>
      <!-- 图片加地名（汉语+拼音） -->
      <div class="destinations">
        <ul>
          <li v-for="(item, i) in state2.hotCity">
            <a>
              <router-link
                :to="{
                  path: '/citySpot',
                  query: { userId: state1.userId, cityId: item.cityId },
                }"
              >
                <img :src="item.cityImage" />
                <h2 class="Chinese">{{ item.cityName }}</h2>
              </router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 同城热门景点 -->
    <div class="city">
      <div class="title">
        <h2>同城热门景点</h2>
        <h2>City Attractions</h2>
      </div>
      <!-- 图片加描述 -->
      <div class="attractions">
        <ul>
          <li v-for="(item, i) in state2.hotCitySpot">
            <a>
              <router-link
                :to="{
                  path: '/cityInfo',
                  query: { userId: state1.userId, spotId: item.spotId },
                }"
              >
                <div class="box">
                  <img :src="item.spotImage" alt="" />
                </div>
                <h3 style="margin-top: 15px; font-size: 20px">{{ item.spotName }}</h3>
              </router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 热门路线 -->
    <div class="city">
      <div class="title">
        <h2>热门路线</h2>
        <h2>Hot List</h2>
      </div>
      <!-- 图片加描述 -->
      <div class="attractions">
        <ul>
          <li>
            <a>
              <router-link
                :to="{
                  path: '/cityInfo',
                  query: { userId: state1.userId, spotId: 304 },
                }"
              >
                <div class="box">
                  <img src="/path/1wh.jpg" alt="" />
                </div>
                <h3 style="margin-top: 12px;">武汉三日游</h3>
              </router-link>
            </a>
          </li>

          <li>
            <a>
              <router-link
                :to="{
                  path: '/cityInfo',
                  query: { userId: state1.userId, spotId: 305 },
                }"
              >
                <div class="box">
                  <img src="/path/2dl.jpg" alt="" />
                </div>
                <h3 style="margin-top: 12px;">三日行遍大理</h3>
              </router-link>
            </a>
          </li>

          <li>
            <a>
              <router-link
                :to="{
                  path: '/cityInfo',
                  query: { userId: state1.userId, spotId: 306 },
                }"
              >
                <div class="box">
                  <img src="/path/3sh.jpg" alt="" />
                </div>
                <h3 style="margin-top: 12px;">五一游历苏杭</h3>
              </router-link>
            </a>
          </li>

          <li>
            <a>
              <router-link
                :to="{
                  path: '/cityInfo',
                  query: { userId: state1.userId, spotId: 307 },
                }"
              >
                <div class="box">
                  <img src="/path/4cd.jpg" alt="" />
                </div>
                <h3 style="margin-top: 12px;">都江堰-青城山一日游</h3>
              </router-link>
            </a>
          </li>
          
        </ul>
      </div>
    </div>
    
  </div>

  <!-- foot部分，网页最底部 -->
  <div class="foot"></div>
</template>

<script>
import { reactive, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "index-main",
  setup(props, { emit }) {
    const router = useRouter();
    const route = useRoute();
    const value = ref("");
    const spotName = ref(null);
    const dialog = ref(false)

    const state1 = reactive({
      userId: "",
      cityId: "",
      mes1: "登录/注册",
    });

    //钩子函数
    onMounted(() => {
      state1.userId = route.query.userId;
      state1.cityId = route.query.cityId;
      //城市下拉框的数据默认为武汉
      if (!state1.cityId) {
        state1.cityId = 1;
      }

      //修改城市下拉框的显示城市
      if (state1.cityId) {
        axios
          .post("/city/getCityName2", {
            cityId: state1.cityId,
          })
          .then((res) => {
            value.value = res.data.cityName;
          });
        //子组件向父组件传值
        emit("setInfo", {
          userId: state1.userId,
          cityId: state1.cityId,
        });
      }

      //获取用户昵称
      if (state1.userId) {
        axios
          .post("/user/getName", {
            userId: state1.userId,
          })
          .then((res) => {
            state1.mes1 = res.data.userNickName;
          });
      }

      //获取城市的数据
      axios.post("/city/showCity", {}).then((res) => {
        state2.options = res.data.data;
      });

      //获取热门城市数据
      axios.post("/city/showHotCity", {}).then((res) => {
        state2.hotCity = res.data.data;
      });

      //获取当前选择城市的热门景点
      axios
        .post("/spot/showHotCitySpot", {
          cityId: state1.cityId,
        })
        .then((res) => {
          state2.hotCitySpot = res.data.data;
        });

      //刷新的时候让页面背景颜色变为白色
      document
        .getElementsByClassName("main")[0]
        .setAttribute("style", "background:#fff");
    });

    //跳转登陆界面
    const toLogin = () => {
      router.push({ path: "/login" });
    };

    //城市等列表数据
    const state2 = reactive({
      options: [],
      hotCity: [],
      hotCitySpot: [],
    });

    //城市下拉框选择城市之后的操作
    const selectCity = (e) => {
      state1.cityId = e.cityId;
      //子组件向父组件传值
      emit("setInfo", {
        userId: state1.userId,
        cityId: state1.cityId,
      });
      //获取当前选择城市的热门景点
      axios
        .post("/spot/showHotCitySpot", {
          cityId: state1.cityId,
        })
        .then((res) => {
          state2.hotCitySpot = res.data.data;
        });
    };

    //搜索指定景点名
    const searchSpot = () => {
      console.log(spotName.value.value);
      axios
        .post("/spot/searchSpot", {
          spotName: spotName.value.value,
        })
        .then((res) => {
          if (res.data.message) {
            router.push({
              path: "/cityInfo",
              query: { userId: state1.userId, spotId: res.data.spotId },
            });
          } else {
            dialog.value=true
          }
        });
    };

    return {
      state1,
      toLogin,
      state2,
      selectCity,
      value,
      spotName,
      searchSpot,
      dialog
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.picker2{
  font-size: 18px;
}
.red{
  color: rgb(228, 124, 124) !important;;
}
/* 搜索布局 */
.search-bg {
  background-color: #f4f4f4;
  width: 100%;
  height: 88px;
}
.search {
  width: 1314px;
  height: 88px;
  margin: 0 auto;
  position: relative;
}

.m-2 {
  position: absolute;
  top: 22px;
  left: 0px;
  width: 150px;
  font-size: 20px;
  margin-top: 5px;
}

.search .find {
  position: absolute;
  left: 350px;
  top: 22px;
  width: 573px;
  height: 50px;
  background-color: #f4f4f4;
}

.search .find .glass {
  width: 48px;
  height: 50px;
  /* background-color: green; */
  background-image: url(../assets/image/icon/glass.png);
}

.search .find input {
  position: absolute;
  left: 48px;
  top: 0;
  width: 425px;
  height: 50px;
  border: #f4f4f4;
  margin-left: 15px;
  font-size: 16px;
}

.search .find .found {
  position: absolute;
  left: 487px;
  top: 0;
  border: #f4f4f4;
  /* font-size: 25px; */
  margin-left: 20px;
}
.index-found {
  font-size: 130%;
  width: 100px;
  height: 50px;
}

.search .find .login1 {
  position: absolute;
  left: 755px;
  top: 0;
  border: #f4f4f4;
  font-size: 18px;
  cursor: pointer;
}

.index-login {
  font-size: 95%;
  width: 150px;
  height: 50px;
}

/* 轮播图 */
.move {
  overflow: hidden;
  width: 100%;
  height: 607px;
  /* background-color: orange; */
}
.el-carousel__container {
  width: 100%;
  height: 550px !important;
}
.el-carousel__container img {
  width: 100%;
  height: 100%;
}

@keyframes run {
  to {
    transform: translateX(-6570px);
  }
}

/* center布局 */
.center {
  width: 100%;
  /* background-color: green; */
}

/* 热门景点布局 */
.center .popular {
  margin: 0 auto;
  width: 1314px;
  height: 634px;
  /* background-color: skyblue; */
}

.center .popular .title {
  overflow: hidden;
  width: 1314px;
  height: 158px;
  /* background-color: pink; */
  text-align: center;
}

.center .popular .title h2:nth-child(1) {
  margin-top: 56px;
}

/* 景点描述 */
.center .popular .destinations {
  width: 1314px;
  height: 476px;
}

.center .popular .destinations ul {
  margin: 0 auto;
  width: 1042px;
  height: 476px;
  /* background-color: orange; */
  list-style: none;
  cursor: pointer;
}

.center .popular .destinations ul li {
  float: left;
  width: 268px;
  height: 413px;
  /* background-color: purple; */
}

.center .popular .destinations ul li:nth-child(4) {
  width: 236px;
}

.center .popular .destinations ul li a {
  position: relative;
  display: inline-block;
  width: 236px;
  height: 413px;
  text-decoration: none;
  color: #191f1a;
}

.center .popular .destinations ul li a img {
  transition: all 0.5s;
}

.center .popular .destinations ul li a:hover img {
  transform: scale(1.2);
}

.center .popular .destinations ul li {
  background-color: #f4f4f4;
}

.center .popular .destinations ul li a .Chinese {
  position: absolute;
  bottom: 20px;
  left: 86px;
}

/* 同城景点 */
.center .city {
  margin: 0 auto;
  width: 1314px;
  height: 655px;
  /* background-color: pink; */
}

/* 标题 */
.center .city .title {
  overflow: hidden;
  text-align: center;
  width: 1314px;
  height: 167px;
  /* background-color: green; */
}

.center .city .title h2:nth-child(1) {
  margin-top: 57px;
}

/* 景点描述 */
.center .city .attractions {
  margin: 0 auto;
  width: 1042px;
  height: 488px;
  /* background-color: skyblue; */
}

.center .city .attractions ul {
  width: 1042px;
  height: 488px;
  /* background-color: orange; */
  list-style: none;
}

.center .city .attractions ul li {
  float: left;
  width: 268px;
  height: 413px;
  /* background-color: purple; */
}

.center .city .attractions ul li:nth-child(4) {
  width: 236px;
}

.center .city .attractions ul li a {
  position: relative;
  display: inline-block;
  width: 236px;
  height: 413px;
  text-decoration: none;
  color: #191f1a;
}

.center .city .attractions ul li a .box {
  overflow: hidden;
  width: 236px;
  height: 343px;
}

.center .city .attractions ul li a img {
  transition: all 0.5s;
}

.center .city .attractions ul li a:hover img {
  transform: scale(1.2);
}

.center .city .attractions ul li {
  background-color: #f4f4f4;
}

.center .city .attractions ul li h2 {
  left: 50px;
  margin: 0 auto;
  transform: translateY(10px);
  position: absolute;
  bottom: 20px;
}

/* 热门景点 */
.center .hot {
  margin: 0 auto;
  width: 1314px;
  height: 1330px;
  /* background-color: skyblue; */
}

/* 标题 */
.center .hot .title {
  overflow: hidden;
  width: 1314px;
  height: 150px;
  /* background-color: green; */
  text-align: center;
}

.center .hot .title h2:nth-child(1) {
  margin-top: 42px;
}

.center .hot .list {
  margin: 0 auto;
  width: 1057px;
  height: 1061px;
  /* background-color: orange; */
}

.center .hot .list ul {
  width: 1057px;
  height: 1061px;
  list-style: none;
}

.center .hot .list ul li {
  position: relative;
  float: left;
  width: 374px;
  height: 530px;
  /* background-color: pink; */
}

.center .hot .list ul li:nth-child(3n) {
  width: 308px;
}

.center .hot .list ul li div {
  width: 315px;
  height: 493px;
}

/* 描述+价格 */
.center .hot .list ul li .description {
  transform: translateY(0px);
  text-align: center;
}

.center .hot .list ul li .price {
  transform: translate(250px, -465px);
  color: #2397e9;
  margin-left: -130px;
}

.center .hot .list ul li .detail {
  position: absolute;
  left: 0;
  bottom: 50px;
  width: 315px;
  height: 59px;
  /* background-color: yellow; */
  background-color: #f4f4f4;
}

.center .hot .list ul li .detail .jiudian {
  position: absolute;
  left: 0;
  top: 0;
  width: 54px;
  height: 59px;
  /* background-color: skyblue; */
}

/* 查看详情 */
.center .hot .list ul li .detail button {
  transform: translateX(199px);
  width: 116px;
  height: 59px;
  font-size: 20px;
  background-color: skyblue;
  border: #2397e9;
  color: white;
  margin-left: -189px;
}

.center .hot .list ul li .detail button a {
  display: inline-block;
  width: 116px;
  height: 59px;
  text-decoration: none;
  color: white;
  line-height: 59px;
}

/* 查看更多 */
.center .hot .more {
  width: 180px;
  height: 60px;
  transform: translate(567px);
}

.center .hot .more button {
  width: 180px;
  height: 60px;
  background-color: skyblue;
  color: white;
  font-size: 20px;
  border: #2397e9;
  border-radius: 20px;
}

.center .hot .more button a {
  display: inline-block;
  width: 180px;
  height: 60px;
  text-decoration: none;
  color: white;
  line-height: 60px;
}

/* foot布局 */
.foot {
  width: 100%;
  height: 200px;
  background-color: #595959;
  margin-top: 100px;
}
</style>