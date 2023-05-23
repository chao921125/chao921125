<template>
  <div >
    <el-row>
      <el-col>
         <!-- 分界线-->
         <el-divider>
            <span style=" font-size: 25px; font-weight: bold;">个人会员注册</span>
         </el-divider>

        <el-form :model="ruleForm"  :rules="rules" ref="ruleForm"  class="register-box">
           <el-form-item  prop="username">
            <el-input prefix-icon="el-icon-user"  placeholder="请输入账号" v-model="ruleForm.username" autocomplete="off" clearable></el-input>
          </el-form-item>
          <el-form-item  prop="password1">
            <el-input prefix-icon="el-icon-unlock" placeholder="登录密码"  maxlength="12" type="password" v-model="ruleForm.password1" autocomplete="off" show-password clearable></el-input>
          </el-form-item>
          <el-form-item  prop="password2">
            <el-input prefix-icon="el-icon-unlock" placeholder="确认密码"  maxlength="12" type="password" v-model="ruleForm.password2" autocomplete="off" show-password clearable></el-input>
          </el-form-item>
          <el-form-item  prop="telephone">
            <el-input prefix-icon="el-icon-mobile-phone"  placeholder="请输入手机号" v-model="ruleForm.telephone" autocomplete="off" clearable></el-input>
          </el-form-item>
          <el-form-item  prop="email">
            <el-input prefix-icon="el-icon-message"  placeholder="请输入邮箱" v-model="ruleForm.email" autocomplete="off" clearable></el-input>
          </el-form-item>

          <!--设置登录按钮-->
          <el-form-item>
            <el-button type="primary" style="width: 250px;" @click="submitForm('ruleForm')">提交注册</el-button>
          </el-form-item>

          <el-form-item>
             <el-button type="text"  @click="returnLogin" size="small" >返回登录</el-button>
          </el-form-item>

        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      var validateUsername = (rule,value,callback)=>{
        if(value ===''){
          return callback(new Error("账号不能为空"));
        }else{
          callback();
        }
      };
      var validatePassword1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if(this.ruleForm.password2 !== ''){
               this.$refs.ruleForm.validateField('password2');
          }
            callback();
        }
      };
      var validatePassword2 = (rule, value, callback) => {
        if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.password1) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
         }
      };
      var telephone = (rule, value, callback) => {
        if(value ===''){
          return callback(new Error("手机号不能为空"));
        }else{
          callback();
        }
      };
      var email = (rule, value, callback) => {
         if(value ===''){
           return callback(new Error("邮箱不能为空"));
         }else{
           callback();
         }
      };

      return {
        message:false,

        ruleForm: {
          username: '',
          password1: '',
          password2: '',
          telephone:'',
          email:'',

        },
        rules: {
          username: [{
            validator: validateUsername,
            trigger: 'blur'
          }],
          password1: [{
            validator: validatePassword1,
            trigger: 'blur'
          }],
          password2: [{
             validator: validatePassword2,
             trigger: 'blur'
          }],
          telephone: [{
             validator: telephone,
             trigger: 'blur'
          }],
          email: [{
             validator: email,
             trigger: 'blur'
          }],
        }
      };
    },


    methods: {
      //返回登录页面
      returnLogin() {
        console.log("返回登录页")
         this.$router.push({path:"/loginUser"});
      },
      //提交表单，获取表单中的数据
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             // 发送表单获取的数据参数请求
             this.$axios.get("/userController/register",{
               params:{
                 //携带参数发送请求
                 user_name:this.ruleForm.username,
                 user_pwd:this.ruleForm.password1,
                 user_tel:this.ruleForm.telephone,
                 user_email:this.ruleForm.email,
               }
             }).then(res=>{
                //获取返回的结果，如果为假，则不可以登录
                this.message = res.data;
                console.log(this.message)
                if(this.message == false){
                 this.$message.error('注册失败，请重新输入');
                  return false;
                }else{//如果为真，则登录成功
                    this.$message({
                    message: '注册成功，正在为您跳转至登录页...',
                    type: 'success',
                  });
                   this.$router.push({path:"/loginUser"})
                  }
             });

            } else {
                this.$message.error('注册失败，请重新输入');
                return false;
              }
          });
      }

    }
  }
</script>

<style scoped>
    .register-box {
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
