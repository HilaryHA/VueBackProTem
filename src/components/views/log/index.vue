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
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      radio3: "上海"
    };
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
