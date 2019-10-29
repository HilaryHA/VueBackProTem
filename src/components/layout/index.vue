<template>
  <div class="mo_index">
    <div class="in_main">
      <e-nav ref="submenu"></e-nav>
      <div class="in_cont" :class="navIsCollapse ? 'cont_collapse' : ''">
        <e-head></e-head>
        <e-set ref="moDrawer"></e-set>
        <el-main>
          <eBread></eBread>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </el-main>
        <e-footer></e-footer>
      </div>
    </div>
  </div>
</template>
<script>
import eNav from "@/components/layout/module/Nav.vue";
import eHead from "@/components/layout/module/Head.vue";
import eFooter from "@/components/layout/module/Footer.vue";
import eBread from "@/components/layout/module/Bread.vue";
import eSet from "@/components/public/Setting";
import { mapGetters } from "vuex";
export default {
  components: {
    eNav,
    eHead,
    eFooter,
    eBread,
    eSet
  },
  data() {
    return {
      navIsCollapse: false
    };
  },
  computed: {
    ...mapGetters(["nowThemeInfo"])
  }
};
</script>
<style lang="scss">
@import "../../assets/css/theme";
.mo_index {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  .in_main {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;

    .in_cont {
      @include base-cont-color();
      position: absolute;
      left: 200px;
      top: 0;
      right: 0;
      bottom: 0;
      overflow-y: auto;
      z-index: 12;
      .el-main {
        overflow: unset;
        padding: 20px 20px 0;
      }

      /* 已折叠 */
      &.cont_collapse {
        left: 50px;
        .el-header {
          left: 50px;
        }
      }
    }
  }
}
</style>
