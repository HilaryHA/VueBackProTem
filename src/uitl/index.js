/**
 * @author Hilary
 * @date 2019/10/10
 * @description 自定义封装的函数
 */

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)   //将 JavaScript 值转换为 JSON 字符串  `JSON.stringify(str, null, 4)` 表示使用四个空格缩进
    }
    window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return
    var value = window.localStorage.getItem(name)
    if (value !== null) {
        try {
            value = JSON.parse(value)   //将 JSON 字符串转换为对象
        } catch (e) {
            value = value
        }
    }
    return value
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return
    window.localStorage.removeItem(name)
}