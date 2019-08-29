import Vue from 'vue'
import Router from 'vue-router'

const Page1 = () => import(/*webpackChunkName: Page1*/ './views/Page1.vue')
const Page2 = () => import(/*webpackChunkName: Page2*/ './views/Page2.vue')
const Page3 = () => import(/*webpackChunkName: Page3*/ './views/Page3.vue')

Vue.use(Router)

const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: Page1,
    meta: {
      index: 1
    }
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2,
    meta: {
      index: 2
    }
  },
  {
    path: '/page3',
    name: 'page3',
    component: Page3,
    meta: {
      index: 3
    }
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
