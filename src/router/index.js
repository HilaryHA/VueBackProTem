import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Layout from '@/components/layout/index'

Vue.use(Router)

/**
 * noShowMenu : Indicates that it does not appear in the menu bar...
 */
export default new Router({
  mode: 'history', // Modify the ugly 'hash' to 'history'...
  routes: [
    {
      path: '/',
      redirect: 'login',
      hidden: true
      // component: HelloWorld
    },
    {
      path: '/login',
      name: '登录',
      component: () => import('@/components/views/login/index.vue'),
      hidden: true
    },
    {
      path: '/mo',
      name: 'HOME',
      component: Layout,
      redirect: '/mo/home',
      meta: {title: 'HOME', noShowMenu: true},
      children : [
        {
          path: '/mo/home',
          component: () => import('@/components/views/home/index.vue'),
          name: '首页',
          meta: {title: '首页', icon: 'sunset'}
        }
      ]
    },
    {
      path: '/user',
      name: '用户信息',
      component: Layout,
      redirect: '/user/info',
      meta: {title: '用户信息', icon: 'postcard'},
      children : [
        {
          path: '/user/info',
          component: () => import('@/components/views/user/index.vue'),
          name: '用户资料',
          meta: {title: '用户资料', icon: 'user'}
        },
        {
          path: '/user/log',
          component: () => import('@/components/views/log/index.vue'),
          name: '用户日志',
          meta: {title: '用户日志', icon: 'document'}
        }
      ]
    }
  ]
})
