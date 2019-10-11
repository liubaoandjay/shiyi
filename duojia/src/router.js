import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import my from './views/my'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/my',
      component:my
    }
  ]
})
