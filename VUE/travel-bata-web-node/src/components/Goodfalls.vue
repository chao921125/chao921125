<template>
  <div class="hello">
    <backup @backTop="backTop" :eleSelector="eleSelector"></backup>
    <!-- <router-link  id="Home" to="/Home" > 首页</router-link>

        <router-link id="Second" to="/Second">历史 </router-link>

        <router-link id="Three" to="/Three">评论 </router-link>

        <router-link id="Source" to="/Source">资源 </router-link> -->
    <el-container>
      <!-- vue组件 -->
      <el-header color-primary='#409EFF' height="120px">
        <div v-html="htmlbt" class="LOGO"></div>
        <loginitem class="Loginitem" :status="tarshow"></loginitem>
        <div>
          <tarbartemplate class="Hearder-Middle" @logout="logoutstatus"></tarbartemplate>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
        <!-- <div id='tabar'>
           <el-breadcrumb separator="/" separator-class="el-icon-arrow-right" id="tabar1">
              <el-breadcrumb-item :to="{ path: '/Home'}">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path:'/Second'}">历史</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path:'/Three'}">评论</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path:'/Source'}">资源</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path:''}">{{msg}}</el-breadcrumb-item>
            </el-breadcrumb>
           <br>
          </div> -->
      </el-main>
      <el-footer>
        <div class="footer">
          <div class="content">
            <div class="left">
              <!-- LOGO
              <img src="./images/logo-footer-white-all.png" alt=""> -->
            </div>
            <div class="right">
              <p class="site_name">横州市</p>
              <p class="contents">此网站仅供《毕业设计》参考，素材来源于网络。</p>
              <p class="contents">转载内容版权归作者及来源网站所有，如有疑问Email:liyixiang545@gmail.com</p>
              <p class="contents">Copyright © 2019 家乡美. By:Iot 19 class one.Guilvfa</p>
              <p class="contents">桂公网安备45000000000000号</p>
              <p class="contents">桂ICP备12345678号</p>
            </div>
            <div class="right" style="width: 20%;">
              <p class="site_name">友情链接</p>

              <p class="contents">
                <el-link type="info" href="http://www.hengzhoushi.net/">横州市人民政府</el-link>
              </p>
              <p class="contents">
                <el-link type="info" href="http://www.qinzhou.gov.cn/">钦州市人民政府</el-link>
              </p>
              <p class="contents">
                <el-link type="info" href="http://www.nanning.gov.cn/">南宁市人民政府</el-link>
              </p>
              <p class="contents">
                <el-link type="info" href="http://www.xiecheng.gov.cn/">携程网</el-link>
              </p>
            </div>
          </div>
        </div>
      </el-footer>
      <backup @backTop="backTop()" :eleSelector="eleSelector"></backup>
    </el-container>
  </div>
</template>
<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.15.7/lib/index.js"></script>

<script>
  import Home from './Home.vue'
  import tarbartemplate from './Appcomponets/tarbartemplate.vue'
  import event2 from "../../static/config/event.js"
  import loginitem from './Appcomponets/loginitem.vue'
  import backup from './Appcomponets/backup.vue'
  export default {
    name: 'Goodfalls',
    components: {
      tarbartemplate,
      Home,
      loginitem,
      backup,
    },
    data() {
      return {
        msg: '欢迎访问横州市旅游网站！',
        htmlbt: '横州市旅游网站',
        tarshow: true,
        eleSelector: '',
      }
    },
    methods: {
      backTop(){},
      status () {
        console.log(sessionStorage.getItem('username'))
        if (sessionStorage.getItem('username') === '"admin"'){
          this.tarshow = false
        } else{
          this.tarshow = true
        }
      },
      logoutstatus(value){
        this.tarshow =value
      },
      handleSelect() {
        console.log("handleSelect")
      },
    },
    created(){
      event2.$on('myfun',ab=>{
        if (ab ==200){
          // console.log(this.tarshow),
          //判断是否为真
          this.tarshow =false
          }
        else if(ab==400){
          this.tarshow =true
          }
        }),
        this.status()
      //使用
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #tabar {
    width: 100%;
    height: 100%;
  }

  #tabar1 {
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid gainsboro;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .tarbar {
    width: 100%;
    height: 100%;
  }

  .LOGO {
    float: left;
    height: 60px;
    font-size: 20px;
    line-height: 60px;
  }

  .Hearder {
    width: auto;
    line-height: 20px;
  }

  .Loginitem {
    width: auto;
    float: left;
    margin-top: 60px;
    margin-left: -120px;
    text-align: center;
    font-size: 1.5rem;
  }

  .Hearder-Middle {
    float: right;
    padding-right: 70px;
    padding-top: 20px;
    line-height: 40px;
    height: 50px;
    font-size: 15px;

  }

  .footer .content {
    width: 1080px;
    /*底部区域-内容主体（main）-宽度1080px（此处与网站主体宽度吻合）*/
    height: 220px;
    /*底部区域-内容主体（main）-高度220px(此处与底部区域整体吻合)*/
    margin: 0 auto;
    margin-top: 150px;
    /*底部区域-内容主体（main）-设置居中*/
  }

  /* 底部区域主体内容区域左侧内容配置 */
  .footer .content .left {
    float: left;;
    /*底部区域-内容主体左侧（left）-向左浮动*/
    width: 10%;
    /*底部区域-内容主体左侧（left）-宽度占20%*/
    height: 220px;
    /*底部区域-内容主体左侧（left）-高度依旧与底部区域吻合*/
    /* display: inline-block; */
    /*底部区域-内容主体左侧（left）-行内块元素*/
    /* background: url(../images/qrcode_box.png) no-repeat; */
  }

  /* 底部区域主体内容区域左侧LOGO图片配置 */
  .footer .content .left img {
    width: 140px;
    /*底部区域-内容主体左侧（left）-图片设置-图片宽度*/
    height: 145px;
    /*底部区域-内容主体左侧（left）-图片设置-图片宽度*/
    margin: 35px 23px;
    /*底部区域-内容主体左侧（left）-图片设置-图片外边距*/
  }

  /* 底部区域主体内容区域右侧基础配置 */
  .footer .content .right {
    float: left;
    /*底部区域-内容主体右侧（right）-内容设置-向左浮动*/
    width: 60%;
    /*底部区域-内容主体右侧（right）-内容设置-宽度60%*/
    height: 220px;
    /*底部区域-内容主体右侧（right）-内容设置-高度依旧与底部区域吻合*/
  }

  /* 底部区域主体内容区域右侧主体内容配置 */
  .footer .content .right .contents {
    color: #60606d;
    /*底部区域-内容主体右侧（right）-内容设置-设置颜色*/
    margin: 5px 5px 0px 20px;
    /*底部区域-内容主体右侧（right）-内容设置-设置边距*/
  }

  p {
    font-size: 12px;
  }

  .footer .content .right a {
    color: #60606d;
    /*底部区域-内容主体右侧（right）-内容设置-设置颜色*/
  }

  .footer .content .right .site_name {
    color: black;
    /*底部区域-内容主体右侧（right）站点名称-内容设置-设置颜色*/
    margin: 20px 20px 0px 20px;
    /*底部区域-内容主体右侧（right）站点名称-内容设置-设置边距*/
    font-size: 20px;
    /*底部区域-内容主体右侧（right）站点名称-内容设置-设置字号*/
  }
</style>
