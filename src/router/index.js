import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/component1'
import getcomp from '@/components/getcomp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/getcomp',
      name: 'getcomp',
      component: getcomp
    }
  ]
})
