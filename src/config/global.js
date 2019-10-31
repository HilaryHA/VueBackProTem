/**
 * @author Hilary
 * @date 2019/08/28
 * @description 切换自定义主题函数（注意区别开发、生产环境）
 */
import config from '../../config';
import themeArray from './themeArray';
import { setStore } from '../uitl/index.js';

export const global = {
    // 静态资源路径
    staticPath: process.env.NODE_ENV !== 'production' ? config.dev.staticPath : config.build.staticPath, // staticPath: '/static' 
    /**
     * 切换主题函数
     * @param {String} themeValue  主题名
     */
    changeTheme: function (themeValue) {
        // console.log('切换主题颜色值：', process.env.NODE_ENV);
        // console.log('切换主题颜色值2：', themeValue, '-----', this.staticPath);
        let that = this;
        // 需要移到单独的文件存放
        let cssArray = themeArray;
        clearLink();
        for (let i = 0, len = cssArray.length; i < len; i++) {
            let itemPath = that.staticPath + '/theme/' + themeValue + '/' + cssArray[i].toLowerCase() + '.css';
            loadCss(itemPath)
        };
        // 刷新失效，存储localStorage中
        setStore("themeValue", themeValue);
        /**
         * 增加link标签
         * @param {*} path 
         */
        function loadCss(path) {
            let head = document.getElementsByTagName('head')[0];
            let link = document.createElement('link');
            link.href = path;
            link.rel = 'stylesheet';
            link.setAttribute('type', 'text/css');
            head.appendChild(link);
        }
        /**
         * 清除所有有关theme的标签
         */
        function clearLink() {
            let allLink = document.getElementsByTagName('link');
            removeChildNode(allLink, 'href');
        }
        /**
         * 删除所有指定标签节点
         * @param {*} arr 当前标签节点数组
         * @param {*} targetAttr 节点对应的属性，保证该属性有值
         * [注意] 由于根据变化数组的长度，决定循环语句，所以通过递归保证删除所有元素
         *        由于生产环境下，所有组件的样式会生成一个css文件，以免删除，添加删除条件
         */
        function removeChildNode(arr, targetAttr) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] && arr[i].getAttribute(targetAttr) !== null && arr[i].getAttribute(targetAttr).includes('theme')) {
                    arr[i].parentNode.removeChild(arr[i]);
                }
            }
            if (arr.length) {
                // 防止死循环
                let tfalg = false;
                for (let j = 0; j < arr.length; j++) {
                    // arr.item(j) 等同于 arr[j]， 因为arr是HTMLCollection数组，属性__proto__只包含三个属性：item、length、namedItem
                    if (arr.item(j) && arr.item(j).getAttribute(targetAttr) !== null && arr.item(j).getAttribute(targetAttr).includes('theme')) {
                        tfalg = true;
                    }
                }
                if (tfalg) {
                    removeChildNode(arr, targetAttr);
                }
            }
        }
    }
}