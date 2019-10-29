import client from 'webpack-theme-color-replacer/client'
import forElementUI from 'webpack-theme-color-replacer/forElementUI'
import appConfig from '../../../config/app-config.js'
import { setStore, getStore } from '../../uitl/index.js'
import { global } from '@/config/global'

export let curColor = appConfig.themeColor

// 动态切换自定义主题色
export function changeThemeColor(newColor) {
    console.log('-=-----------newColor---------', newColor)
    var options = {
        newColors: [...forElementUI.getElementUISeries(newColor), '#ff0000', '#ffff00'],
    }
    console.log('-=-----------options---------', options)
    return client.changer.changeColor(options, Promise)
        .then(t => {
            console.log('-=-----------t---------', t)
            curColor = newColor
            setStore('theme_color', curColor)
        })
}

// 初始化自定义、UI组件主题颜色
export function initThemeColor () {
    // const savedColor = getStore('theme_color')
    const savedTheme = getStore('themeValue')
    // if (savedColor) {
    //     curColor = savedColor
    //     changeThemeColor(savedColor)
    // }
    if (savedTheme) {
        global.changeTheme(savedTheme)
    }
}