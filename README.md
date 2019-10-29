# vueBackProTem

> This is Vue background project template, This desk management system, including the basic page layout, switching theme style（这是vue后台项目模板，此后台管理系统，包含基础页面布局、切换主题样式等）


****
	
|Author|窩窩头:panda_face:|
|---|---
|E-mail|hilaryha@qq.com


****
## 目录
* [项目环境](#项目环境)
* [版本说明](#版本说明)
* [文件说明](#文件说明)
* [实现原理](#实现原理)

  
*****
### 项目环境
-----
1. 由Vue组成:  
  【前端】页面运用ElementUI组件和Vue进行展示 

2. 项目说明
  此项目属于Vue后台项目模板，包含基础菜单、导航的布局；主题换肤；网页标题根据组件名变化等功能

*****
### 版本说明
-----
1. Node.js == v10.13.0
2. Npm == 6.10.3
3. Vue == 2.5.2
4. vue-router == 3.0.1
5. element-ui == ^2.11.1

  
*****
### 文件说明
------
1. 【src/main.js】 入口文件，每次刷新页面都会先加载此文件
2. 【src/App.vue】 主插件，所有子组件通过<router-view/>进入，需要在main.js中引入
3. 【src/router/index.js】 路由文件，所有静态组件路由在此文件中定义
4. 【src/components】 组件目录，所有组件在此文件夹下定义
    1. layout目录：布局组件
    2. public目录：公共组件（包含修改样式组件Setting.vue）
    3. views目录：菜单子组件
5. 【运行顺序，vueBackProTem目录下】 
    1. 下载安装  `npm install`
    2. 启动服务  `npm run dev`


*****
###  实现原理
-------
1. 实现过程遇到一些问题：打包生产环境换肤失败、'Uncaught RangeError: Maximum call stack size exceeded'问题、刷新切换的主题失效、首页换肤问题、项目标题根据组件名变化等
2. 参考[Vue+ElementUI 切换ElementUI主题+自定义颜色的修改（指定几种颜色的换肤）](https://blog.csdn.net/weixin_42512937/article/details/102777231 "Vue+ElementUI切换主题")



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
