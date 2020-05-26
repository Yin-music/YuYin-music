<template>
  <div class="login1">
      <div class="login-head">
        <div class="span1">
        <span>帐号登录</span>
        </div>
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="demo-ruleForm" >
          <el-form-item prop="username">
            <el-input placeholder="用户名" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" show-password v-model="loginForm.password" ></el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button @click="goSignUp()">注册</el-button>
            <el-button type="primary" @click="goLogin()">登录</el-button>
          </div>
        </el-form>

      </div>
  </div>


</template>

<script>
    export default {
      data(){
        return{
          name: "LoginIn",
          loginForm: { // 登录用户名密码
            username: '',
            password: ''
          },
          // rules: {
          //   username: [
          //     { validator: validateName, message: '请输入用户名', trigger: 'blur' }
          //   ],
          //   password: [
          //     { validator: validatePassword, message: '请输入密码', trigger: 'blur' }
          //   ]
          // }
        }
      },

      methods:{
        goSignUp(){

        },
        goLogin(){

        }
      }
    }
</script>

<style scoped>
  .login-head{

    width: 300px;
    height: 680px;
    background-color: white;
    margin-top: 150px;
    margin-left: 600px;
  }
  .span1{
    margin-top: 100px;
    font-size: 30px;
    font-weight: 600;
  }
  .demo-ruleForm{
    margin-top: 50px;

  }
  .login1{
float: right;
    margin-right: 100px;
  }
</style>
