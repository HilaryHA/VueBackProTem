<template>
  <div class="mo_bread">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(item, index) in breadList"
        :key="index+'bd'"
        :to="{ path: item.path }"
      >{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider>
      <i class="el-icon-price-tag"></i>
    </el-divider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      breadList: [] // 路由集合
    };
  },
  mounted() {
    this.getBreadcrumb();
  },
  watch: {
    // monitor changes in breadcrumbs...
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    // 是否是首页，不展示在菜单栏中
    isHome(route) {
      return route.name === "HOME";
    },
    // 获取面包屑
    getBreadcrumb() {
      // 【问题及描述】let matched = this.$route.matched直接赋值，导致指针指向同一数据，当修改首页主题时，当前this.$route.matched只有子组件路由，所以会出现改变主题后，只出现子组件，菜单等父组件不存在
      // 【解决办法】使用扩展运算符赋值，保证指针指向不同数据
      //  matched数组包含：当前父路由、当前路由元素
      // let matched = this.$route.matched; // 注意浅拷贝问题，下面是ES6的深拷贝

      let matched = [...this.$route.matched];
      // If not the home page...
      if (this.isHome(matched[0])) {
        matched.splice(0, 1); // intercept the first element...
      }
      this.breadList = matched;
    }
  }
};
</script>
<style lang="scss">
</style>
