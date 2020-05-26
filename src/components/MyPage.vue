<template>
  <div class="mypage">
      <div class="album-bg"></div>
    
        <div class="album-img">
          <img src="..\assets\logo.png">
        </div>
        <div class="user_ui">
        <!-- 展示个人资料页 -->
       
          <p>昵称： {{username}}</p>
          <p>性别： {{userSex}}</p>
          <p>生日： {{birth}}</p>
          <p>地区： {{location}}</p>
        
      </div>
    
    <!-- 展示个人资料页个性签名 -->
    <div class="album-content"  style="background-color:rgb(131, 212, 76)">
      <div class="album-title">个性签名: {{introduction}}</div>
    </div>
    <div class="album-list">
      <el-row class="ttt">
        <el-col :span="24"><div class="grid-content bg-purple-dark">我的收藏</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple">qqq</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">qqq</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">qqq</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">qqq</div></el-col>
      </el-row>
    </div>
    </div>
    
    
  
</template>

<script>
import axios from 'axios'

export default {
    name: 'MyPage',
    data () {
    return {
      username: '梁西华',
      userSex:'♂',
      birth:'1998-12-25',
      location:'陕西-西安',
      introduction:"这是一个花花绿绿的世界。",
      tableData: [{
          date: '2016-05-03',
          name: '梁西华',
          address: '风儿在吹'
        }]
    }
    
  }
}
</script>

<style>
.ttt{
  font-size: 25px;
  font-weight: 1000;
  margin-top: 15px;
  border-bottom: 1px #000000 solid;
}
.album-list{
  width: 1020px;
  height: 328px;
  background-color: #FFFFFF;
  float: right;
  margin-right: 100px;
  margin-top: -175px;
  border-radius: 1%;
}
    .mypage{
    width: 100%;
    height: 780px;
    background-color: rgb(202, 212, 219);
    }
    .album-title{
      color: #000000;
      font-size: 25px;
      font-weight: 1000;
      position: absolute;
      top: 335px;
      left: 430px;
    }
p {
  color: black;
  font-size: 18px;
  text-align: left;;
}
.user_ui{
  width: 300px;
  height: 150px;
  float: left;
  margin-top: 145px;
  margin-left: 115px;
}
.album-bg {
  width: 100%;
  height: 200px;
  background-color: #93d2f8;
}
/*歌单左侧*/
.album-slide {
  float: left;
  width: 400px;
}

/*歌单图像*/
.album-img {
  height: 200px;
  width: 200px;
  display: inline-block;
  position: relative;
  top:-105px;
  left: -770px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid white;
  
}

.album-img img {
  width: 100%;
}
.song-item {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    align-items: center;
    text-overflow:ellipsis;
    white-space: nowrap;
    
  }
  .el-table .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: rgb(18, 184, 175);
  }

</style>