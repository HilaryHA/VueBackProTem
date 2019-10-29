<template>
  <div class="mo_setting">
    <el-drawer title="系统布局配置" :visible.sync="drawer" :direction="direction"
        :before-close="handleClose" ref="moDrawer">
      <el-row type="flex" justify="space-between">
        <el-col :span="10" :offset="2">
            设置主题颜色
        </el-col>
        <!-- <el-col :span="10"> -->
          <!-- <el-color-picker v-model="color" show-alpha :predefine="predefineColors" -->

          <!-- <el-color-picker v-model="color"
           size="small" @change="colorChange"></el-color-picker> -->
        <!-- </el-col> -->
      </el-row>
      <el-row >
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
import { mapGetters, mapActions } from 'vuex'
import { changeThemeColor, curColor } from '@/assets/js/themeColorClient'
export default {
  data () {
    return {
      color: curColor,
      drawer: false,
      direction: 'rtl', // 从右往左设置
      predefineColors: [
        '#307BC8',
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ],
      radio: '0',
      themeArr: ['default', 'green', 'orange'],
      nowTheme: 'default'
    }
  },
  // computed: {
  //   ...mapGetters(['menuBackground', 'hoverColor', 'activeColor']),
  //   color: {
  //     set (val) {
  //       console.log('------------2222222222-----------', val)
  //       this.changeSetting({
  //         key : 'menuBackground',
  //         value: val
  //       })
  //       // changeThemeColor(val)
  //       //   .then(t => this.$message.success('切换成功!!'))
  //     },
  //     get () {
  //       console.log('------------1111111111111111-----------', curColor)
  //       // return this.menuBackground
  //       return curColor
  //     }
  //   }
  // },
  computed: {
    ...mapGetters(['nowThemeInfo'])
  },
  mounted() {
    this.initRadio(this.nowThemeInfo)
  },
  methods: {
    ...mapActions(['setThemeInfo']),

    // 关闭drawer抽屉
    handleClose (done) {
    //   this.$confirm('确认关闭？')
    //     .then(_ => {
          done();
        // })
        // .catch(_ => {});
    },

    // 颜色选择器改变颜色
    // colorChange ($cl) {
    //   let index = Math.floor(Math.random() * 3)
    //   console.log('修改-------',index);
    //   this.setThemeInfo(this.themeArr[index])
    //   this.$router.go(0)
    // },

    // 单选框改变颜色
    changeRadio($cl) {
      let index = Number($cl)
      console.log('修改-------',$cl, index, this.$route, this.$router)
      this.setThemeInfo(this.themeArr[index]) // 调用store修改主题的函数
      this.drawer = false 
      // 问题：修改后，只有首页子页面，没有菜单栏和顶部导航栏
      // 已解决
      // if (this.$route.path.includes('/mo/home')) {
      //   this.$router.go(0)
      // }
    },

    // 初始化单选框的值
    initRadio (theme) {
      theme.includes('-') && (this.nowTheme = theme.split('-')[0]) // orange-theme
      switch (this.nowTheme) {
        case 'default':
          this.radio = '0'
          break
        case 'green':
          this.radio = '1'
          break
        case 'orange':
          this.radio = '2'
          break
        default :
          break
      }
    }
    
  }
}
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
    &+.el-radio__label {
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
</style>
