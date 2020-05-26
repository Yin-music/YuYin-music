<template>
  <div class="signUp-page">

    <div class="signUp">
      <div class="signUp-head">
        <span>用户注册</span>
      </div>
      <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="70px" class="demo-ruleForm">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="registerForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input type="password" placeholder="密码"  show-password v-model="registerForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="sex" label="性别">
          <el-radio-group v-model="registerForm.sex">
            <el-radio :label="0">女</el-radio>
            <el-radio :label="1">男</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="phoneNum" label="手机" >
          <el-input  placeholder="手机" v-model="registerForm.phoneNum"></el-input>
        </el-form-item>
        <el-form-item  prop="phoneCode" class="pr">
          <el-input class="inp" placeholder="短信验证码"  v-model="registerForm.phoneCode"></el-input>
          <button @click.prevent="getCode()"  class="code-btn" :disabled="show">
            <span v-show="show" >获取验证码</span>
            <span v-show="!show" class="count">{{count}}</span>
          </button>
        </el-form-item>

        <el-form-item prop="email" label="邮箱">
          <el-input v-model="registerForm.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="birth" label="生日">
          <el-date-picker type="date" placeholder="选择日期" v-model="registerForm.birth" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item prop="introduction" label="签名">
          <el-input  type="textarea" placeholder="签名" v-model="registerForm.introduction" ></el-input>
        </el-form-item>
        <el-form-item prop="location" label="地区">
          <el-select v-model="registerForm.location" placeholder="地区" style="width:100%">
            <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <div class="login-btn">
          <el-button @click="goback()">取消</el-button>
          <el-button type="primary" @click="SignUp()">确定</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import ElementUI from 'element-ui'

  export default {
    name: 'SignUp',
    data () {
      return {
        registerForm: { // 注册
          username: '',
          password: '',
          sex: 0,
          phoneNum: '',
          phoneCode:'',
          email: '',
          birth: '',
          introduction: '',
          location: ''
        },

        rules: {},
        cities: []
      }
    },

    methods: {
      SignUp(){

      },
      goback(){

      },
      getCode(){

      }

      },

  }
</script>

<style  scoped>
  .code-btn{
    position: absolute;
    height: 40px;
    width: 80px;
  }
  .signUp-page{
    width: 100%;
    height: 700px;
  }
  .signUp-head {
    text-align: center;
    margin-bottom: 20px;
    margin-left: 25px;
  ;
    font-size: 30px;
    font-weight: 600;
  }
  .signUp {
    background-color: white;
  margin-top: 30px;
    width: 350px;
    margin-left: 550px;
    padding: 30px 30px;
    float: right;
    margin-right: 300px;
  }
  .pr {
    position: relative;
  }
  .inp{
    width: 200px;
    margin-left: -80px;
  }
</style>
