<template>
  <div class="mo_nav">
    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo"
      @open="handleOpen" @close="handleClose" router :collapse="isCollapse" ref="submenu" @select="selectMenuItem">
      <el-header>
        <p v-if="!isCollapse" class="lg_logo">Home Squat</p>
        <p v-else class="sm_logo">HS</p>
      </el-header>
      <el-scrollbar>
        <template v-for="na in menuList" v-if="!na.hidden">
          <!-- 有子项菜单 -->
          <el-submenu v-if="!na.meta.noShowMenu"
            :key="na.path+'na'" :index="na.path">
            <template slot="title">
              <i :class="'nav_icon el-icon-'+na.meta.icon"></i>
              <span slot="title">{{na.name}}</span>
            </template>
            <el-menu-item v-for="child in na.children" :index="child.path"
              :key="child.path+'na'" v-if="!child.hidden">
              <i :class="'nav_icon el-icon-'+child.meta.icon"></i>
              {{child.name}}
            </el-menu-item>
          </el-submenu>
          <!-- 单独菜单，无子项 -->
          <el-menu-item v-else v-for="child in na.children" :index="child.path"
            :key="child.path+'na'" :icon="child.icon">
            <i :class="'nav_icon el-icon-'+child.meta.icon"></i>
            <span>{{child.name}}</span>
          </el-menu-item>
        </template>
      </el-scrollbar>
      <el-footer>
        <div class="nav_footer">
          <i class="el-icon-s-fold fold_icon" v-if="!isCollapse" @click="setFold(true)"></i>
          <i class="el-icon-s-unfold fold_icon" v-else @click="setFold(false)"></i>
        </div>
      </el-footer>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      defaultActive: this.$route.path,
      isCollapse: false,
      menuList: []
    }
  },
  mounted () {
    // console.log(this.$router)
    console.log('[caidan=======]', this.$route)
    this.getAllMenus()
  },
  methods: {
    // 打开菜单
    handleOpen (el) {
      // console.log(`handleOpen------> ${el}`)
    },
    // 关闭菜单
    handleClose (el) {
      // console.log(`handleClose------> ${el}`)
    },
    // 获取菜单栏数据
    getAllMenus () {
      this.menuList = this.$router.options.routes
    },
    // 收缩按钮
    setFold (bl) {
      this.isCollapse = bl
      this.$parent.navIsCollapse = bl // set whether the right side of the layout is folded...
      // console.log(this.$parent)
    },
    // 选择菜单
    selectMenuItem (url, allPath, $el) {
      // console.log('selectMenuItem', url, allPath, $el)
      

    }
  }
}
</script>
<style lang="scss">
@import '../../../assets/css/theme';
.mo_nav {
  height: 100%;
  @include base-background();
  transition: 1s width ease;
  .el-menu {
    width: 200px;
    height: 100%;
    @include base-border();
    @include base-background();
    .el-header {
      height: 60px;
      line-height: 60px;
      text-align: center;
      vertical-align: middle;
      @include base-background();
      @include base-color();
      overflow: hidden;
      .lg_logo {        
        font-size: 20px;
      }
      .sm_logo {
        font-size: 16px;
      }
    }

    .el-scrollbar {
      width: 200px;
      height: calc(100% - 60px);
      overflow: hidden;
      @include base-background();
      transition: 0.2s width ease;
      .el-scrollbar__wrap {
        overflow-x: hidden;
        @include base-background();
      }
      .nav_icon {
        padding-right: 8px;
        vertical-align: middle;
      }

      .el-submenu__icon-arrow {
        margin-top: -2px;
      }
      
      .el-menu {
        @include base-background();
      }
      
      .el-submenu__title,
      .el-menu-item {
        @include base-color();
        i {
          @include base-color();
          // padding-bottom: 4px;
        }
        &.is-active {
          @include base-active();
          i {
            @include base-active();
          }
        }
      }

      .el-submenu__title:focus, 
      .el-submenu__title:hover,
      .el-menu-item:focus,
      .el-menu-item:hover{
        @include base-hover();
      }
      
      .el-submenu.is-active {
        .el-submenu__title {
          @include base-active();
          @include base-hover();
          & i {
            @include base-active();
          }
        }
      }
    }

    .nav_footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30px;
      @include base-hover();
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .fold_icon {
        font-size: 24px;
        @include base-active();
        cursor: pointer;
      }
    }

    /* 已折叠 */
    &.el-menu--collapse {
      height: 100%;
      width: 50px;
      .el-scrollbar {
        width: 50px;
      }
      .el-submenu__title {
        &>span {
          display: none;
        }
        &>.el-icon-arrow-right {
          display: none;
        }
      }
      .nav_footer {
        justify-content: center;
      }
    }
  }
}
.el-menu--vertical {
  .el-menu {
    min-width: 120px;
    @include base-background();
    .el-menu-item {
      padding-left: 20px;
      height: 40px;
      line-height: 40px;
      @include base-color();
      i {
        @include base-color();
        padding-bottom: 4px;
      }
      &:focus,
      &:hover {
        @include base-hover();
      }
      &.is-active {
        @include base-active();
        @include base-hover();
        i {
          @include base-active();
        }
      }
    }
  }
}
</style>
