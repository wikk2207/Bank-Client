import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: function () {
      return import('../views/Login.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import( '../views/Registration.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
