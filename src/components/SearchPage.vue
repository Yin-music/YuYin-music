<template>
  <div class="search">
      <div class="bor">
        <el-row class="tit">
          <el-col :span="12"><div class="grid-content bg-purple">歌曲</div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light">歌单</div></el-col>
        </el-row>
        <el-row class="inf">
          <el-col :span="6"><div class="grid-content bg-purple">序号</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light">歌曲名</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">艺人</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light">专辑</div></el-col>
        </el-row>

      </div>
  </div>
</template>

<script>
export default {
  name:'SearchPage'
}
</script>

<style>
.search{
    width: 100%;
    background-color: #e6ecf0;
    height: 680px;
    padding-top: 90px;;
}
.bor{
  background-color: #ffffff;
  width: 70%;
  height: 550px;
  margin-left: 15%;
}
.tit{
  font-size: 25px;
  font-weight: 800;
  line-height: 100px;
  border-bottom: #000000 1px solid;
}
.inf{
  margin-top: 10px;
}
</style>