<template>
  <div class="out">
    <ul class="shoucang">
      <!-- 收藏景点 -->
      <li class="destination1" v-for="(item, i) in state.purchaseList">
        <div class="out1" v-if="judge(item.purchaseDate)">

          <!-- 存放景点图片 -->
          <div class="left2">
            <img class="user-img" :src="item.spotImage1" alt="" />
          </div>
          <!-- 景点名称、人数 -->
          <div class="right2">
            <h3 class="Chinese">
              {{ item.spotName }}({{ format(item.purchaseDate, "yyyy-MM-dd") }})
            </h3>
            <!-- 英文名 -->
            <h3 class="English">{{ item.spotNameEng }}</h3>
            <div class="count">
              <!-- 去过人数 -->
              <span class="spanNumber">{{ item.spotPurchasedNumber }}人</span>
              <span>去过</span>
              <!-- 查看详情 -->
              <el-button
                type="primary"
                class="collection-button"
                @click="toCityInfo(item.spotId)"
              >
                查看详情
              </el-button>
            </div>
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
  name: "user-go",
  setup() {
    const router = useRouter();
    const route = useRoute();

    const state = reactive({
      userId: "",
      purchaseList: [],
    });

    onMounted(() => {
      state.userId = route.query.userId;
      console.log(state.userId);
      axios
        .post("/purchase/showPurchasingList1", {
          userId: state.userId,
        })
        .then((res) => {
          state.purchaseList = res.data.data;
          console.log(state.purchaseList);
        });
    });

    //转换时间
    const format = (time, format) => {
      var t = new Date(time);
      var tf = function (i) {
        return (i < 10 ? "0" : "") + i;
      };
      return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
          case "yyyy":
            return tf(t.getFullYear());

          case "MM":
            return tf(t.getMonth() + 1);

          case "mm":
            return tf(t.getMinutes());

          case "dd":
            return tf(t.getDate());

          case "HH":
            return tf(t.getHours());

          case "ss":
            return tf(t.getSeconds());
        }
      });
    };

    const toCityInfo = (e) => {
      console.log("ss");
      router.push({
        path: "/cityInfo",
        query: { userId: state.userId, spotId: e },
      });
    };

    const judge = (e) => {
          //获取今天的日期
          var date = new Date();
          var time1 = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
          var date1 = new Date(time1);
          var date2 = new Date(format(e,'yyyy-MM-dd'));
          var date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
          var date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
          var day = 1000*60*60*24;
          var dayDiffer = (date2utc - date1utc)/day
          console.log(dayDiffer)
          if(dayDiffer<0){
            return true
          }
          else{
            return false
          }
    };

    return {
      state,
      toCityInfo,
      format,
      judge,
    };
  },
};
</script>

<style>
.out {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 700px;
}
.shoucang {
  width: 100%;
  height: 100%;
  padding-bottom: 25px;
  /* background-color: pink; */
}

/* 收藏景点 */
.shoucang .destination1 {
  display: flex;
  margin-bottom: 20px;
  width: 90%;
  margin-left: 5%;
}
.out1 {
  display: flex;
  width: 100%;
  height: 200px;
  background-color: #f4f4f4;
}

/* 存放景点图片 */
.shoucang .destination1 .left2 {
  width: 45%;
  height: 100%;
  /* flex: 1; */
  background-color: #fff;
}
.user-img {
  width: 100%;
  height: 100%;
}

/* 景点名称、人数 */
.shoucang .destination1 .right2 {
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
.shoucang .destination1 .right2 .English {
  font-weight: 400;
  color: grey;
}

/* 去过人数 */
.spanNumber {
  color: skyblue;
}

/* 查看详情 */
.shoucang .destination1 .right2 .count .collection-button {
  display: inline-block;
  margin-left: 25%;
  width: 30%;
  height: 45px;
  text-decoration: none;
  text-align: center;
}
</style>