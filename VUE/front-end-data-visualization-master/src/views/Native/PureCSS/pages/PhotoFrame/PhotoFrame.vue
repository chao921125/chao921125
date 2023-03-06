<template>
  <div class="box">
    <!-- 图片 -->
    <img src="@/assets/images/gwen-spider-verse-ah.jpg" alt="" />
    <!-- 内容 -->
    <div class="box__inner__content">
      <h3 class="title">Gwen</h3>
      <span class="post">spider verse</span>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
store.commit(
  "setComponentPath",
  "src/views/Native/PureCSS/pages/PhotoFrame/PhotoFrame.vue"
);
</script>

<style scoped>
/* 外层容器 */
.box {
  margin: 100px auto;
  width: 400px;
  height: 400px;
  overflow: hidden;
  position: relative;
}

.box:before {
  content: "";
  display: block;
  border: 30px solid rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 5px;
  left: 5px;
  bottom: 5px;
  right: 5px;
  opacity: 1;
  z-index: 2;
  transition: all 0.3s ease 0s;
}

.box:hover:before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 10px solid rgba(255, 255, 255, 0.18);
}

.box:after {
  content: "";
  display: block;
  border: 8px solid #fff;
  position: absolute;
  top: 35px;
  left: 35px;
  bottom: 35px;
  right: 35px;
  opacity: 1;
  z-index: 1;
  transition: all 0.5s ease 0s;
}

.box:hover:after {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
}

/* 图片 */
.box img {
  width: 100%;
  height: auto;
  transform: scale(1.2);
  transition: all 0.5s ease 0s;
}

.box:hover img {
  transform: scale(1);
}

/* 文字内容 */
.box .box__inner__content {
  position: absolute;
  left: 10px;
  top: 50%;
  right: 10px;
  text-align: center;
  color: #fff;
  opacity: 0;
  transform: translateY(-50%) scale(0.8);
  transition: all 0.3s ease 0s;
  box-shadow:0 0 30px 10px rgba(0, 0, 0, 0.15);
}

.box:hover .box__inner__content {
  opacity: 1;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
  transform: translateY(-50%) scale(1);
}

/* 标题 */
.box .title {
  font-size: 50px;
  font-weight: bold;
  margin: 0;
}

/* 文本 */
.box .post {
  display: block;
  font-size: 36px;
  font-style: italic;
  margin-bottom: 10px;
}
</style>