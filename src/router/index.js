import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'flow',
      component: () => import('../components/newFlow/newFlow.vue')
    }
  ]
})
