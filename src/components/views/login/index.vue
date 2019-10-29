<template>
  <div class="mo_login">
    <div class="login_cont">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="form"
        ref="form"
        :rule="rules"
      >
        <el-form-item label="用户名">
          <el-input v-model="form.name" placeholde="Please enter your username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="login_sub">
          <el-button type="primary" @click="doSubmit('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="m_bubble">
      <div v-for="b in 10" :key="b+'bub'" :class="'bubble b'+b"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "top",
      form: {
        name: "",
        password: ""
      },
      rules: {}
    };
  },
  methods: {
    // 登录提交
    doSubmit(forName) {
      // 无需账号密码直接登录
      this.$router.push("/mo");
    }
  }
};
</script>
<style lang="scss">
$font-color: #fff;
$bg-color: rgba(46, 139, 87, 0.4);
$btn-color: #409eff;
$shadow-color: 3px 7px 50px -12px rgba(64, 158, 255, 0.4);
@mixin bubbleAnimation($send1, $send2) {
  animation: bubble $send1 linear infinite,
    direction $send2 ease-in-out infinite alternate;
}
.mo_login {
  position: relative;
  width: 100%;
  padding-top: 220px;
  height: calc(100% - 220px);
  overflow: hidden;
  &:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%);
    z-index: -1;
  }

  .login_cont {
    margin: 0 auto;
    padding: 45px 20px 0;
    width: 350px;
    height: 300px;
    border-radius: 3px;
    box-shadow: $shadow-color;
    .el-form {
      .el-form-item__label {
        color: $btn-color;
      }
      .login_sub {
        text-align: center;
      }
      .el-button {
        width: 100%;
      }
    }
  }

  .m_bubble {
    .bubble {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      position: absolute;
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1),
        inset 0 10px 30px 5px rgba(255, 255, 255, 1);
      z-index: -1;
    }
    .b1 {
      left: -5%;
      top: 5%;
      transform: scale(0.6); // 缩放比例
      @include bubbleAnimation(25s, 2s);
    }
    .b2 {
      left: 5%;
      top: 80%;
      transform: scale(0.4);
      @include bubbleAnimation(20s, 4s);
    }
    .b3 {
      left: 10%;
      top: 40%;
      transform: scale(0.7);
      @include bubbleAnimation(28s, 2s);
    }
    .b4 {
      left: 20%;
      top: 0%;
      transform: scale(0.3);
      @include bubbleAnimation(22s, 3s);
    }
    .b5 {
      left: 30%;
      top: 50%;
      transform: scale(0.3);
      @include bubbleAnimation(29s, 4s);
    }
    .b6 {
      left: 50%;
      top: 0;
      transform: scale(0.8);
      @include bubbleAnimation(21s, 2s);
    }
    .b7 {
      left: 65%;
      top: 70%;
      transform: scale(0.4);
      @include bubbleAnimation(20s, 2s);
    }
    .b8 {
      left: 80%;
      top: 10%;
      transform: scale(0.3);
      @include bubbleAnimation(22s, 3s);
    }
    .b9 {
      left: 90%;
      top: 50%;
      transform: scale(0.6);
      @include bubbleAnimation(29s, 4s);
    }
    .b10 {
      left: 80%;
      top: 80%;
      transform: scale(0.3);
      @include bubbleAnimation(26s, 2s);
    }
    @keyframes bubble {
      0% {
        margin-top: 100%;
      }
      100% {
        margin-top: -100%;
      }
    }
    @keyframes direction {
      0% {
        margin-left: 0;
      }
      100% {
        margin-left: 50px;
      }
    }
  }
}
</style>
