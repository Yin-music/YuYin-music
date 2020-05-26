<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <PlayBar style="margin-bottom:10px;"></PlayBar>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PlayBar from '@/components/PlayBar'
export default {
  name: 'App',
  components:{
    Header,
    Footer,
    PlayBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
