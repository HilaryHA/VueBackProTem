// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui' // introducing element-ui and styles...
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import { initThemeColor } from '../src/assets/js/themeColorClient'

Vue.config.productionTip = false
// Plugin registered on Vue...
Vue.use(Element)

initThemeColor()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
