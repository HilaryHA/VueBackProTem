<template>
  <div class="mo_head">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        用户
        <b class="head_user">{{ username }}</b>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="layoutSet">布局配置</el-dropdown-item>
        <el-dropdown-item command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "Lethe"
    };
  },
  methods: {
    // 点击下拉选项
    handleCommand(command) {
      switch (command) {
        case "layoutSet":
          this.openSettingPage();
          break;
        case "logout":
          this.$router.push("/");
          break;
        default:
          break;
      }
    },
    // 打开布局配置
    openSettingPage() {
      let moDrawer = this.$parent.$refs.moDrawer;
      moDrawer.drawer = true;
    }
  }
};
</script>
<style lang="scss">
@import "../../../assets/css/theme";
.mo_head {
  height: 60px;
  line-height: 60px;
  text-align: right;
  vertical-align: middle;
  @include base-color(false);
  @include base-background(false);
  font-size: 20px;
  overflow: hidden;
  padding-right: 30px;
  .el-dropdown {
    height: 35px;
  }
  .el-dropdown-link {
    cursor: pointer;
    @include base-background(false);
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .head_user {
    padding: 0 3px;
  }
}
.el-dropdown-menu {
  padding: 0;
  .el-dropdown-menu__item {
    font-size: 12px;
  }
}
</style>
