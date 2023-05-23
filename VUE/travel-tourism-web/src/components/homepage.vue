<template>

  <div>
    <!-- 首页顶部轮播图 -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item,one) in imgs" :key="one">
        <el-image style="width: 100%; height: 100%;" :src="item.hotelPicurl" fit="cover">
        </el-image>
      </el-carousel-item>
    </el-carousel>

    <!-- 分界线-->
    <el-divider>
       <span style=" font-size: 25px; font-weight: bold;"></span>
    </el-divider>

    <!-- 周边游内容-->
    <el-container>
      <el-aside style="background-color: skyblue;" width="230px" margin-top="500px">
        <el-button type="text" @click="toScenery" style="float:left; margin-left: 20px;">
          <h2 style="color: red;">周边游</h2>
        </el-button><br>
        <p style="margin-top: 150px;">热门城市</p><br>
        <p>热门景点</p><br>
        <p>热门主题</p>
      </el-aside>

      <el-container>
        <el-header height="30px">

          <h2 style="float: left;">跟团游</h2>
          <h2 style="float: left; margin-left: 20px;">自由行</h2>
          <el-button @click=toScenery() type="text" style="float: right; margin-top: 30px;">更多>></el-button>
        </el-header>

        <el-main>
          <div style="margin-top: 40px;">
            <table>
              <tr v-for="(datas,index) in tableData">
                <td v-for="(item,two) in datas" :key="two" style="width: 190px;">
                  <img @click="scenery_detail(item.scenery_id)" :src="item.scenery_picurl" alt="无法加载图片" style="width: 180px; height: 150px;" /><br>
                  <p style="color: cornflowerblue;" @click="scenery_detail(item.scenery_id)">{{item.scenery_content}}</p><br>
                  <span style="font-weight: bold; color: red; float: right;">￥{{ item.scenery_price}}起</span>
                </td>
              </tr>
            </table>
          </div>
        </el-main>
      </el-container>
    </el-container>

    <!-- 分界线-->
    <el-divider>
       <span style=" font-size: 25px; font-weight: bold;"></span>
    </el-divider>

    <!-- 国内游内容-->
    <el-container>
      <el-aside style="background-color: cadetblue;" width="230px" margin-top="500px">
       <el-button type="text" @click="toScenery" style="float:left; margin-left: 20px;">
         <h2 style="color: yellow;">国内游</h2>
       </el-button><br>
       <p style="margin-top: 150px;">热门城市</p><br>
       <p>热门景点</p><br>
       <p>热门主题</p>
     </el-aside>

      <el-container>
        <el-header height="30px">

          <h2 style="float: left;">跟团游</h2>
          <h2 style="float: left; margin-left: 20px;">自由行</h2>
          <el-button @click=toDomestic() type="text" style="float: right; margin-top: 30px;">更多>></el-button>
        </el-header>

        <el-main>
          <div style="margin-top: 40px;">
            <table>
              <tr v-for="(datas,index) in tableData">
                <td v-for="(item,three) in datas" :key="three" style="width: 190px;">
                  <img @click="scenery_detail(item.scenery_id)" :src="item.scenery_picurl" alt="无法加载图片"  style="width: 180px; height: 150px;" /><br>
                 <p style="color: cornflowerblue;" @click="scenery_detail(item.scenery_id)">{{item.scenery_content}}</p><br>
                  <span style="font-weight: bold; color: red; float: right;">￥{{ item.scenery_price}}起</span>
                </td>
              </tr>
            </table>
          </div>
        </el-main>
      </el-container>
    </el-container>

    <!-- 分界线-->
    <el-divider>
       <span style=" font-size: 25px; font-weight: bold;"></span>
    </el-divider>

    <!-- 推荐酒店/酒店品牌-->
    <el-row>
     <el-col :span="6">
        <div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>酒店品牌</span>
            </div>
            <div v-for="item in hotelbrandlist" >
              <el-image @click="jumptohotel(item.hotel_name)"
                style="width: 70px; height: 70px; float: left;display: table; " :src="item.hotel_picurl" fit="fill">
                ></el-image>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="16" >
        <div>
          <el-carousel height="280px" width="100%" type="card">
            <el-carousel-item v-for="item in recommendhotellist" >
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span style="font-weight: bold; color: blue;">{{item.hotel_name}} </span><br>
                  <span style="font-weight: bold; color: red;"> {{item.hotel_price}}¥</span><br>
                  <el-button style="float: right; padding: 3px 0" type="text" @click="gethotel_detail(item.hotel_id)">
                    查看详情</el-button>
                </div>
                <el-image @click="gethotel_detail(item.hotel_id)" style="width: 50%; height: 50%; " :src="item.hotel_picurl"
                  fit="cover">
                </el-image>
                <span style="width: 100%; white-space: nowrap;">{{item.hotel_suggest}}</span>
              </el-card>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>


  </div>



</template>

<script>
  export default {
    name: "homepage",
    data() {
      return {
        imgs: [],
        tableData: [],
        page: 1,
        url: '/scenery',
        hotelbrandlist:[],
        recommendhotellist:[],

      }
    },

    methods: {
      //景点详情页跳转的方法
        scenery_detail(id){
          console.log("id:"+id);
          this.$router.push({path:'/scenery_detail',query:{
            sceneryid:id,
          }});

        },

      //酒店详情页跳转的方法
        gethotel_detail(id){
          console.log("id:"+id);
          this.$router.push({path:'/hotel_detail',query:{
            hotelid:id,
          }});

        },
      jumptohotel(hotelbrand) {
        this.$router.push({
          path: "/hotel",
          data: {
            hotelbrand: this.hotelbrand,
          }
        });
      },

      toScenery() {
        this.$router.push({
          path: "/scenery"
        });
      },
      toDomestic() {
        this.$router.push({
          path: "/domestic"
        });
      },

      getList(page = 1, rows = 8) {
        this.page = page


        //发送请求获取景点信息
        this.$axios.get("/scenery/sceneryFindPage", {
          params: {
            "page": page,
            "rows": rows
          }
        }).then(res => {
          this.tableData = res.data.sceneryList;
          this.totalPage = res.data.totalPage;
          this.totals = res.data.totals;
          this.page = res.data.page;

          var newData = [];
          var clome = [];
          var count = 0;

          for (var i = 0; i < this.tableData.length; i++) {
            clome.push(this.tableData[i]);

            if ((i + 1) % 4 == 0) {
              newData.push(clome)
              clome = [];
            }
          }
          this.tableData = newData;
        })
      }

    },
    created() {
      //获取酒店品牌
        this.$axios.get("/hotel/hotelbrandlist").then(res=>{
          for (let i = 0; i < res.length; i++) {
            res[i].hotel_name.replace("酒店"," ");
          }
          this.hotelbrandlist=res.data;
        })
        //获取推荐酒店列表
        this.$axios.get("/hotel/findRecommendHotel").then(res=>{
          this.recommendhotellist=res.data;
        })
      //发送请求获取轮播图
      this.$axios.get("/hotel/findAllPicurl").then(res => {
          this.imgs = res.data;
          console.log(this.imgs)
        }),
        this.getList()
    }
  }
</script>

<style>
</style>
