<template>
  <div>
    <div >
      <p>{{ message }}</p>
      <div class="lunbostyle">
        <lunbo></lunbo>
      </div>
      <div class="picturestyle">
        <picturetext @detail_fun="showdetail()"></picturetext>
      </div>
    </div>

    <!-- <div>
        <sourcedetail></sourcedetail>
    </div> -->
  </div>
</template>

<script>
import textselect from "./Appcomponets/textselect.vue";
// import sourcedetail from "./sourcedetail.vue"
import lunbo from "./lunbo.vue";
import login from "./login.vue";
import picturetext from "./Appcomponets/picturetext.vue";
export default {
  name: "Home",
  components: {
    login,
    lunbo,
    textselect,
    picturetext,
    // sourcedetail,
  },

  data() {
    return {
      message: "",
      show_detail: true,
     
    };
  },

  methods: {
    showdetail(val){
      let _this = this;
        _this.show_detail = false
    },
    /* login(e){
            console.log(e)

            if(this.userstring  ==='')
                return alert('请输入账户')

            else if(this.passwordstring==='')
                return alert('请输入密码')
            else
                console.log('点击了登陆')
                console.log('success code:200')
                console.log(`用户名：${this.userstring}`)
                console.log(`密码：${this.passwordstring}`)

        }, */
   

    add(n) {
      this.shuzi += n;
    },
    created() {
        
    },

    //http://www.liulongbin.top:3006/api/getbooks

    /* created(){  此结构为axios请求方法 固定
            this.$axios.get("http://www.liulongbin.top:3006/api/getbooks",{"id":0}).then(res=>{
            console.log(res.data);
        }); */
  },
};
</script>

<style scoped>
.picturestyle {
  margin: 0px auto;
  height: 100%;
  width: 90%;
  border-top: 1px solid gainsboro;
}
.lunbostyle {
  width: 90%;
  margin: 10px auto;
}
</style>
