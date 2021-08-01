import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name : 'login',
      component: () => import('../components/login.vue')
    },
    {
      path: '/flow',
      name: 'flow',
      component: () => import('../components/newFlow/newFlow.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../components/newFlow/index.vue')
    }
  ]
})
