<template>
  <!-- 页面主体 -->
  <div class="container">
    <!-- 第一部分 -->
    <div class="c-firstblock">
      <div class="first-left">
        <h1>目的地 > {{ state1.cityName }}</h1>
        <h2>{{ state1.spotInfo.spotName }}</h2>
        <h3>{{ state1.spotInfo.spotNameEng }}</h3>
      </div>
      <div class="first-right">
        <p>
          <img
            @click="addCollection"
            v-if="state1.show1"
            class="img1"
            src="../assets/image/icon/收藏.png"
          />
          <img
            @click="cancelCollection"
            v-if="state1.show2"
            class="img1"
            src="../assets/image/icon/收藏-选中.png"
          />
          收藏
        </p>
        <p>
          <img
            v-if="state1.show3"
            class="img2"
            src="../assets/image/icon/旗子.png"
          />
          <img
            v-if="state1.show4"
            class="img2"
            src="../assets/image/icon/旗子-选中.png"
          />
          去过
        </p>
      </div>
    </div>
    <!-- 第二部分 -->
    <div class="c-secondblock">
      <div class="second-left">
        <img :src="state1.spotInfo.spotImage1" alt="" />
      </div>
      <div class="second-right">
        <h6 class="infoAddress">景点地址: {{ state1.spotInfo.spotAddress }}</h6>
        <h6 class="infoPrice">票价: {{ state1.spotInfo.spotPrice }}元/人</h6>
        <el-button type="warning" class="spotInfoBuy" @click="dialog1 = true"
          >买票</el-button
        >
      </div>
    </div>

<!-- 买票弹窗 -->
    <el-dialog
      v-model="dialog1"
      title="提示"
      width="30%"
    >
      <div class="picker2">请选择去游玩的日期</div>
      <el-date-picker v-model="value1" type="date" placeholder="日期" class="picker1">
      </el-date-picker>      
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialog1 = false">取消</el-button>
          <el-button type="primary" @click="dialog1 = false, dialog2 = true"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>

    <el-dialog
      v-model="dialog2"
      title="提示"
      width="30%"
    >
      <div class="picker2">请选择需要购买的票数</div>
      <el-input-number v-model="num" :min="1" :max="10" class="picker1"/>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialog2 = false">取消</el-button>
          <el-button type="primary" @click="dialog2 = false, dialog3 = true, buy()"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>

    <el-dialog
      v-model="dialog3"
      title="购票结果"
      width="30%"
    >
      <div class="picker2 red">{{state1.mes2}}</div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialog3 = false"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>


    <!-- 第三部分 -->
    <div class="c-thirdblock">
      <div>
        <p class="info_title">景点介绍</p>
        <p>{{ state1.spotInfo.spotIntroduce }}</p>
      </div>
    </div>
    <!-- 第四部分 -->
    <div class="c-fourthblock">
      <div>
        <p class="info_title">开放时间</p>
        <p>{{ state1.spotInfo.spotTime1 }}~{{ state1.spotInfo.spotTime2 }}</p>
      </div>
    </div>
    <!-- 底部结尾 -->
    <div class="bottom"></div>
  </div>
</template>

<script>
import { reactive, onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "cityInfo",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const dialog1 = ref(false)
    const dialog2 = ref(false)
    const dialog3 = ref(false)
    const value1 = ref(null)
    const num = ref(1)

    const state1 = reactive({
      spotInfo: [],
      userId: "",
      spotId: "",
      cityName: "",
      purchaseDate: [],
      mes: "",
      mes1: "",
      mes2:'',
      judge:'',
      show1: true,
      show2: false,
      show3: true,
      show4: false,
      date: "",
      num: '1',
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

    onMounted(() => {
      state1.userId = route.query.userId;
      state1.spotId = route.query.spotId;
      //获取景点详细信息
      axios
        .post("/spot/showSpotInfo", {
          spotId: state1.spotId,
        })
        .then((res) => {
          state1.spotInfo = res.data.data[0];
        });
      //获取景点城市
      axios
        .post("/city/getCityName1", {
          spotId: state1.spotId,
        })
        .then((res) => {
          if(res.data.message){
            state1.cityName = res.data.cityName;            
          }

        });
      //获取购物单的时间，判断是否去过
      axios
        .post("/purchase/searchSpotDate", {
          userId: state1.userId,
          spotId: state1.spotId,
        })
        .then((res) => {
          state1.purchaseDate = res.data.data;
          state1.mes = res.data.message;
          if (state1.mes) {
            state1.purchaseDate.forEach((item, index) => {
              //获取今天的日期
              var date = new Date();
              var time1 =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
              console.log(time1);
              var date1 = new Date(time1);
              var date2 = new Date(format(item.purchaseDate, "yyyy-MM-dd"));
              var date1utc = Date.UTC(
                date1.getFullYear(),
                date1.getMonth(),
                date1.getDate()
              );
              var date2utc = Date.UTC(
                date2.getFullYear(),
                date2.getMonth(),
                date2.getDate()
              );
              var day = 1000 * 60 * 60 * 24;
              var dayDiffer = (date2utc - date1utc) / day;
              if (dayDiffer < 0) {
                state1.show3 = false;
                state1.show4 = true;
              }
            });
          }
        });

      //获取收藏夹信息,判断是否收藏过
      axios
        .post("/collection/searchCollection", {
          userId: state1.userId,
          spotId: state1.spotId,
        })
        .then((res) => {
          state1.mes1 = res.data.message;
          if (state1.mes1) {
            state1.show1 = false;
            state1.show2 = true;
          } else if (!state1.mes1) {
            state1.show1 = true;
            state1.show2 = false;
          }
        });
    });

    //添加收藏
    const addCollection = () => {
      axios
        .post("/user/addCollection", {
          userId: state1.userId,
          spotId: state1.spotId,
        })
        .then((res) => {
          if (res.data.message) {
            state1.show1 = false;
            state1.show2 = true;
          }
        });
    };

    //取消收藏
    const cancelCollection = () => {
      axios
        .post("/user/cancelCollection", {
          userId: state1.userId,
          spotId: state1.spotId,
        })
        .then((res) => {
          if (res.data.message) {
            state1.show1 = true;
            state1.show2 = false;
          }
        });
    };

    // 监听 value1日期 变量，如果有发生变化，自动运行后面的回调函数
    watch(value1, (newVal, oldVal) => {
      console.log(format(newVal,'yyyy-MM-dd'))
      state1.date = format(newVal,'yyyy-MM-dd')
      //判断是否能购买，差值小于等于零则不能买
          //获取今天的日期
          var date = new Date();
          var time1 = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
          var date1 = new Date(time1);
          var date2 = new Date(format(newVal,'yyyy-MM-dd'));
          var date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
          var date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
          var day = 1000*60*60*24;
          var dayDiffer = (date2utc - date1utc)/day
          console.log(dayDiffer)
          if(dayDiffer<=0){
            state1.judge=false
          }
          else{
            state1.judge=true
          }
    })

    // 监听 num 变量，如果有发生变化，自动运行后面的回调函数
    watch(num, (newVal,oldVal)=>{
      state1.num=newVal
    })

    //买票
    const buy = ()=>{
      if(state1.judge){
        axios.post('/user/checkBuyTicket',{
          userId:state1.userId,
          spotId:state1.spotId,
          purchaseDate:state1.date
        }).then((res)=>{
          if(res.data.message){
            axios.post('/user/buyTicket',{
              userId:state1.userId,
              spotId:state1.spotId,
              purchaseDate:state1.date,
              purchaseNumber:state1.num
            }).then((res)=>{
              if(res.data.message){
                state1.mes2="购买成功！"
                axios.post('/spot/buyTicketAfter',{
                  spotPurchasedNumber:state1.num,
                  spotId:state1.spotId
                }).then((res)=>{
                  if(res.data.message)
                    console.log(res.data.message)
                })
              }

            })
          }

          else{
            axios.post('/user/buyTicketAgain',{
              userId:state1.userId,
              spotId:state1.spotId,
              purchaseDate:state1.date,
              purchaseNumber:state1.num
            }).then((res)=>{
              if(res.data.message){
                axios.post('/spot//buyTicketAfter',{
                  spotPurchasedNumber:state1.num,
                  spotId:state1.spotId
                }).then((res)=>{
                  if(res.data.message)
                  state1.mes2="购买成功！"
                })
              }
            })            
          }
        })
      }
      else{
        state1.mes2="不能购买此日期的票！"
      }
    }

    return {
      state1,
      format,
      addCollection,
      cancelCollection,
      dialog1,
      dialog2,
      dialog3,
      value1,
      num,
      buy
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.picker1{
  margin-top: 20px;
}
.picker2{
  font-size: 15px;
}
.red{
  color: rgb(228, 124, 124) !important;;
}

/* 2.页面主体样式修饰 */

/* 2.1第一部分样式修饰 */
.c-firstblock {
  overflow: hidden;
  width: auto;
  height: 180px;
  background-color: #f0f0f0;
}

.first-left {
  float: left;
  margin: 16px;
  margin-left: 300px;
  line-height: 40px;
}

.first-left h1 {
  font-size: 15px;
  font-weight: 400;
  margin: 16px;
  margin-left: -35px;
}

.first-left h2 {
  font-size: 25px;
  font-weight: 500;
  margin: 16px;
  margin-left: -45px;
}

.first-left h3 {
  font-size: 18px;
  font-weight: 400;
  line-height: 0;
  color: #bebebe;
  margin: 16px;
}

.first-right {
  float: right;
  margin-right: 300px;
}

.first-right img {
  margin-top: 20px;
}
.img1 {
  cursor: pointer;
}

/* 2.2第二部分样式修饰 */
.c-secondblock {
  overflow: hidden;
  width: auto;
  height: 400px;
  background-color: #ffffff;
}

.second-left {
  width: 550px;
  height: 360px;
  margin: 20px;
  background-color: #ffffff;
  float: left;
  margin-left: 300px;
}
.second-left img {
  width: 100%;
  height: 100%;
}

.second-right {
  width: 330px;
  float: right;
  margin-right: 300px;
}

.second-right h6 {
  font-size: 16px;
  font-weight: 500;
  margin: 16px;
  line-height: 2;
}
.infoAddress {
  margin-left: -115px !important;
}
.infoPrice {
  margin-right: 200px !important;
}
.spotInfoBuy {
  width: 80px;
  height: 40px;
  margin-right: 220px;
  margin-top: 20px;
  font-size: 100%;
}

/* 2.3第三部分样式修饰 */
.c-thirdblock {
  overflow: hidden;
  width: auto;
  height: 400px;
  background-color: #f0f0f0;
}

.c-thirdblock > div {
  margin-left: 300px;
  margin-right: 300px;
}

.container p {
  margin: 0;
  line-height: 2;
}

.info_title {
  font-size: 22px;
  line-height: 60px;
}

/* 2.4第四部分样式修饰 */
.c-fourthblock {
  overflow: hidden;
  width: auto;
  height: 200px;
  background-color: #ffffff;
}

.c-fourthblock > div {
  margin-left: 300px;
  margin-right: 300px;
}

/* 封底 */
.bottom {
  width: 100%;
  height: 200px;
  background-color: #595959;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>