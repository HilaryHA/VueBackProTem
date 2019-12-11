// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui' // introducing element-ui and styles...
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import { initThemeColor } from '../src/assets/js/themeColorClient'
import Config from '../config/app-config'

Vue.config.productionTip = false
// Plugin registered on Vue...
Vue.use(Element)

initThemeColor()

/**
 * 全局守卫函数
 * 根据组件名设置网页标题
 */
router.beforeEach((to, from, next) => {
  if(to.name) {
    document.title = `${to.name}-${Config.title}`
  }
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
