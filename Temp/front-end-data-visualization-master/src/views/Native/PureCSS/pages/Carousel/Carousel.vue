<template>
  <div class='carousel__x'>
    <!-- 选择按钮（透明度为0）可按不可见 -->
    <input class="index__btn" type='radio' name='carousel' checked>
    <input class="index__btn" type='radio' name='carousel'>
    <input class="index__btn" type='radio' name='carousel'>
    <input class="index__btn" type='radio' name='carousel'>

    <!-- 下标（显示） -->
    <ol class="index__x">
      <li class="index__item">1</li>
      <li class="index__item">2</li>
      <li class="index__item">3</li>
      <li class="index__item">4</li>
    </ol>

    <!-- 内容区 -->
    <ul class="carousel__container">
      <li class="carousel__item">1</li>
      <li class="carousel__item">2</li>
      <li class="carousel__item">3</li>
      <li class="carousel__item">4</li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/Carousel/Carousel.vue')
</script>

<style scoped>
/* 容器 */
.carousel__x {
  width: 600px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  overflow: hidden;
  position: relative;
}

.index__x,
.carousel__container {
  margin: 0;
  padding: 0;
}

.carousel__item,
.index__item {
  list-style: none;
}

.carousel__container {
  width: 400%;
  height: 100%;
  float: left;
  transition: 1s;
}

.carousel__item {
  width: 25%;
  height: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.index__btn {
  position: absolute;
  bottom: 20px;
  z-index: 5;
  opacity: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.index__btn:nth-child(1) {
  left: calc(50% - 100px);
}

.index__btn:nth-child(2) {
  left: calc(50% - 50px);
}

.index__btn:nth-child(3) {
  left: 50%;
}

.index__btn:nth-child(4) {
  left: calc(50% + 50px);
}

.index__btn:nth-child(2):checked~ul {
  transform: translateX(-25%);
}

.index__btn:nth-child(3):checked~ul {
  transform: translateX(-50%);
}

.index__btn:nth-child(4):checked~ul {
  transform: translateX(-75%);
}

.index__x > .index__item {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #333;
  background: white;
  border-radius: 50%;
  float: left;
  position: absolute;
  transition: 1s;
}

.index__x {
  position: absolute;
  z-index: 3;
  bottom: 50px;
  width: 100%;
}

.index__x > .index__item:nth-child(1) {
  left: calc(50% - 100px)
}

.index__x > .index__item:nth-child(2) {
  left: calc(50% - 50px)
}

.index__x > .index__item:nth-child(3) {
  left: 50%;
}

.index__x > .index__item:nth-child(4) {
  left: calc(50% + 50px)
}

.index__btn:nth-child(1):checked ~ .index__x > .index__item:nth-child(1) {
  background: #666;
  color: white;
  box-shadow: 0 0 5px rgba(75, 70, 70, .3);
}

.index__btn:nth-child(2):checked ~ .index__x > .index__item:nth-child(2) {
  background: #666;
  color: white;
  box-shadow: 0 0 5px rgba(75, 70, 70, .3);
}

.index__btn:nth-child(3):checked ~ .index__x > .index__item:nth-child(3) {
  background: #666;
  color: white;
  box-shadow: 0 0 5px rgba(75, 70, 70, .3);
}

.index__btn:nth-child(4):checked ~ .index__x > .index__item:nth-child(4) {
  background: #666;
  color: white;
  box-shadow: 0 0 5px rgba(75, 70, 70, .3);
}
</style>