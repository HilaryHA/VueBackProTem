import Vue from 'vue'
import Vuex from 'vuex'
import setting from './model/setting'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    setting
  },
  plugins: [createPersistedState()] // stored by default in localStorage...
})
