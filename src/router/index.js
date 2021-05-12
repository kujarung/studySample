import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DB from '../views/DB.vue'
import NoticeLayout from '../views/NoticeLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notice',
    name: 'Notice',
    component: NoticeLayout,
    children: [
      {
        path: '/notice',
        name: '공지_리스트',
        component: () => import('../views/Notice.vue'),
      },
      {
        path: '/notice/:id',
        name: '공지_디테일',
        component: () => import('../views/NoticeDetail.vue'),
      }
    ]
  },
  {
    path: '/db',
    name: 'DB',
    component: DB
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
