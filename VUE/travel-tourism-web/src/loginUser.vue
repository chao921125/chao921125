<template>
  <div >
    <el-row>
      <el-col>
         <!-- 分界线-->
         <el-divider>
            <span style=" font-size: 25px; font-weight: bold;">全程旅游网会员登录</span>
         </el-divider>

        <el-form :model="ruleForm"  :rules="rules" ref="ruleForm"  class="login-box">
           <el-form-item  prop="username">
            <el-input prefix-icon="el-icon-user"  placeholder="请输入账号" v-model="ruleForm.username" autocomplete="off" clearable>
            </el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input prefix-icon="el-icon-unlock" placeholder="请输入密码" type="password" v-model="ruleForm.password" autocomplete="off" show-password clearable></el-input>
          </el-form-item>

         <!-- <el-form-item></el-form-item> -->

          <el-form-item>
            <el-input placeholder="请输入验证码" v-model="ruleForm.code" style="width: 120px;"></el-input>
            <img :src=ruleForm.url />
            <el-button type="text"  @click="newCode">点击刷新</el-button>
          </el-form-item>

          <!--设置登录按钮-->
          <el-form-item>
            <el-button type="primary" style="width: 250px;" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>



           <!-- 底部按键-->
          <el-form-item>
             <el-button type="text"  size="small" style="float: left; ">忘记密码</el-button>
             <el-button type="text"  @click="register" size="small" style="float: right;">立即注册</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'loginUser',
    data() {
      var validateUsername = (rule,value,callback)=>{
        if(value ===''){
          return callback(new Error("账号不能为空"));
        }else{
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          password: '',
          code:'',
          url:'http://localhost:8989/VCodeController/VCode',
        },
        rules: {
          username: [{
            validator: validateUsername,
            trigger: 'blur'
          }],
        password: [{
          validator: validatePassword,
          trigger: 'blur'
        }],
        message:false
        }
      };
    },
    methods: {
      //点击刷新验证码
      newCode() {
        var num = Math.ceil(Math.random()*10);//生成一个随机数（防止缓存）
        this.ruleForm.url = "/VCodeController/VCode?num="+num;
        
      },
      //跳转至注册页面
      register() {
         console.log("用户跳转至注册页面");
         this.$router.push({path:"/register"});
      },
      //提交表单，获取表单中的数据
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             //发送表单获取的数据参数请求，对比数据库是否存在一致的信息
             this.$axios.get("/userController/login",{
               params:{
                 //携带参数发送请求
                 user_name:this.ruleForm.username,
                 user_pwd:this.ruleForm.password
               }
             }).then(res=>{
                //获取返回的结果，如果为假，则不可以登录
                this.message = res.data;
                console.log(this.message)
                if(this.message == false){
                 this.$message.error('账号密码不正确');
                  return false;
                }else{//如果为真，则登录成功
                    this.$message({
                    message: '登陆成功',
                    type: 'success',
                  });
                  this.$router.push({path:"/homepage"})
                  }
             });

            } else {
                this.$message.error('请输入正确的账号密码！！！');
                return false;
              }
          });
      }

    }
  }
</script>

<style scoped>
    .login-box {
      border: 1px solid #DCDFE6;
      width: 350px;
      margin: 0 auto;
      margin-top: 100px;
      padding: 50px 50px 10px 50px;
      border-radius: 5px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      box-shadow: 0 0 25px #909399;
    }


</style>
