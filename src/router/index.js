import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Author from '@/components/Author'
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
      path: '/0',
      name: '0',
      component: Home
    },
    {
      path: '/1',
      name: '1',
      component: Author
    },
    {
      path: '/2',
      name: '2',
      component: Two
    }
  ]
})
