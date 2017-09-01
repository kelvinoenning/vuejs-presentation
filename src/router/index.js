import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import One from '@/components/One'
import Two from '@/components/Two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/1',
      name: '1',
      component: One
    },
    {
      path: '/2',
      name: 'Two',
      component: Two
    }
  ]
})
