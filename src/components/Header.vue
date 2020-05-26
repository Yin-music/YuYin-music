<template>
  <div class="the-header">
    <!--图标-->
    <div class="head-logo" @click="goHomePage">
      <div class="logo-hd">
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-erji"></use>
        </svg> -->
        <img class="icon" src="../assets/icon-logo.jpg">
      </div>
      <span>{{musicName}}</span>
    </div>
    <ul class="navbar" ref="change">
      <li :class="{active: item.name === activeName}" style="float:left;" v-for="item in navMsg" :key="item.path" @click="goPage(item.path)">
        {{item.name}}
      </li>
      <li>
        <div class="head-search">
          <input type="text" style="margin-top:22px;" placeholder="搜索音乐" @keyup.enter="goSearch()" v-model="keywords">
          <div class="search-btn"  @click="goSearch()" >
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </div>
        </div>
      </li>
      <!-- <li :class="{active: item.name === activeName}" v-for="item in loginMsg" :key="item.path"></li> -->
        <li v-for="item in loginMsg" :key="item.path" @click="goPage(item.path)">{{item.name}}</li>
      
    </ul>
    
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      musicName: '余音',
      navMsg: [{
        name: '首页',
        path: '/homePage'
      }, {
        name: '歌单',
        path: '/SongList'
      }, {
        name: '歌手',
        path: '/SingerPage'
      }, {
        name: '我的音乐',
        path: '/MyPage'
      }],
      loginMsg: [{
        name: '登录',
        path: '/LoginIn'
      }, {
        name: '注册',
        path: '/SignUp'
      }],
      menuList: [{
        name: '个人信息',
        path: '/personal-info-page'
      }, {
        name: '修改头像',
        path: '/upLoad-page'
      }, {
        name: '退出',
        path: 0
      }],
      keywords: ''
    }
  },
  methods:{
    goPage:function(x){
      this.$router.push({path:x})
    }
  }
}
</script>

<style scoped>
.the-header {
  background-color: #fefefe;
  width: 100%;
  height: 80px;
  position: relative;
  box-shadow: 0 0 10px black;
}

.head-logo {
  width: 150px;
  line-height: 80px;
  font-size: 28px;
  font-weight: bold;
  margin-left: 90px;
  cursor: pointer;
  float:left;
}
.logo-hd{
  position: absolute;
  top:15px;
  left: 70px;

}

.logo-hd .icon {
  width: 50px;
  height: 50px;
  fill: currentColor;
  color: black;
}

/*nav*/
.navbar {
  box-sizing: border-box;
  height: 80px;
  line-height: 80px;;
}

.navbar li {
  margin: 0 10px;
  padding: 0 10px;
  height: 48px;
  font-size: 25px;
  text-align: center;
  color: #67757f;
  border-bottom: none;
  cursor: pointer;
  list-style-type:none ;
  margin-right: 20px;
  float: left;
}

/*搜索*/
.head-search {
  display: flex;
  border-radius: 5px;
  overflow: hidden;
}

.head-search input {
  height: 36px;
  width: 270px;
  font-size: 16px;
  border: 0;
  text-indent: 10px;
  background-color: #ebeef0;
}

input:focus {
  outline: none;
}
.search-btn{
  background-color: #26a2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 36px;
  cursor: pointer;
  margin-top:22px;
}
.icon{
  width: 0.8em;
  height: 0.8em;
  fill: currentColor;
  color: white;
  font-size: 1.5em;
}

/*用户*/
#user {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin: 15px;
  position: absolute;
  right: 150px;
  display: inline-block;
}

#user:hover {
  cursor: pointer;
}

#user img {
  width: 100%;
}

.menu {
  display: none;
  background-color: #fff;
  width: 150px;
  position: absolute;
  right: 140px;
  top: 90px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  z-index: 100;
  text-align: center;
}

.menu li:hover{
  background-color: #95d2f6;
  color: white;
}

.menu :nth-child(1):before {
  content: " ";
  display: block;/*独占一行*/
  position: absolute;
  right: 45px;
  top: -5px; /*果断的露出上半部分*/
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  transform: rotate(45deg); /*一个正方形倾斜四十五度就是三角了但是要把下半部分藏起来*/
}

.menu :nth-child(1):hover:before{
  background-color: #95d2f6;
}

.menu li {
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.show {
  display: block;
}

.active{
  color: #93d2f8 !important;
  border-bottom: 6px solid #93d2f8 !important;
}
</style>
