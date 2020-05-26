<template>
<!--  轮播-->
  <div class="the-home">
    <div class="tt">
    <el-row :gutter="0">
      <el-carousel :interval="2000" height="350px" type="card" >
        <el-carousel-item v-for="item in dataimg" :key="item">
          <div class="grid">
              <img :src="item.src">
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-row>
    </div>

    <div class="section" v-for="(item, index) in songsList" :key="index">
      <div class="section-title">{{item.name}}</div>
      <content-list :contentList="item.list"></content-list>
    </div>
  </div>
</template>

<script>

  // import  axios from 'axios';
  export default {
    name:'HomePage',
    data () {
      return {
        songsList: [
          {name: '歌单', list: []},
          {name: '歌手', list: []}
        ],	dataimg: [{
          src: require('@/assets/img/swiper/blur-1851426_640.jpg'),
        },
          {
            src: require('@/assets/img/swiper/concert-768722_640.jpg'),
          },
          {
            src: require('@/assets/img/swiper/boy-984293_640.jpg'),
          },
          {
            src: require('@/assets/img/swiper/ipad-605439_640.jpg'),
          },
          {
            src: require('@/assets/img/swiper/microphone-1209816_640.jpg'),
          },
          {
            src: require('@/assets/img/swiper/music-notes-3221097_640.jpg'),
          },
          {
            src: require('@/assets/img/swiper/piano-1655558_640.jpg'),
          },
          {
            src: require('@/assets/img/swiper/turntable-1337986_640.jpg'),
          }
        ]

      }
    },
    // created () {
    //   // 获取歌单列表
    //   this.getSongList()
    //   // 获取歌手列表
    //   this.getSinger()
    // },
    // methods:{
    //   getSongList:function(){
    //     axios.get("/api/songList/findAll").then(function (res) {
    //       this.songsList[0].list = res.slice(0, 10)
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //   },
    //   getSinger () {
    //     axios.get("/api/singer/findAll").then(function (res){
    //       this.songsList[1].list = res.slice(0, 10)
    //     })
    //       .catch(err => {
    //         console.log(err)
    //       })
    //   }
    // }
  }
</script>

<style>
  .the-home{
    height: 700px;
    background-color: #e6ecf0;
    padding-top: 40px;
  }
  .section {
    width: 100%;
    margin-top: 20px;
    padding: 0 120px 50px 120px;
    background-color: #ffffff;
    box-sizing: border-box;
  }
  .section-title {
    height: 60px;
    line-height: 60px;
    padding-top: 10px;
    font-size: 28px;
    font-weight: 500;
    text-align: center;
    color: #000000;
    box-sizing: border-box;
  }
  .grid{
    /* padding-top: 80px; */
    height: 300px;

  }
/* .tt{
  margin-top: -55px;
  background-color: #a9dbf9;
  height: 400px;
} */
  image{
    width: 100%;
  }



</style>

