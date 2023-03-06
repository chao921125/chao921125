<template>
  <div class="box">
    <div class="batman">
      <div class="head"></div>
      <div class="eye left"></div>
      <div class="eye right"> </div>
      <div class="mouth"></div>
      <div class="body"></div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/Batman/Batman.vue')
</script>

<style lang="scss" scoped>
.box {
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 14px;
}
.batman {
  position: relative;
  width: 15em;
  height: 17em;
  background: #333333;
  z-index: 1;
  animation: move linear 1s infinite alternate;
}
.batman:after, .batman:before {
  content: "";
  position: absolute;
}
.batman:after {
  width: 9.5em;
  height: 12.8em;
  background: #222222;
  margin-top: 4em;
  margin-left: 4.8em;
  border-radius: 100% 50% 0% 0%;
}
.batman:before {
  width: 15em;
  height: 8em;
  background: #333333;
  margin-top: 17em;
}
.batman .head {
  position: absolute;
  background: #fff;
  width: 8em;
  height: 5em;
  position: absolute;
  top: 0;
  left: 1em;
  transform: skewX(15deg);
}
.batman .head:after, .batman .head:before {
  content: "";
  position: absolute;
}
.batman .head:after {
  background: #fff;
  width: 7em;
  height: 5em;
  top: 0;
  left: 6em;
  transform: skewX(-30deg);
}
.batman .head:before {
  background: #333;
  width: 13em;
  z-index: 1;
  margin-top: 3.7em;
  margin-left: -1em;
  height: 2em;
  border-radius: 100%;
  transform: skewX(-15deg);
  top: 0;
}
.batman .eye {
  position: absolute;
  width: 3.5em;
  margin-top: 13em;
  margin-left: 2em;
  height: 2em;
  z-index: 2;
  background: #777777;
}
.batman .left {
  border-radius: 10% 70% 20% 100%;
  transform: rotate(0deg);
}
.batman .right {
  margin-left: 9em;
  border-radius: 70% 20% 100% 20%;
  transform: rotate(0deg);
}
.batman .mouth {
  position: absolute;
  background: #f4d2c9;
  width: 13em;
  height: 5.5em;
  margin-top: 16.8em;
  margin-left: 1.1em;
  border-radius: 0% 0% 100% 100%;
}
.batman .mouth:after, .batman .mouth:before {
  content: "";
  position: absolute;
}
.batman .mouth:before {
  width: 5em;
  height: 1em;
  background: #f4d2c9;
  border-top: 0.8em solid #c6a59e;
  border-radius: 100%;
  margin-top: 2em;
  margin-left: 3.8em;
  animation: laugh ease 1s infinite alternate;
}
.batman .mouth:after {
  width: 2em;
  height: 0.3em;
  background: #c6a59e;
  margin-top: 3.5em;
  border-radius: 0.3em;
  margin-left: 5.4em;
  z-index: 2;
}
.batman .body {
  position: absolute;
  width: 35em;
  height: 15em;
  margin-left: -9.5em;
  border-radius: 100% 100% 0% 0%;
  background: #333333;
  margin-top: 23em;
  animation: dance linear 1s infinite alternate;
}
.batman .body:after, .batman .body:before {
  content: "";
  position: absolute;
}
.batman .body:after {
  width: 32em;
  height: 8em;
  margin-top: 7em;
  margin-left: 1.5em;
  border-radius: 100% 100% 0% 0%;
  background: #656f71;
}
.batman .body:before {
  background: #333333;
  width: 20em;
  height: 8em;
  margin-top: 3em;
  z-index: 1;
  margin-left: 7.5em;
  border-radius: 100%;
}

@keyframes dance {
  0% {
    margin-left: -9em;
  }
  50% {
    margin-left: -9.5em;
  }
  100% {
    margin-left: -10em;
  }
}
@keyframes move {
  0% {
    margin-top: 0em;
  }
  50% {
    margin-top: 2em;
  }
  100% {
    margin-top: 0em;
  }
}
@keyframes laugh {
  0% {
    border-top: 0.8em solid #c6a59e;
  }
  50% {
    border-top: 0.5em solid #c6a59e;
  }
  100% {
    border-top: 0.8em solid #c6a59e;
  }
}
</style>