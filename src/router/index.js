import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomePage from '@/components/HomePage'
import SongWordsPage from '@/components/SongWordsPage'
import PlayBar from '@/components/PlayBar'
import SearchPage from '@/components/SearchPage'
import SongList from '@/components/SongList'
import SingerPage from '@/components/SingerPage'
import MyPage from '@/components/MyPage'
import SignUp from '@/components/SignUp'
import LoginIn from '@/components/LoginIn'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/aa',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },{
    //   path:'/',
    //   name:'Header',
    //   component:Header
    // },
    {
      path:'/Footer',
      name:'Footer',
      component:Footer,
    },{
      path:'/homePage',
      name:'HomePage',
      component:HomePage
    },{
      path:'/SongWordsPage',
      name:'SongWordsPage',
      component:SongWordsPage
    },
    {
      path:'/PlayBar',
      name:'PlayBar',
      component:PlayBar
    },
    {
      path:'/SearchPage',
      name:'SearchPage',
      component:SearchPage
    },{
      path:'/SongList',
      name:'SongList',
      component:SongList
    },{
      path:'/SingerPage',
      name:'SingerPage',
      component:SingerPage
    },{
      path:'/MyPage',
      name:'MyPage',
      component:MyPage
    },{
      path:'/SignUp',
      name:'SignUp',
      component:SignUp
    },{
      path:'/LoginIn',
      name:'LoginIn',
      component:LoginIn
    }

  ]
})
