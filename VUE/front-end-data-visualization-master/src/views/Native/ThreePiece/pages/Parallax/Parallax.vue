<template>
  <div class="explain">
    <p>本例实现原理：<a href="https://juejin.cn/post/7040283893106212895" target="_blank">《🏆视差特效的原理和实现方法》---- 帮我的文章点个赞吧~谢谢~</a></p>
  </div>
  <div class="page__x" id="pageX">
    <div class="cards">
      <h3>Movies</h3>
      <h1>Popular</h1>
      <!-- 幽灵公主 -->
      <div class="card princess-mononoke">
        <div class="card__bg"></div>
        <img class="card__img" src="./img/3dr_mono.png" />
        <div class="card__text">
          <p class="card__title">Princess Mononoke</p>
        </div>
      </div>
      <!-- 千与千寻 -->
      <div class="card spirited-away">
        <div class="card__bg"></div>
        <img class="card__img" src="./img/3dr_chihiro.png" />
        <div class="card__text">
          <p class="card__title">Spirited Away</p>
        </div>
      </div>
      <!-- 哈尔的移动城堡 -->
      <div class="card howl-s-moving-castle">
        <div class="card__bg"></div>
        <img class="card__img" src="./img/3dr_howlcastle.png" />
        <div class="card__text">
          <p class="card__title">Howl's Moving Castle</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useStore } from "vuex"
const store = useStore()
store.commit(
  "setComponentPath",
  "src/views/CSS/ThreePiece/pages/Parallax/Parallax.vue"
)

// 页面容器
let pageX = null

// 卡片容器
let cards = null
// 所有图片
let images = null
// 所有背景
let backgrounds = null

// 旋转角度系数
let range = 40

// 旋转公式（返回-20 ~ 20，保留1为小数）
let calcValue = (a, b) => (a / b * range - range / 2).toFixed(1)

// 默认返回 undefined
let timeout = void 0

// 视差动画函数
// e：鼠标移动事件的参数
function parallax(e) {
  let x = e.x // 指针x轴位置
  let y = e.y // 指针y轴位置

  // 如果 timeout 已经存在，就取消一个先前通过调用 window.requestAnimationFrame() 方法添加到计划中的动画帧请求。
  if (timeout) {
    // 这是一个实验中的功能，此功能某些浏览器尚在开发中
    window.cancelAnimationFrame(timeout);
  }

  // 在下次重绘之前调用指定的回调函数更新动画
  timeout = window.requestAnimationFrame(function () {
    // 通过 calcValue 根据鼠标当前位置和容器宽高比计算得出的值
    let xValue = calcValue(x, window.innerWidth)
    let yValue = calcValue(y, window.innerHeight)

    // 设置卡片容器的旋转角度
    cards.style.transform = "rotateX(" + yValue + "deg) rotateY(" + xValue + "deg)";

    // 设置所有图片的位移
    images.forEach(item => {
      item.style.transform = "translateX(" + -xValue + "px) translateY(" + yValue + "px)"
    })

    // 设置所有背景图的位置
    backgrounds.forEach(item => {
      item.style.backgroundPosition = xValue * .45 + "px " + -yValue * .45 + "px"
    })
  })
}

onMounted(() => {
  // 页面容器
  pageX = document.querySelector('#pageX')
  // 卡片容器
  cards = document.querySelector('.cards')
  // 所有图片
  images = document.querySelectorAll('.card__img')
  // 所有背景
  backgrounds = document.querySelectorAll('.card__bg')

  // 监听鼠标在 pageX 容器移动
  pageX.addEventListener('mousemove', parallax, false)
})

onUnmounted(() => {
  pageX.removeEventListener('mousemove', parallax)
})
</script>

<style lang="scss" scoped>
.page__x {
  width: 1000px;
  height: 700px;
  /* 居中布局 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* 设置元素被查看位置的视图 */
  perspective: 1800px;
  /* 背景色（兼容性写法） */
  background: #642b73;
  background: linear-gradient(to bottom, #c6426e, #642b73);
}

/* Popular */
h1 {
  /* 底部外边距 */
  margin-bottom: 30px;
  /* z轴偏移 */
  transform: translateZ(35px);
  /* 字母间距 */
  letter-spacing: -1px;
  /* 字号 */
  font-size: 32px;
  /* 字体粗细 */
  font-weight: 800;
  /* 字体颜色 */
  color: #3e3e42;
}

/* Movies */
h3 {
  /* 底部外边距 */
  margin-bottom: 6px;
  /* z轴偏移 */
  transform: translateZ(25px);
  /* 字号 */
  font-size: 16px;
  /* 字体颜色 */
  color: #eb285d;
}

/* 卡片主容器 */
.cards {
  /* 行内块元素 */
  display: inline-block;
  /* 最小宽度 */
  min-width: 595px;
  /* 内边距 */
  padding: 30px 35px;
  /* 设置元素被查看位置的视图 */
  perspective: 1800px;
  /* 旋转基点 */
  transform-origin: 50% 50%;
  /* 使被转换的子元素保留其 3D 转换 */
  transform-style: preserve-3d;
  /* 圆角 */
  border-radius: 15px;
  /* 文本左对齐 */
  text-align: left;
  /* 背景色 */
  background: #fff;
  /* 投影 */
  box-shadow: 0px 10px 20px 20px rgba(0, 0, 0, 0.17);
}

/* 卡片 */
.card {
  /* 行内块元素 */
  display: inline-block;
  /* 宽 */
  width: 175px;
  /* 高 */
  height: 250px;
  /* 相对定位 */
  position: relative;
  /* 隐藏溢出部分 */
  overflow: hidden;
  /* 设置元素被查看位置的视图 */
  perspective: 1200px;
  /* 使被转换的子元素保留其 3D 转换 */
  transform-style: preserve-3d;
  /* z轴偏移 */
  transform: translatez(35px);
  /* 过渡 */
  transition: transform 200ms ease-out;
  /* 文本居中对齐 */
  text-align: center;
  /* 圆角 */
  border-radius: 15px;
  /* 投影 */
  box-shadow: 5px 5px 20px -5px rgba(0, 0, 0, 0.6);
}

/* 除了最后一个卡片之外的卡片 */
.card:not(:last-child) {
  /* 右侧外边距 */
  margin-right: 30px;
}

/* 卡片的图片 */
.card__img {
  /* 相对定位 */
  position: relative;
  /* 高度 */
  height: 100%;
}

/* 卡片背景 */
.card__bg {
  bottom: -50px;
  left: -50px;
  position: absolute;
  right: -50px;
  top: -50px;
  /* 旋转基点 */
  transform-origin: 50% 50%;
  transform: translateZ(-50px);
  z-index: 0;
}

/* 幽灵公主 图片 */
.princess-mononoke .card__img {
  top: 14px;
  right: -10px;
  height: 110%;
}

/* 幽灵公主 背景 */
.princess-mononoke .card__bg {
  background: url("img/3dr_monobg.jpg") center/cover no-repeat;
}

/* 千与千寻 图片 */
.spirited-away .card__img {
  top: 25px;
}

/* 千与千寻 背景 */
.spirited-away .card__bg {
  background: url("img/3dr_spirited.jpg") center/cover no-repeat;
}

/* 哈尔的移动城堡 图片 */
.howl-s-moving-castle .card__img {
  top: 5px;
  left: -4px;
  height: 110%;
}

/* 哈尔的移动城堡 背景 */
.howl-s-moving-castle .card__bg {
  background: url("img/3dr_howlbg.jpg") center/cover no-repeat;
}

/* 卡片的文本内容 */
.card__text {
  /* 弹性布局 */
  display: flex;
  /* 主轴为垂直方向 */
  flex-direction: column;
  /* 主轴居中对齐 */
  justify-content: center;
  /* 交叉轴的中点对齐 */
  align-items: center;
  /* 宽 */
  width: 100%;
  /* 高 */
  height: 70px;
  /* 绝对定位 */
  position: absolute;
  /* 堆叠顺序 */
  z-index: 2;
  /* 离底部距离 */
  bottom: 0;
  /* 背景色：渐变 */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.55) 100%
  );
}

/* 卡片的标题 */
.card__title {
  /* 底部外边距 */
  margin-bottom: 3px;
  /* 设置左右10px内边距 */
  padding: 0 10px;
  /* 字号 */
  font-size: 18px;
  /* 字体的粗细 */
  font-weight: 700;
  /* 字体颜色 */
  color: #fff;
}



/* 实现原理文章推荐样式，这段CSS和本例特效无关，不需要管！！！ */
.explain {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  a {
    margin-bottom: 10px;
    text-decoration: none;
    color: #1e80ff;
    font-weight: 600;

    &:hover {
      color: #f6416c;
    }
  }
}
</style>
