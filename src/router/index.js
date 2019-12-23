import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import signUp from '../views/signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: '/login',
    component: login
  },
  {
    path: '/sign-up',
    name: '/signUp',
    component: signUp
  }
]

const router = new VueRouter({
  routes
})

export default router
