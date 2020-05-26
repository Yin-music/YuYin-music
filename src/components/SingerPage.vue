<template>
  <div class="singer-page">
    <div class="singer-header">
      
        <p
          v-for="(item, index) in singerStyle"
          :key="index"
          :class="{active: item.name === activeName}">
          {{item.name}}
        </p>
      
    </div>
    <content-list :contentList="albumDatas"></content-list>
  </div>
</template>
<script>
export default {
  name:'SingerPage',
  data(){
    return{
      singerStyle: [
        {
          name: '全部',
          type: '3'
        },
        {
          name: '男',
          type: '1'
        },
        {
          name: '女',
          type: '0'
        }
      ],
      activeName: '全部',
      albumDatas: []
      }
    }
  }
  
</script>

<style>
div, ul, li{
  box-sizing: border-box;
}

.singer-page {
  margin: 30px 10%;
  padding-bottom: 50px;
  background-color: #ffffff;
}

.singer-header {
  width: 100%;
  padding: 0 40px;
}

p {
  display: inline-block;
  line-height: 40px;
  margin: 40px 20px 15px 20px;
  font-size: 20px;
  font-weight: 400;
  color: #67757f;
  border-bottom: none;
  cursor: pointer;
}

.active {
  color: black;
  font-weight: 600;
  border-bottom: 4px solid black;
}
</style>