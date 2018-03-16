import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/landing/Home'
import Signup from '@/components/pages/landing/Signup'
import Login from '@/components/pages/landing/Login'
import request from '@/utils/request'
Vue.use(Router)

let checkLoggedIn = (next) => {
  // let opts = {
  //   method: 'post',
  //   url: 'checkLoggedIn',
  // }
  // request.callInternal(opts).then(result => {
  //   next()
  // }).catch(err => {
  //   next('login')
  // })
  next()
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter(to, from, next) {
        checkLoggedIn(next)
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      beforeEnter(to, from, next) {
        next()
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter(to, from, next) {
        next()
      }
    },
  ]
})
