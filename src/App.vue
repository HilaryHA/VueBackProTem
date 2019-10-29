<template>
  <div id="app" :data-theme="nowThemeInfo">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["nowThemeInfo"])
  }
};
</script>

<style>
@import "../static/css/reset.scss";
@import "../static/css/common.scss";
</style>
