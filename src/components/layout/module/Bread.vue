<template>
  <div class="mo_bread">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item> -->
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index+'bd'" :to="{ path: item.path }">
        {{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider><i class="el-icon-price-tag"></i></el-divider>
  </div>
</template>
<script>
export default {
  data () {
    return {
      breadList: []  // 路由集合
    }
  },
  mounted () {
    // console.log(this.$router)
    // console.log(this.$route)
    this.getBreadcrumb()
  },
  watch: {
    // monitor changes in breadcrumbs...
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    // 是否是首页，不展示在菜单栏中
    isHome (route) {
      return route.name === 'HOME';
    },
    // 获取面包屑
    getBreadcrumb () {
      // 【问题及描述】let matched = this.$route.matched直接赋值，导致指针指向同一数据，当修改首页主题时，当前this.$route.matched只有子组件路由，所以会出现改变主题后，只出现子组件，菜单等父组件不存在
      // 【解决办法】使用扩展运算符赋值，保证指针指向不同数据
      let matched = [...this.$route.matched]; // 当前父路由和当前路由组成的数组
      console.log('this.$route.matched==========', this.$route);
      // If not the home page...
      if (this.isHome(matched[0])) {
        // matched = [{ path: '/home', meta: { title:'首页'} }].concat(matched) // ??
        matched.splice(0, 1); // intercept the first element...
      }
      this.breadList = matched
    }
  }
}
</script>
<style lang="scss">
</style>
