import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/Login'
import Channel from '@/views/channel/Channel'
import Video from '@/views/video/Video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/channel'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/channel/:id', //必须小写
      name: 'channel', //不是必须写
      component: Channel
    },
    {
      path: '/video', //必须小写
      name: 'video', //不是必须写
      component: Video
    }

  ]
})
