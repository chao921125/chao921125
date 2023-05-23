<template>
  <el-form action="/User/Rigister" method="POST" @submit.prevent="submit" >
    <div class="registerkuang">
      <div class="registerinkuang" ref="">
        <h1>{{message}}</h1>
        <p><span class="loginred">*</span>用户名：</p>
        <el-input type="text" ref="InputUserRef" v-model="rigister.userstring" placeholder="请输入用户名" name="user"></el-input>
        <br>
        <div id="warn">
          <p for='user' v-if="rigister.userstring"></p>
          <p for='user' class="loginred" v-else>请输入用户名</p>
        </div>

        <p><span class="loginred">*</span>密码：</p>
        <el-input type="password" v-model="rigister.passwordstring" placeholder="请输入密码" name="password"></el-input>
        <div id="warn">
          <p for='password' v-if="rigister.passwordstring"></p>
          <p for='password' class="loginred" v-else>请输入密码</p>
        </div>
        <p><span class="loginred">*</span>确认密码：</p>
        <el-input type="password" name="pwdcomfirm" v-model="rigister.pwdcomfirm" placeholder="再次输入密码"></el-input>
        <div id="warn">
          <p for='password' v-if="rigister.pwdcomfirm"></p>
          <p for='password' class="loginred" v-else>请再次输入密码</p>
        </div>
        <p><span class="loginred">*</span>验证码：</p>
        <el-input type="text" name="cature" placeholder="验证码" v-model="rigister.caturecode" style="width: 50%;">
        </el-input>
        <el-image :src=rigister.catureimg  @click="requestcature()" style="width: 150px;height: 40px;float: right;" v-loading = "loading"></el-image>
        <!-- <el-image style="width: 150px;height: 40px;float: right;">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image> -->
        <div id="warn">
          <p for='password' v-if="rigister.caturecode"></p>
          <p for='password' class="loginred" v-else>请输入验证码</p>
        </div>
        <p><span class="loginred">*</span>邮箱：</p>
        <el-input type="text" name="email" placeholder="输入邮箱" v-model="rigister.emailcode" @keyup.enter="register()"></el-input>
        <div id="warn">
          <p for='user' v-if="rigister.emailcode"></p>
          <p for='user' class="loginred" v-else>请输入邮箱</p>
        </div>
        <br>
        <br>
        <div class="buttonregister">
          <el-button type="primary" @click="register()">注册</el-button>
        </div>


      </div>

    </div>
  </el-form>

</template>

<script>

  export default {
    data() {
      return {
        message: '请您注册',
        rigister: {
          userstring: '',
          passwordstring: '',
          emailcode: '',
          caturecode: '',
          pwdcomfirm: '',
          catureimg: '',
        },
        loading:true,
      }
    },

    methods: {
      requestcature() {
        this.$axios({
          method: 'get',
          url: '/api/User/GetCaptcha',
        }).then(res => {
          if (res.data == '')
            return this.$message.error({
              message: '获取验证码失败',
              showClose: true,
            })
          else
            this.rigister.catureimg = res.data
            this.loading = false
          //console.log(this.catureimg)
        }).catch((err)=>{
          console.log('获取验证码失败')
        })
      },

      async register() {
        let _this = this
        if (_this.rigister.userstring === '' || _this.rigister.passwordstring === ''){
          return this.$message.error({
            message: '请输入用户名',
            showClose: true
          })
        }
        else if (_this.rigister.passwordstring.length < 6){
          return this.$message.error({
            message: '请输入密码或密码长度大于等于6',
            showClose: true
          })
        }
        /* else if(this.passwordstring !== this.pwdcomfirm )
             return  Message.error({message:'两次密码不一致',showClose:true}) */
        else if (_this.rigister.caturecode.length != 4 || _this.rigister.caturecode === ''){
          return this.$message.error({
            message: '请输入4位验证码',
            showClose: true
          })
          }
        else if (_this.rigister.emailcode.length < 5 || _this.rigister.emailcode === ''){
          return this.$message.error({
            message: '邮箱输入至少5位',
            showClose: true
          })
          }
       
        //声明变量newFormData 把需要传的参数定义好,如user:数据  后端接口是python中的表单数据
        //python的jinja2请求体user=12322&password=123456&pwdcomfirm=123456&cature=8567&email=12112334%40qq.com
        //若直接在这个data:{参数:值}传递，不会是表单传回，1、拦截器定义表单它在请求体中 2、在方法中定义变量传参数 3、需要自定义请求头
        var newFormData = new FormData()
        newFormData.append('user', _this.rigister.userstring)
        newFormData.append('password', _this.rigister.passwordstring)
        newFormData.append('email', _this.rigister.emailcode)
        newFormData.append('cature', _this.rigister.caturecode)
        newFormData.append('pwdcomfirm', _this.rigister.pwdcomfirm)

        // var formData = JSON.stringify(_this.rigister)
        await _this.$axios.post('/api/User/Rigister', newFormData).then(res => {
          if (res.data.code == 200){
            this.$message.success({
              message: '账号注册成功 ！',
              showClose: true,
            }),
            setTimeout(() => {
            this.$router.push({
              path: './Home'
            }) //注册成功跳转主页
            }, 1000);
            }
          else if (res.data.code == 401){
            this.$message.error({
              message: res.data.msg,
              showClose: true,
            }),
            this.requestcature()
            }
          else if (res.data.code == 402){
            this.$message.error({
              message: res.data.msg,
              showClose: true,
            })
            }
          else if (res.data.code == 400){
            this.$message.error({
              message: res.data.msg,
              showClose: true,
            })
            }
          else if (res.data.code == 500){
            this.$message.error({
              message: res.data.msg,
              showClose: true,
            })
            }
            else if (res.data.code == 405){
            this.$message.error({
              message: res.data.msg,
              showClose: true,
            })
            }
        }).catch((err) => console.log('登录异常'));
        //Message.success('注册成功')

      }
    },
    //mounted方法 ，页面加载完自动加载区域
    mounted() {
      //自动加载下列方法
      if (this.rigister.catureimg === ''){
        this.requestcature()
      }
      this.$refs.InputUserRef.focus()
    }
  }
</script>

<style scoped>
  #warn {
    font-size: 11px;
    position: absolute;
    width: 300px;
    height: 18px;
    text-align: right;
  }

  .loginred {
    color: red;
  }

  .registerkuang {
    height: 800px;
    width: 400px;
    margin: auto;
    margin-top: 80px;
    padding: 20px;
  }

  .registerinkuang {
    height: 600px;
    width: 300px;
    margin: auto;
    margin-top: 30px;
    padding: 20px;
  }

  .buttonregister {
    text-align: center;
    float: left;
  }
</style>
