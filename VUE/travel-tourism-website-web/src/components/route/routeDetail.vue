<template>
  <div>
    <span style="color: cadetblue; margin-right: 1000px;" @click="back"
      >返回</span
    >
    <el-row>
      <el-col :span="17">
        <div class="block">
          <el-carousel trigger="click" height="325px">
            <el-carousel-item v-for="item in 1" :key="item">
              <el-image
                style="width:100%;height: 100%; "
                :src="require('@/assets/images/' + imgUrl)"
              >
              </el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>

      <el-col :span="6" style="text-align: left; margin-left: 20px;">
        <h1 style="font-weight: bold; font-size: 25px; color: cornflowerblue;">
          路线：{{ title }}
        </h1>
        <h1 style="font-weight: bold; font-size: 25px; color: cornflowerblue;">
          价格：{{ price }}￥
        </h1>
        <p>
          <span style="font-weight: bold;  color: orange;">出发地-目的地：</span
          >{{ startSite }}to{{ endSite }}
        </p>

        <br />
        <el-button size="medium" type="warning" @click="toSpotOrder()"
          >路线预订</el-button
        >
        <span style="margin-left: 10px;">
          <i class="el-icon-star-on" v-if="isCollect" @click="collected"></i>
          <i class="el-icon-star-off" v-else @click="collected"></i>
        </span>
      </el-col>
    </el-row>

    <el-row
      style="width: 100%; display: block; float: left; margin-top: 30px;margin-bottom: 30px;"
    >
    </el-row>

    <el-row>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-card class="box-card" style="width: 99%;">
            <div slot="header" class="clearfix">
              <span style="font-weight: bold; color: green; font-size: 25px;"
                >路线简介</span
              >
            </div>
            <div>
              <span
                style="float: left; font-weight: bold; color: orange; margin-left: 20px;"
                >行程时间</span
              ><br /><br />
              <span style="float: left; margin-left: 20px;"
                >{{ startTime }}到{{ endTime }}</span
              ><br /><br />
              <span
                style="float: left; font-weight: bold; color: orange; margin-left: 20px;"
                >天数</span
              ><br /><br />
              <span style="float: left; margin-left: 20px;">{{ day }}</span
              ><br /><br />
              <span
                style="float: left; font-weight: bold; color: orange; margin-left: 20px;"
                >路线介绍</span
              ><br /><br />
              <span style="float: left; margin-left: 10px;">{{ intro }}</span
              ><br /><br />
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-card class="box-card" style="width: 99%;">
            <div slot="header" class="clearfix">
              <span style="font-weight: bold; color: green; font-size: 25px;"
                >路线预定注意事项</span
              >
            </div>
            <div>
              <span
                style="float: left; font-weight: bold; color: orange; margin-left: 20px;"
              >
                【免费政策】</span
              ><br /><br />
              <span style="float: left; margin-left: 20px;">
                儿童：身高1.2米（不含）以下；
                老人：65周岁（含）以上凭老年证或身份证； 军人：凭有效证件；
                残疾人：凭有效证件。 </span
              ><br /><br />
              <span
                style="float: left; font-weight: bold; color: orange; margin-left: 20px;"
                >【优惠政策】</span
              ><br /><br />
              <span style="float: left; margin-left: 20px;">
                儿童：身高1.2米（含）-1.4米（含）之间，儿童一定要在成年人的陪同下同行；
                老人：年龄60周岁（含）-65周岁（不含）之间凭有效证件，按生日计算年龄；
                学生：全日制大学本科及以下学历的本人有效学生证。
                以上信息仅供参考，具体以景区当日实际公示信息为准。 </span
              ><br /><br />
              <span
                style="float: left; font-weight: bold; color: orange; margin-left: 20px;"
                >温馨提示</span
              ><br /><br />
              <span style="float: left; margin-left: 20px;">
                为保证这次旅程顺利，预订时请务必填写真实姓名、手机号码等信息。 </span
              ><br /><br />
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import newAxios from "../../utils/axios";
export default {
  data() {
    return {
      title: "",
      imgUrl: "",
      price: 0.0,
      day: "",
      intro: "",
      setoffTime: 0,
      intro: "",
      endSite: "",
      startSite: "",
      isCollect: false,
      title: "",
      isCollect: false,
    };
  },
  created() {
    this.getHotelData();
    this.Collect();
  },

  methods: {
    back() {
      this.$router.back();
    },
    toSpotOrder() {
      this.$router.push({
        path: "/routeOrder",
        query: {
          routeId: this.$route.query.routeId,
          price: this.price,
        },
      });
    },
    //判断是否收藏
    Collect() {
      newAxios
        .get("/collection/isCollection", {
          params: {
            productId: parseInt(this.$route.query.routeId),
            productType: 2,
          },
        })
        .then((res) => res.data)
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.isCollect = res.data;
            this.getHotelData();
            //   this.$message.success("收藏成功");
          } else {
            this.isCollect = res.data;
            this.getHotelData();
            //   this.$message.success("取消收藏成功");
          }
        });
    },
    //收藏

    collected() {
      newAxios
        .post("/collection/save", {
          productId: parseInt(this.$route.query.routeId),
          productType: 2,
          title: this.title,
        })
        .then((res) => res.data)
        .then((res) => {
          console.log(res.data);
          if (res.code == 200) {
            this.Collect();
            this.getHotelData();
          } else {
            this.Collect();
            this.getHotelData();
          }
        });
    },

    getHotelData() {
      console.log(this.$route.query.routeId);
      newAxios
        .get("/travelRoute/findById", {
          params: {
            id: this.$route.query.routeId,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          this.title = res.data.data.title;
          this.imgUrl = res.data.data.imgUrl;
          this.startSite = res.data.data.startSite;
          this.endSite = res.data.data.endSite;
          this.price = res.data.data.price;
          this.day = res.data.data.day;
          this.intro = res.data.data.intro;
          this.startTime = res.data.data.startTime;
          this.endTime = res.data.data.endTime;
          this.title = res.data.data.title;
        });
    },
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
