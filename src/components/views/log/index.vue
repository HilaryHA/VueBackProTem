<template>
  <div class="v_log">
    <el-row>
      <el-radio v-model="radio" label="1" size="small">备选项</el-radio>
      <el-radio v-model="radio" label="2" size="small">备选项</el-radio>
    </el-row>
    <el-row>
      <el-radio-group v-model="radio3" size="small">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京" disabled></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row>
      <log-child></log-child>
    </el-row>
  </div>
</template>
<script>
import LogChild from './module/logChild'
export default {
  components: {
    LogChild
  },
  data() {
    return {
      radio: "1",
      radio3: "上海"
    };
  },
  // 父组件：依赖注入 参考https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5
  provide: function() {
    return {
      getData: this.$data
    }
  }
};
</script>
<style lang="scss">
.v_log {
  .el-row {
    padding: 20px 0;
  }
}
</style>
