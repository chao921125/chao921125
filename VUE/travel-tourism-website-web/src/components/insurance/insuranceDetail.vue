<template>
  <div>
    <span style="color: cadetblue; margin-right: 1000px;" @click="back"
      >返回</span
    >
    <el-row>
      <el-col :span="17">
        <div class="block">
          <el-carousel trigger="click" height="300px">
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
          保险名：{{ title }}
        </h1>

        <p>
          <span style="font-weight: bold;  color: orange;">保险介绍：</span
          >{{ resume }}
        </p>
        <br />
        <el-button size="medium" type="warning" @click="toInsuarnce()"
          >保险预订</el-button
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
                >保险简介</span
              >
            </div>
            <div>
              <span
                style="float: left; font-weight: bold; color: orange; margin-left: 20px;"
                >保险期限</span
              ><br /><br />
              <span style="float: left; margin-left: 20px;">人的一生</span
              ><br /><br />

              <span
                style="float: left; font-weight: bold; color: orange; margin-left: 20px;"
                >保险介绍</span
              ><br /><br />
              <span style="float: left; margin-left: 10px;">{{ resume }}</span
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
                >保险预定事项</span
              >
            </div>
            <div>
              <span
                style="float: left; font-weight: bold; color: orange; margin-left: 20px;"
              >
                适用人群</span
              ><br /><br />
              <span style="float: left; margin-left: 20px;"> 3-65周岁 </span
              ><br /><br />
              <span
                style="float: left; font-weight: bold; color: orange; margin-left: 20px;"
                >保单形式</span
              ><br /><br />
              <span style="float: left; margin-left: 20px;">
                电子保单 纸质保单 </span
              ><br /><br />

              <span
                style="float: left; font-weight: bold; color: orange; margin-left: 20px;"
                >投保须知</span
              ><br /><br />
              <span style="float: left; margin-left: 20px;">
                1、本保险每位被保险人限投一份，多投无效。
                <br />
                2、本保险意外伤害医疗保险责任及高风险运动意外医疗责任绝对免赔额为300元。
                <br />
                3、本保险意外伤害住院津贴责任免赔天数有3天。
                <br />
                投保人声明
                <br />
                1、本投保人兹声明上述各项投保内容填写属实。
                <br />
                2、本投保人确认已阅读本产品所有条款，且贵公司已向本人详细介绍了条款的内容，特别就保险条款中免除保险人责任的条款内容和特别约定内容作出明确说明，本人对免除保险人责任的条款的概念、内容及其法律后果，均因保险人的明确说明已完全理解，并同意投保。
                <br />
                3、根据《中华人民共和国合同法》第十一条规定，数据电文是合法的合同表现形式。本人接受以中国平安财产保险股份有限公司提供的电子保单作为本投保书成立的合法有效凭证，具有完全证据效力。
                <br />
                4、本人授权平安集团，除法律另有规定之外，将本人提供给平安集团的信息、享受平安集团服务产生的信息（包括本单证签署之前提供和产生的信息）以及平安集团根据本条约定查询、收集的信息，用于平安集团及其因服务必要委托的合作伙伴为本人提供服务、推荐产品、开展市场调查与信息数据分析。本人授权平安集团，除法律另有规定之外，基于为本人提供更优质服务和产品的目的，向平安集团因服务必要开展合作的伙伴提供、查询、收集本人的信息。为确保本人信息的安全，平安集团及其合作伙伴对上述信息负有保密义务，并采取各种措施保证信息安全。本条款自本单证签署时生效，具有独立法律效力，不受合同成立与否及效力状态变化的影响。本条所称“平安集团”是指中国平安保险（集团）股份有限公司及其直接或间接控股的公司，以及中国平安保险（集团）股份有限公司直接或间接作为其单一最大股东的公司。如您不同意上述授权条款的部分或全部，可致电客服热线（95511）取消或变更授权。 </span
              ><br />
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
      spotAddress: "",
      price: 0.0,
      linkPhone: "",
      resume: "",
      type: 3,
      setoffTime: 0,
      insuranceCompany: "",
      isCollect: false,
    };
  },
  created() {
    this.getHotelData();
    this.Collect();
  },
  methods: {
    toInsuarnce() {
      this.$router.push({
        path: "/insuranceOrder",
        query: {
          insuranceId: this.$route.query.insuranceId,
          price: this.price,
        },
      });
    },
    toSpotOrder() {
      this.$router.push({
        path: "/routeOrder",
        query: {
          routeId: this.$route.query.insuranceId,
          price: this.price,
        },
      });
    },
    //判断是否收藏
    Collect() {
      newAxios
        .get("/collection/isCollection", {
          params: {
            productId: parseInt(this.$route.query.insuranceId),
            productType: 4,
          },
        })
        .then((res) => res.data)
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.isCollect = res.data;
            this.getHotelData();
          } else {
            this.isCollect = res.data;
            this.getHotelData();
          }
        });
    },
    //收藏

    collected() {
      newAxios
        .post("/collection/save", {
          productId: parseInt(this.$route.query.insuranceId),
          productType: 4,
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
    back() {
      this.$router.back();
    },
    getHotelData() {
      console.log(this.$route.query.insuranceId);
      newAxios
        .get("/insurance/findInsuranceById", {
          params: {
            id: this.$route.query.insuranceId,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          this.title = res.data.data.title;
          this.imgUrl = res.data.data.imgUrl;
          this.price = res.data.data.price;
          this.resume = res.data.data.resume;
          this.type = res.data.data.type;
          this.insuranceCompany = res.data.data.insuranceCompany;
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
