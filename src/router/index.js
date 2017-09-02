import Vue from 'vue'
import Router from 'vue-router'
import Reactive from '@/components/Reactive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Reactive',
      component: Reactive
    }
  ]
})
