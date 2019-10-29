/**
 * @author Hilary
 * @date 2019/10/10
 * @description 初始化UI组件、自定义样式的函数
 */
import { getStore } from '../../uitl/index.js'
import { global } from '@/config/global'

// 初始化自定义、UI组件主题颜色
export function initThemeColor() {
    const savedTheme = getStore('themeValue')
    if (savedTheme) {
        global.changeTheme(savedTheme)
    }
}