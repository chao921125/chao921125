<!-- 线段 -->
<template>
  <svg class="svg__x">
    <!-- 水平线段 -->
    <line x1="10" y1="10" x2="50" y2="10" stroke="currentColor" />

    <!-- 垂直线段 -->
    <line x1="0.7cm" y1="1cm" x2="0.7cm" y2="2cm" stroke="#f08a5d" stroke-width="0.2cm" />

    <!-- 倾斜线 -->
    <line x1="30" y1="30" x2="90" y2="90" stroke="#71c9ce" />

    <!-- 在style指定样式 -->
    <line x1="60" y1="30" x2="120" y2="90" style="stroke: #ffde7d; stroke-width: 10;" />

    <!-- 在css指定 class -->
    <line x1="100" y1="30" x2="160" y2="90" class="line4" />

    <!-- 不透明度 stroke-opacity -->
    <line x1="330" y1="10" x2="330" y2="120" style="stroke: #118df0; stroke-width: 5;" />
    <line x1="300" y1="20" x2="360" y2="20" style="stroke: #118df0; stroke-width: 5; stroke-opacity: 0.2;" />
    <line x1="300" y1="40" x2="360" y2="40" style="stroke: #118df0; stroke-width: 5; stroke-opacity: 0.4;" />
    <line x1="300" y1="60" x2="360" y2="60" stroke="#118df0" stroke-width="5" stroke-opacity="0.6" />
    <line x1="300" y1="80" x2="360" y2="80" stroke="#118df0" stroke-width="5" stroke-opacity=".8" />
    <line x1="300" y1="100" x2="360" y2="100" stroke="#118df0" stroke-width="5" stroke-opacity="1" />

    <!-- 虚线 stroke-dasharray -->
    <!-- 10像素虚线，4像素空隙 -->
    <line
      x1="10" y1="150" x2="490" y2="150" stroke="#415f9d" stroke-width="4"
      stroke-dasharray="10, 4"
    />

    <!-- 5像素虚线，3像素空隙，20像素虚线，12像素空隙 -->
    <!-- 可以使用空格的方式分隔 -->
    <line
      x1="10" y1="170" x2="490" y2="170" stroke="#415f9d" stroke-width="4"
      stroke-dasharray="5 3 20 12"
    />

    <!-- 奇数情况：10像素虚线，3像素缝隙，20像素虚线，10像素缝隙，3像素虚线...... -->
    <line
      x1="10" y1="190" x2="490" y2="190" stroke="#415f9d" stroke-width="4"
      stroke-dasharray="10, 3, 20"
    />

  </svg>

  <aside class="explain">
    <ul>
      <li>line 是线段标签</li>
      <li>x1和y1是起点坐标；x2和y2是终点坐标</li>
      <li>stroke 笔画颜色，可以使用颜色关键字、6位十六进制、3位十六进制、rgb和currentColor表示。currentColor代表继承父容器的color</li>
      <li>其他表示颜色的方法：rgba()、hsl()、hsla()、transparent，这些都是来自CSS3颜色规范，不输入SVG1.1规范，可能存在一定兼容性问题</li>
      <li>stroke-width 是画笔宽度，可以在 style 指定</li>
      <li>stroke-opacity 控制线条不透明度。取值范围：0 ~ 1，0代表完全透明，1代表完全不透明。小于0的值会更改为0，大于1的值会更改为1.</li>
      <li>stroke-dasharray 点线或虚线。值为数字构成，代表虚线和缝隙的长度，数字间用逗号或者空格分隔。注意最下面那条线是奇数的情况。</li>
    </ul>
  </aside>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
  store.commit('setComponentPath', 'src/views/SVG/Basic/pages/BasicShape/Line.vue')
})
</script>

<style lang="scss" scoped>
.svg__x {
  width: 500px;
  height: 200px;
  border: 1px solid #ccc;
}

.line4 {
  stroke: #9896f1;
  stroke-width: 6;
}

.explain {
  ul > li {
    margin-bottom: 16px;
  }
}
</style>