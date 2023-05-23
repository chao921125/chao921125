<template>
  <!--wrapper-->
  <div id="wrapper">
    <TravelHeader />
    <TravelNav />
    <!--:key="$route.path" :key="$route.fullPath"-->
    <router-view v-slot="{ Component, route }">
      <transition name="anim" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>

    <div class="clearfix" />
  </div>

  <TravelFooter />
</template>
<script>
import TravelNav from "@/components/travel-nav";
import TravelHeader from "@/components/travel-header";
import TravelFooter from "@/components/travel-footer";

export default {
  name: "App",
  components: {
    TravelNav,
    TravelHeader,
    TravelFooter,
  },
};
</script>
<style lang="scss">
@import "assets/sass/main";
@keyframes coming {
  from {
    transform: translateX(-200px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes going {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-200px);
    opacity: 0;
  }
}
.anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.anim-leave-active {
  animation: going 0.5s;
}
</style>
