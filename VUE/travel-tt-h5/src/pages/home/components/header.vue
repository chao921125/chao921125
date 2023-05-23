<template>
<div class="header">
    <div class="header_left">
         <span class="iconfont">&#xe606;</span>
    </div>
    <div class="header_center">
        <span class="iconfont">&#xe613;</span>
        输入城市/景点/游玩主题
        </div>
        <router-link to="city">
        <div class="header_right">
         {{this.city}}
        <span class="iconfont">&#xe619;</span>
        </div>
        </router-link>
    </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";
export default {
    name: "HomeHeader",
    computed: {
       ...mapState(['city']),
    },
    data() {
      return {
        
      }
    },
};
</script>

<style lang="stylus" scoped>
// @import "../../../assets/style/varibles"
// @import "~@/assets/style/varibles"
@import '~style/varibles';

.header {
  background-color: $bgColor;
  overflow: hidden;
  color: #fff;
  padding: 0.2rem;
  .header_left {
    float: left;
  }
  .header_center {
    float: left;
    margin: 0 0.2rem;
  }
  .header_right {
    float: right;
    color: #fff;
  }
}
</style>