<template>
  <div>
    <div class="top-title">
      <span>评论</span>
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题:" prop="title">
        <el-input type="text" ref="InputTitleRef" v-model="ruleForm.title" autocomplete="off" style="width:100%;"
          placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="发布内容" prop="content">
        <el-input type="textarea" :rows="3" :autosize="{ minRows: 3, maxRows: 5}" v-model="ruleForm.content"
          autocomplete="off" style="width:100%;" placeholder="请输入内容"></el-input>
      </el-form-item>
      <!-- <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
  
</template>

<script>
  import {
    Message
  } from 'element-ui'
  import event from "../../../static/config/event.js"
  export default {
    data() {
      // var checkAge = (rule, value, callback) => {
      //   if (!value) {
      //     return callback(new Error('年龄不能为空'));
      //   }
      //   setTimeout(() => {
      //     if (!Number.isInteger(value)) {
      //       callback(new Error('请输入数字值'));
      //     } else {
      //       if (value < 18) {
      //         callback(new Error('必须年满18岁'));
      //       } else {
      //         callback();
      //       }
      //     }
      //   }, 1000);
      // };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入标题'));
        } else {
          if (this.ruleForm.title <= 2) {
            callback(new Error('标题个数必须大于两位'));
            // this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
        // else {
        //   if (this.ruleForm.checkPass >= 2) {

        //     this.$refs.ruleForm.validateField('checkPass');
        //   }
        //   callback();
        // }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入发布内容'));
        } else if (value === this.ruleForm.title) {
          callback(new Error('发布内容不能与标题相同！'));
        } else {
          callback();
        }
      };
      return {
        // 生成
        ruleForm: {
          title: '',
          content: '',
          // age: ''
        },
        // 规则判断输入是否合法element ui 中的rules 规则 :rules="bind" 绑定
        rules: {
          title: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          content: [{
            validator: validatePass2,
            trigger: 'blur'
          }],
          // age: [{
          //   validator: checkAge,
          //   trigger: 'blur'
          // }]
        }
      };
    },
    mounted() {
      //获取焦点、使用refs方法
      this.$refs.InputTitleRef.focus()
    },
    methods: {
      redirect() {
        this.$router.push({
          path: './login'
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          let form = null;
          let _this = this;
          form = new FormData();
          form.append('title', _this.ruleForm.title);
          form.append('content', _this.ruleForm.content);
          if (valid) {
            this.$axios({
              method: 'post',
              url: '/api/comment/Comment',
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              data: form
            }).then(res => {
              if (res.data.code == 401)
                Message.error({
                  message: res.data.msg,
                  showClose: true
                }),
                setTimeout(this.$router.push({
                  path: './login'
                }), 1000)
              else if (res.data.code == 200)
                Message.success({
                  message: res.data.msg,
                  showClose: true
                }),
                event.$emit("commentclick", res.data.msg)
              // this.s(formName)
              else
                Message.error({
                  message: res.data.msg,
                  showClose: true
                })

            })
            // alert('submit!');


          } else {
            // console.log('error submit!!');
            Message.error({
              message: '请输入合法内容！',
              showClose: true,
            });
            return false
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
.top-title{
  margin-bottom: 2rem;
}
.top-title > span {
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
  color: #252933;
}
</style>
