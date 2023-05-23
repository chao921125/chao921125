<!--
 * @Author: zi.yang
 * @Date: 2021-04-07 23:28:33
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-07 23:33:31
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\common\fade\Fade.vue
-->
<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'Fade',
};
</script>

<style lang="stylus" scoped>
.v-enter,.v-leave-to
  opacity 0
.v-enter-active,.v-leave-active
  transition opacity .5s
</style>
