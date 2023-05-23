<template>
  <div>
<!-- 酒店顶部轮播图 -->
 <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <el-image
             style="width: 100%; height: 100%; "
             :src="item.hotelPicurl"
             fit="cover">
        </el-image>
    </el-carousel-item>
  </el-carousel>


  <!-- 分界线-->
  <el-divider>
     <span style=" font-size: 25px; font-weight: bold;">酒店预订</span>
  </el-divider>

<!-- 酒店介绍表格-->
   <el-table  :data="tableData" style="width: 100%">
      <el-table-column
        label="酒店图片"
        width="280">
        <template slot-scope="scope">
         <img :src="scope.row.hotel_picurl" alt="无法加载图片" style="width: 260px; height: 170px;" />
        </template>
      </el-table-column>

      <el-table-column
        label="酒店信息"
        width="620">
        <template slot-scope="scope">

              <span style="font-size: 23px; font-weight: bold; color:dodgerblue;">{{ scope.row.hotel_name}}</span><br>
               <span style="font-size: 20px; font-weight: bold; color: orange;">{{ scope.row.hotel_score}}分</span><br>
              <span >地址：{{ scope.row.hotel_address}}</span><br>
              <span >简介：{{ scope.row.hotel_suggest}}</span>

        </template>
      </el-table-column>


      <el-table-column label="" >
        <template slot-scope="scope">
          <!-- 写span标签接收价格数据并拼接信息-->
          <span style="display: block;
          font-weight: bold; color: red;
          font-size: 17px;margin-bottom: 30px;">￥{{ scope.row.hotel_price}}起</span>

           <!-- 设置“查看详情的按钮”-->
          <el-button
            size="medium"
            type="warning"
            @click="hotel_detail(scope.row.hotel_id)" >查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--实现：动态分页-->
      <el-pagination
       background
       layout="prev, pager, next"
       :total="totals"
       :current-page="page"
       :page-size="4"
       @current-change="getList"
       >
      </el-pagination>
</div>

</template>
<script>
	
    export default{
        name:"hotel",

        data(){
          return{
              imgs:[],
              tableData:[],
              totalPage:0,
              totals:0,
              page:1,
          }
        },
        methods:{
          //酒店详情页跳转的方法
            hotel_detail(id){
              console.log("id:"+id);
              this.$router.push({path:'/hotel_detail',query:{
                hotelid:id,
              }});

            },
			
			//获取酒店的数据列表以及分页信息
            getList(page=1,rows=5){
              this.page=page 
              
              //发送请求获取酒店信息
              this.$axios.get("/hotel/hotelFindPage",{
                params: {
                  "page":page,
                  "rows":rows
                }
              }
              ).then(res=>{
				// console.log(res.data);
                this.tableData = res.data.hoteList;
                this.totalPage = res.data.totalPage;
                this.totals = res.data.totals;
                this.page = res.data.page;
              })
            }

        },
        created() {
          //获取酒店信息
          this.getList()
		  
		  //发送请求获取轮播图
		  //启动项目时默认加载一次方法
		  this.$axios.get('/hotel/findAllPicurl').then(res=>{
			  //测试数据是否能够接收
			  // console.log(res.data);
			  this.imgs = res.data;
		  })
		  

        }
  }
</script>

<style>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
