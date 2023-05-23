<template>
  <div class="shopping">
    <!-- 内容 -->
    <div class="center">
      <ul v-if="state1.ju1">
        <li v-for="(item, i) in state2.purchasingList">
          <div class="purchasingList">
            <!-- 内容左部图片 -->
            <div class="left">
              <img :src="item.spotImage" alt="" />
            </div>
            <!-- 内容右部 -->
            <div class="right">
              <div class="up">
                <!-- 标题 -->
                <h2>
                  {{ item.spotName }}({{
                    format(item.purchaseDate, "yyyy-MM-dd")
                  }})
                </h2>
                <!-- 订单数量 -->
                <div class="count">
                  <span>x</span>
                  <span>{{ item.purchaseNumber }}</span>
                </div>
              </div>
              <div class="down">
                <!-- 价格 -->
                <div class="price">
                  <span>¥</span>
                  <span>{{ item.spotPrice }}</span>
                </div>
                <!-- 查看详情 -->
                <div class="detail">
                  <el-button
                    type="primary"
                    class="purButton"
                    @click="toSpotInfo(item.spotId)"
                    >查看详情</el-button
                  >
                </div>
                <!-- 申请退款 -->
                <div class="refund">
                  <el-button
                    type="danger"
                    class="purButton"
                    @click="
                      cancelBuyTicket1(item.spotId, item.purchaseDate, item.purchaseNumber),
                        (dialog1 = true)
                    "
                    >申请退款</el-button
                  >
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <!-- 退款弹窗 -->
      <el-dialog v-model="dialog1" title="退款确认" width="30%">
        <div class="picker2 red">请确认是否退款此订单</div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialog1 = false">取消</el-button>
            <el-button
              type="primary"
              @click="(dialog1 = false), (dialog2 = true), cancelBuyTicket()"
              >确认</el-button
            >
          </span>
        </template>
      </el-dialog>

      <el-dialog v-model="dialog2" title="退款结果" width="30%">
        <div class="picker2 red">{{ state1.mes1 }}</div>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="primary" @click="(dialog2 = false), getList()"
              >确认</el-button
            >
          </span>
        </template>
      </el-dialog>

      <div v-if="state1.ju2" class="alter-pur">订单为空~</div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "purchase",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const dialog1 = ref(false);
    const dialog2 = ref(false);

    const state1 = reactive({
      userId: "",
      cityId: "",
      mes: "",
      ju1: "",
      mes1: "",
      spotId: "",
      purchaseDate: "",
      purchaseNumber: ''
    });

    const state2 = reactive({
      purchasingList: [],
    });

    onMounted(() => {
      state1.userId = route.query.userId;
      //获取购物订单
      axios
        .post("/purchase/showPurchasingList", {
          userId: state1.userId,
        })
        .then((res) => {
          if (res.data.message) {
            state2.purchasingList = res.data.data;
            console.log(state2.purchasingList)
            state1.ju1 = true;
            state1.ju2 = false;
          } else {
            state1.ju1 = false;
            state1.ju2 = true;
          }
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


    const toSpotInfo = (e) => {
      router.push({
        path: "/cityInfo",
        query: { userId: state1.userId, spotId: e },
      });
    };

    const cancelBuyTicket1 = (id, date, number) => {
      state1.spotId = id;
      state1.purchaseDate = format(date, "yyyy-MM-dd");
      state1.purchaseNumber = number
    };

    const cancelBuyTicket = () => {
      axios
        .post("/user/cancelBuyTicket", {
          userId: state1.userId,
          spotId: state1.spotId,
          purchaseDate: state1.purchaseDate,
        })
        .then((res) => {
          if (res.data.message) {
            state1.mes1 = "退款成功";
            axios.post('/spot/cancelTicketAfter',{
              spotPurchasedNumber:state1.purchaseNumber,
              spotId:state1.spotId
            }).then((res)=>{
              console.log(res.data.message)
            })
          }
        });
    };

    const getList = () => {
      axios
        .post("/purchase/showPurchasingList", {
          userId: state1.userId,
        })
        .then((res) => {
          state1.mes = res.data.message;
          if (state1.mes) {
            state2.purchasingList = res.data.data;
            state1.ju1 = true;
            state1.ju2 = false;
          } else {
            state1.ju1 = false;
            state1.ju2 = true;
          }
        });
    };


    return {
      state1,
      state2,
      dialog1,
      dialog2,
      format,
      toSpotInfo,
      cancelBuyTicket,
      cancelBuyTicket1,
      getList,
    };
  },
};
</script>

<style>
.picker2 {
  font-size: 18px;
}
.red {
  color: rgb(228, 124, 124) !important;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.alter-pur {
  margin: 0 auto;
  width: 200px;
  font-size: 25px;
  color: #f56c6c;
  margin-top: 100px;
}

/* 购物车 */
.shopping {
  width: 100%;
  min-height: 1100px;
  background-color: #f4f4f4;
}

/* 内容 */
.shopping .center {
  margin: 0 auto;
  display: flex;
  /* justify-content: space-around; */
  padding-top: 30px;
  width: 1200px;
  min-height: 900px;
  background-color: #f4f4f4;
}

.shopping .center ul {
  width: 100%;
  /* background-color: orange; */
}

.shopping .center ul li {
  list-style: none;
}
.purchasingList {
  display: flex;
  list-style: none;
  width: 100%;
  height: 320px;
  margin-bottom: 30px;
  background-color: white;
}

/* 内容左部图片 */
.shopping .center ul li .left {
  /* flex: 1; */

  width: 23%;
}

.shopping .center ul li .left img {
  width: 100%;
  height: 100%;
}

/* 内容右部 */
.shopping .center ul li .right {
  flex: 2;
  display: flex;
  flex-direction: column;
  /* background-color: pink; */
}

.shopping .center ul li .right .up {
  position: relative;
  flex: 1;
  padding: 10px 10% 0;
  /* background-color: skyblue; */
}

/* 标题 */
.shopping .center ul li .right .up h2 {
  position: absolute;
  top: 30px;
  font-size: 22px;
}

/* 订单数量 */
.shopping .center ul li .right .up .count {
  position: absolute;
  right: 10%;
  bottom: -30px;
  font-size: 23px;
}

.shopping .center ul li .right .down {
  margin-top: 70px;
  flex: 1;
  display: flex;
  align-items: center;
  /* background-color: pink; */
}

/* 价格 */
.shopping .center ul li .right .down .price {
  flex: 1;
  color: skyblue;
  font-size: 22px;
  text-align: center;
}

/* 查看详情 */
.shopping .center ul li .right .down .detail {
  flex: 1;
  text-align: center;
}

.shopping .center ul li .right .down .purButton {
  width: 45%;
  height: 50px;
  font-size: 17px;
}

/* 申请退款 */
.shopping .center ul li .right .down .refund {
  flex: 1;
  text-align: center;
}
</style>