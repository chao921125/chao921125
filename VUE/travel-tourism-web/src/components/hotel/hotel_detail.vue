<template>
  <div>
    <el-row>
      <el-col :span="17">
        <div class="block">
          <el-carousel trigger="click" height="325px">
            <el-carousel-item v-for="item in 1" :key="item">
              <el-image @click="" style="width:100%;height: 100%; " :src="hotel_picurl" :fit="fill">
              </el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>

      <el-col :span="6" style="text-align: left; margin-left: 20px;">
        <h1 style="font-weight: bold; font-size: 25px; color: cornflowerblue;">酒店名：{{hotel_name}}</h1>
        <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
        </el-rate>
        <p><span style="font-weight: bold;  color: orange;">地址：</span>{{hotel_address}}</p>
        <p><span style="font-weight: bold;  color: orange;">酒店简介：</span>{{hotel_suggest}}</p><br>
        <el-button
           size="medium"
           type="warning"
           @click="toHotelOrder(hotel_id)">酒店预订</el-button>
        </el-col>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12" style="margin-top: 20px;">
        <div class="grid-content bg-purple">

          <div class="block">

            <el-date-picker v-model="value55" type="datetimerange" range-separator="至" start-placeholder="开始日期"
              end-placeholder="结束日期" @change="gethoteldate">
            </el-date-picker>
            <span class="demonstration">共{{datacalc}}晚{{hotel_price}}元</span>

          </div>

        </div>
      </el-col>
    </el-row>
    <el-row style="width: 100%; display: block; float: left; margin-top: 30px;margin-bottom: 30px;">


    </el-row>

    <el-row>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-card class="box-card" style="width: 99%;">
            <div slot="header" class="clearfix">
              <span style="font-weight: bold; color: green; font-size: 25px;">酒店简介</span>

            </div>
            <div>
              <span style="float: left; font-weight: bold; color: orange; margin-left: 20px;">入离时间</span><br><br>
              <span style="float: left; margin-left: 20px;">入住时间:14:00以后 离店时间:14:00以前</span><br><br>
              <span style="float: left; font-weight: bold; color: orange; margin-left: 20px;">基本信息</span><br><br>
              <span style="float: left; margin-left: 20px;">装修时间：2017-08 开业时间：1984-01</span><br><br>
              <span style="float: left; font-weight: bold; color: orange; margin-left: 20px;">酒店介绍</span><br><br>
              <span style="float: left; margin-left: 10px;">{{hotel_suggest}}</span><br><br>

            </div>
          </el-card>

        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-card class="box-card" style="width: 99%;">
            <div slot="header" class="clearfix">
              <span style="font-weight: bold; color: green; font-size: 25px;">设施与服务</span>

            </div>
            <div>
              <span style="float: left; font-weight: bold; color: orange; margin-left: 20px;">酒店服务</span><br><br>
              <span style="float: left; margin-left: 10px;">叫醒服务     洗衣服务     送餐服务     租车服务     行李寄存     外币兑换     服务叫车服务     提供发票     礼宾服务     部分时段大堂经理语音留言传真/复印唤醒服务</span><br><br>
              <span style="float: left; font-weight: bold; color: orange; margin-left: 20px;">娱乐休闲</span><br><br>
              <span style="float: left; margin-left: 20px;">台球厅、居酒屋、电子厅、小型KTV包厢</span><br><br>
              <span style="float: left; font-weight: bold; color: orange; margin-left: 20px;">基本设施</span><br><br>
              <span style="float: left; margin-left: 10px;">前台保险柜    商务中心    会议设施
              商品部     安全消防系统     咖啡厅     大堂报纸     无烟楼层     无障碍通道     24小时热水     中餐厅西餐厅     宴会厅
              免费自动擦鞋机    多功能厅    多种规格电源插座     遮光窗帘     手动窗帘
              书桌备用床具床具：毯子、被、针线包
              空调国内长途电话    国际长途电话    有线频道   液晶电视机     免费瓶装水电热水壶     独立淋浴间     吹风机     拖鞋
              浴室     化妆放大镜     房内保险箱(部分)     咖啡壶/茶壶(部分)    迷你吧(部分)    浴缸(部分)    浴衣(部分)
              所有公共及私人场所严禁吸烟暖气     衣柜/衣橱(部分)电脑(部分)220V电压插座
              免费停车有电梯免费wifi</span><br><br>
            </div>
          </el-card>

        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">

          <el-card class="box-card" style="min-height: 700px;">
            <div slot="header" class="clearfix">
              <span style="font-weight: bold; color: green; font-size: 20px;">周边景点</span>

            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>


  </div>

</template>

<script>
  export default {
    data() {
      return {
        value5: 3.7,
        value55: '',
        hotel_name: '',
        hotel_picurl: '',
        hotel_address: '',
        hotel_price: '0',
        hotel_suggest: '',
        datacalc: ' ',

      }

    },
    created() {
      this.getHotelData();
    },
    methods: {
      toHotelOrder(id){
        console.log("id:"+id);
        this.$router.push({path:'/hotelOrder',query:{
          hotelid:id,
        }});
      },
      
      gethoteldate() {
        let date = new Date(this.value55[0])
        let y = date.getFullYear()
        let m = date.getMonth() + 1
        m = m < 10 ? ('0' + m) : m
        let d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        const time = y + '-' + m + '-' + d;
        date = new Date(time);
        this.datacalc = date.getTime();
        console.log(this.datacalc);
        date = new Date(this.value55[1]);
        y = date.getFullYear()
        m = date.getMonth() + 1
        m = m < 10 ? ('0' + m) : m
        d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        const time1 = y + '-' + m + '-' + d;
        date = new Date(time1);
        this.datacalc = (date.getTime() - this.datacalc) / 86400000;
        if (this.datacalc == 0) {
          this.datacalc++;
        }
        this.hotel_price = (this.hotel_price) * (this.datacalc)
        console.log(this.datacalc);
      },

      getHotelData() {
        console.log("11111")
        console.log(this.$route.query.hotelid);
        this.$axios.get("/hotel/findHoteldetail", {
          params: {
            "hotel_id": this.$route.query.hotelid,

          }
        }).then(res => {
          console.log("result")
          console.log(res.data)
          this.value5 = res.data.hotel_score;
          this.hotel_name = res.data.hotel_name;
          this.hotel_picurl = res.data.hotel_picurl;
          this.hotel_address = res.data.hotel_address;
          this.hotel_price = res.data.hotel_price;
          this.hotel_suggest = res.data.hotel_suggest;
        })

      }
    }
  }
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
    clear: both
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

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
