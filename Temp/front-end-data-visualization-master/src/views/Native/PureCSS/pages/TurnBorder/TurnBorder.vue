<template>
  <div class="turn__border__x">
    <span>转转转转</span>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/TurnBorder/TurnBorder.vue')
</script>

<style lang="scss" scoped>
.turn__border__x {
  width: 800px;
  height: 800px;
  margin: 30px;
  position: relative;
  border-radius: 40px;
  background-color: #6b705c;
  box-shadow: 0 0 60px #6b705c;
}

span {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-shadow: 0 0.2em 0.25em rgba(69, 73, 58, 0.3), 0 0.4em 0.6em rgba(69, 73, 58, 0.3);
  color: #ffe8d6;
  font-size: 80px;
  font-weight: bold;
  font-family: helvetica, arial, sans-serif;
  letter-spacing: .2em;
}

span::before,
span::after {
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  padding: .8em .6em;
  border: 0.2em solid #b7b7a4;
  -webkit-animation: 10s infinite alternate ease-in-out turn;
  animation: 10s infinite alternate ease-in-out turn;
}

span::before {
  border-color: #b7b7a4 #b7b7a4 transparent transparent;
  z-index: -1;
}

span::after {
  border-color: transparent transparent #b7b7a4 #b7b7a4;
  -webkit-box-shadow: 0.25em 0.25em 0.25em rgba(69, 73, 58, 0.3);
  box-shadow: 0.25em 0.25em 0.25em rgba(69, 73, 58, 0.3);
}

@-webkit-keyframes turn {
  0% {
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(0deg);
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(360deg);
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}

@keyframes turn {
  0% {
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(0deg);
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(360deg);
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}
</style>