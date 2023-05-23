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
    </div>
  </div>

  <!-- 同城景点 -->
  <div class="tongchengjingdian">
    <!-- 景点 -->
    <div class="localDestinations">
      <ul>
        <li v-for="(item, i) in state2.citySpot">
          <!-- 景点图片 -->
          <img :src="item.spotImage" alt="" />
          <!-- 景点介绍 -->
          <div class="introduction">
            <!-- 标题 -->
            <h3>
              {{ item.spotName }}
            </h3>
            <!-- 描述 -->
            <p>
              {{ item.spotIntroduce }}
            </p>
            <!-- 查看详情 -->
            <el-button type="primary" @click="toSpotInfo(item.spotId)">
              查看详情
            </el-button>
          </div>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
import { reactive, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  name: 'citySpot',
  setup(props, { emit }){
    const router = useRouter();
    const route = useRoute();
    const value = ref('');
    
    const state1 = reactive({
      userId: '',
      cityId: '',
    })
    
    const state2 = reactive({
      options:[],
      citySpot:[]
    })

    //钩子函数
    onMounted(()=>{
      state1.userId = route.query.userId;
      state1.cityId = route.query.cityId;
      //城市下拉框的数据默认为武汉
      if(!state1.cityId){
        state1.cityId=1
      }
      
      //获取同城景点数据
      axios
        .post("/spot/showCitySpot", {
          cityId: state1.cityId,
        })
        .then((res) => {
          state2.citySpot = res.data.data;
        });

      //获取城市的数据
      axios.post('/city/showCity',{
      }).then((res)=>{
        state2.options=res.data.data
      })

      //修改城市下拉框的显示城市      
      if(state1.cityId){
        axios.post('/city/getCityName2',{
          cityId:state1.cityId
        }).then((res)=>{
          value.value=res.data.cityName
        })  
        //子组件向父组件传值
        emit("setInfo", {
          userId: state1.userId,
          cityId: state1.cityId,
        });      
      }

    })

    //城市下拉框选择城市之后的操作
    const selectCity = (e) => {
      state1.cityId=e.cityId      
      //子组件向父组件传值
      emit("setInfo", {
        userId: state1.userId,
        cityId: state1.cityId,
      });

      axios
        .post("/spot/showCitySpot", {
          cityId: state1.cityId,
        })
        .then((res) => {
          state2.citySpot = res.data.data;
        });

    };

    //跳转对应景点详情界面
    const toSpotInfo = (e) => {
      router.push({
        path: "/cityInfo",
        query: { userId: state1.userId, spotId: e },
      });
    };


    return{
      state1,
      state2,
      value,
      selectCity,
      toSpotInfo
    }
  }
}
</script>

<style>
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


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 同城景点 */
.tongchengjingdian {
  width: 100%;
  min-height: 1100px;
  background-color: #e9e9e9;
  padding-top: 20px;
}

/* 景点 */
.tongchengjingdian .localDestinations {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}

.tongchengjingdian .localDestinations ul {
  height: 100%;
}

.tongchengjingdian .localDestinations ul li {
  display: flex;
  padding-bottom: 30px;
  list-style: none;
  height: 350px;
}

/* 景点图片 */
.tongchengjingdian .localDestinations ul li img {
  flex: 1;
  background-color: white;
  width: 300px;
}

/* 景点介绍 */
.tongchengjingdian .localDestinations ul li .introduction {
  position: relative;
  flex: 3;
  padding: 15px 3%;
  background-color: white;
}

/* 标题 */
.tongchengjingdian .localDestinations ul li .introduction h3 {
  margin-bottom: 10px;
}

/* 查看详情 */
.tongchengjingdian .localDestinations ul li .introduction button {
  position: absolute;
  right: 5%;
  bottom: 8%;
  width: 10%;
  height: 50px;
  border: white;
}

/* 底部 */
.tongchengjingdian .foot {
  width: 100%;
  height: 200px;
  margin-top: 150px;
  background-color: #595959;
  margin-bottom: 0px;
}
</style>