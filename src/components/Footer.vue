<template>
  <div class="the-footer">
    <span v-for="(item, index) in list" :key="index">
      {{item}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      list: [
        `关于 | 帮助 | 条款 | 反馈`,
        `Copyright © 2019`,
        `Designed by Yin-Hongwei`
      ]
    }
  }
}
</script>

<style scoped>
.the-footer{
  width: 100%;
  background-color: white;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.the-footer span {
  height: 30px;
  list-style-type: none;
}
</style>
