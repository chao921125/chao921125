<template>
  <div>
    <div class="input__x">
      <input type="text" class="input__fill" placeholder="用户名">
      <label class="input__label">用户名</label>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/MaterialInput/MaterialInput.vue')
</script>

<style scoped>
.input__x {
  position: relative;
}

.input__fill {
  outline: none;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  padding: 0 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #666;
}

.input__fill:not(:placeholder-shown),
.input__fill:focus {
  border-color: #3be2be;
}

.input__fill::placeholder {
  color: transparent;
}

.input__label {
  position: absolute;
  left: 10px;
  top: 5px;
  transition: transform .25s;
  font-size: 16px;
  padding: 0 6px;
  pointer-events: none;
  color: #999;
}

.input__fill:not(:placeholder-shown) ~ .input__label,
.input__fill:focus ~ .input__label {
  transform: scale(0.75) translate(0, -20px);
  background: #fff;
  color: #00d1a4;
}
</style>