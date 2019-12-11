<template>
  <div class="mo_setting">
    <el-drawer
      title="系统布局配置"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      ref="moDrawer"
    >
      <el-row type="flex" justify="space-between">
        <el-col :span="10" :offset="2">设置主题颜色</el-col>
      </el-row>
      <el-row>
        <el-col :span="22" :offset="2">
          <el-radio-group v-model="radio" size="small" @change="changeRadio">
            <el-radio label="0" border>默认</el-radio>
            <el-radio label="1" border>绿色</el-radio>
            <el-radio label="2" border>橙色</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
    </el-drawer>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl", // 从右往左设置
      radio: "0",
      themeArr: ["default", "green", "orange"],
      nowTheme: "default"
    };
  },
  computed: {
    ...mapGetters(["nowThemeInfo"])
  },
  mounted() {
    this.initRadio(this.nowThemeInfo);
  },
  methods: {
    ...mapActions(["setThemeInfo"]),

    // 关闭drawer抽屉
    handleClose(done) {
      //   this.$confirm('确认关闭？')
      //     .then(_ => {
      done();
      // })
      // .catch(_ => {});
    },

    // 单选框改变颜色
    changeRadio($cl) {
      let index = Number($cl);
      // 调用store修改主题的函数
      this.setThemeInfo(this.themeArr[index]);
      this.drawer = false;
    },

    // 初始化单选框的值
    initRadio(theme) {
      theme.includes("-") && (this.nowTheme = theme.split("-")[0]); // 如'orange-theme'
      switch (this.nowTheme) {
        case "default":
          this.radio = "0";
          break;
        case "green":
          this.radio = "1";
          break;
        case "orange":
          this.radio = "2";
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="scss">
@mixin set-radio-color($color) {
  &.is-bordered.is-checked {
    border-color: $color;
  }
  .el-radio__input.is-checked {
    .el-radio__inner {
      border-color: $color;
      background: $color;
    }
    & + .el-radio__label {
      color: $color;
    }
  }
}
.el-drawer__header {
  color: #323232;
}
.el-col {
  line-height: 38px;
  color: #72767b;
  font-size: 13px;
}
.el-drawer {
  width: 300px !important;
  .el-radio {
    margin-right: 10px;
    &:nth-child(2) {
      @include set-radio-color(#056905);
    }
    &:nth-child(3) {
      @include set-radio-color(#964300);
    }
  }
}
.v-modal {
  z-index: -1 !important;
}
</style>
