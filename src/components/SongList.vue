<template>
  <div class="song-list-page">
    <div class="song-list-header">
      <ul>
        <p
          v-for="(item, index) in songStyle"
          :key="index"
          :class="{active: item.name === activeName}"
          @click="handleChangeView(item.name)">
          {{item.name}}
        </p>
      </ul>
    </div>
    <div class="song-content">
      <content-list :contentList="albumDatas"></content-list>
    </div>
  </div>
</template>

<script>
export default {
    name:'SongList',
    data () {
    return {
      songStyle: [
        {
          name: '全部歌单',
          type: 'One'
        },
        {
          name: '华语',
          type: 'Two'
        },
        {
          name: '粤语',
          type: 'Three'
        },
        {
          name: '欧美',
          type: 'Four'
        },
        {
          name: '日韩',
          type: 'Five'
        },
        {
          name: '轻音乐',
          type: 'Six'
        },
        {
          name: 'BGM',
          type: 'Seven'
        },
        {
          name: '乐器',
          type: 'Eight'
        }
      ],
      activeName: '全部歌单'
    }
  }
}
</script>
    
<style>
.song-list-page {
  margin: 30px 150px;
  padding-bottom: 50px;
  min-width: 800px;
  background-color: #ffffff;
}

.song-list-header {
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