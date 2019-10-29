import { global } from '@/config/global';
const types = {
//   SET_MENU_BG: 'SET_MENU_BG', // setting menu background
//   SET_HOVER_CL: 'SET_HOVER_CL', // setting menuitem hover color
//   SET_ACTIVE_CL: 'SET_ACTIVE_CL', // setting menuitem active color
    CHANGE_SETTING: 'CHANGE_SETTING',
    SET_THEMEINFO: 'SET_THEMEINFO'
}

const state = {
  // menuBackground: variables.menuBackground,
  // hoverColor: variables.hoverColor,
  // activeColor: variables.activeColor,
  nowThemeInfo: 'default-theme', // now theme...
  themes: ['default', 'green', 'orange'] // all theme...
}

const getters = {
  // menuBackground: state => state.menuBackground,
  // hoverColor: state => state.hoverColor,
  // activeColor: state => state.activeColor,
  nowThemeInfo: state => state.nowThemeInfo,
  themes: state => state.themes
}

const mutations = {
  [types.CHANGE_SETTING] (state, { key, value }) {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  [types.SET_THEMEINFO] (state, theme) {
    state.nowThemeInfo = theme + '-theme' // 修改自定义样式
    
    global.changeTheme(theme) // 修改UI组件主题样式
    console.log(this);
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
