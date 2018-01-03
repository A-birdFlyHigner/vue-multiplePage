import Vue from 'vue'
import Router from 'vue-router'
import TestComponent from '@/components/TestComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'TestComponent',
      component: TestComponent
    }
  ]
})
