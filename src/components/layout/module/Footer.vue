<template>
  <div class="mo_footer">
    <el-footer height="30px">
      <span>{{company}} <i class="fo_copy">{{copyright}}</i> </span>
    </el-footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      company: 'Home Squat limited the company.',
      copyright: '9102 iu nbnq ix om'
    }
  }
}
</script>
<style lang="scss">
.mo_footer {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  color: #323232;
  .el-footer {
    text-align: center;
    .fo_copy {
      color: rgb(99, 99, 99);
    }
  }
}
</style>
