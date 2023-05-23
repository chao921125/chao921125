<template>
<div class="out">
  <ul class="shoucang">
    <!-- 收藏景点 -->
    <li class="destination" v-for="(item,i) in state.collectionList">
      <!-- 存放景点图片 -->
      <div class="left2">
        <img class="user-img" :src="item.spotImage1" alt="">
      </div>
      <!-- 景点名称、人数 -->
      <div class="right2">
        <h3 class="Chinese">{{item.spotName}}</h3>
        <!-- 英文名 -->
        <h3 class="English">{{item.spotNameEng}}</h3>
        <div class="count">
          <!-- 去过人数 -->
          <span class="spanNumber">{{item.spotPurchasedNumber}}人</span>
          <span>去过</span>
          <!-- 查看详情 -->
          <el-button type="primary" class="collection-button" @click="toCityInfo(item.spotId)">
            查看详情
          </el-button>         
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import { reactive, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "user-collection",
  setup() {
    const router = useRouter();
    const route = useRoute();

    const state = reactive({
      userId: "",
      collectionList:[]
    });

    onMounted(() => {
      state.userId = route.query.userId;
      console.log(state.userId);
      axios.post('/collection/showCollection',{
        userId:state.userId
      }).then((res)=>{
        state.collectionList=res.data.data
      })
    });

    const toCityInfo = (e) =>{
      console.log('ss')
      router.push({
        path: "/cityInfo",
        query: { userId: state.userId, spotId: e },
      });
    }

    return {
      state,
      toCityInfo
    };
  },
};
</script>

<style>
.out{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y:auto;
  max-height:700px; 
}
.shoucang{
    width: 100%;
    height: 100%;
    padding-bottom: 25px;
    /* background-color: pink; */
}

/* 收藏景点 */
.shoucang .destination{
    display: flex;
    margin-bottom: 20px;
    width: 90%;
    height: 200px;
    margin-left: 5%;
    background-color: #f4f4f4;
}

/* 存放景点图片 */
.shoucang .destination .left2{
    width: 45%;
    height: 100%;
    /* flex: 1; */
    background-color: #fff;
}
.user-img{
  width: 100%;
  height: 100%;
}

/* 景点名称、人数 */
.shoucang .destination .right2{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 3%;
    /* padding-top: 5%; */
    width: 50%;
    height: 100%;
    margin-left: 2%;

}

/* 英文名 */
.shoucang .destination .right2 .English{
    font-weight: 400;
    color: grey;
}



/* 去过人数 */
.spanNumber{
    color: skyblue;
}

/* 查看详情 */
.shoucang .destination .right2 .count .collection-button{
    display: inline-block;
    margin-left: 25%;
    width: 30%;
    height: 45px;
    text-decoration: none;
    text-align: center;
}
</style>