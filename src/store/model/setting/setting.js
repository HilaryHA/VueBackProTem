/**
 * @author Hilary
 * @date 2019/10/10
 * @description 将修改的主题名存储到Vuex中
 */
import { global } from '@/config/global';
const types = {
  CHANGE_SETTING: 'CHANGE_SETTING',
  SET_THEMEINFO: 'SET_THEMEINFO'
}

const state = {
  nowThemeInfo: 'default-theme',  // now theme...
  themes: ['default', 'green', 'orange']  // all theme...
}

const getters = {
  nowThemeInfo: state => state.nowThemeInfo,
  themes: state => state.themes
}

const mutations = {
  [types.CHANGE_SETTING](state, { key, value }) {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  [types.SET_THEMEINFO](state, theme) {
    // 修改自定义样式
    state.nowThemeInfo = theme + '-theme'
    // 修改UI组件主题样式
    global.changeTheme(theme)
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit(types.CHANGE_SETTING, data)
  },
  setThemeInfo({ commit }, theme) {
    commit(types.SET_THEMEINFO, theme)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
