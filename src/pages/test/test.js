// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Test from './test.vue'
import router from './router/test.js'
Vue.config.productionTip = false
console.log(Test)
/* eslint-disable no-new */
new Vue({
  el: '#test',
  router,
  template: '<Test />',
  components: { Test }
})
