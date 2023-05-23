<!--
 * @Author: zi.yang
 * @Date: 2021-04-01 08:23:28
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-07 23:56:23
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\components\city\Alphabet.vue
-->
<template>
  <ul class="list">
    <!-- .prevent 阻止事件的默认行为，如果不配置，则下拉会触发整个页面被拖拽 -->
    <li
      class="item"
      v-for="(item, index) of letters"
      :key="index"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
      :ref="item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object,
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
  },
  // updated 数据变化时才会重新渲染
  updated() {
    this.startY = this.$refs['A'][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        // 函数节流，每16毫秒执行一次函数
        // 当16毫秒执行两次及以上次数操作，则将之前的定时器删除，
        // 取消函数的执行，这样一来，可以减少函数执行的次数
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  align-item center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  .item
    line-height .4rem
    text-align center
    color $bgColor
</style>
