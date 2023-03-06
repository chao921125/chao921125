<!-- 多边形 -->
<template>
  <!-- 本例图形参考《SVG精髓》一书 -->
  <svg class="svg__x">
    <!-- 平行四边形 -->
    <polygon points="15,10 55,10 45,20 5,20" style="fill: red; stroke: black;" />

    <!-- 五角星 -->
    <polygon
      points="35,37.5 37.9,46.1 46.9,46.1 39.7,51.5 42.3,60.1 35,55 27.7,60.1 30.3,51.5 23.1,46.1 32.1,46.1"
      fill="#ccffcc"
      stroke="green"
    />

    <!-- 不规则图形 -->
    <polygon
      points="60,60 65,72 80,60 90,90 72,80 72,85 50,95"
      class="polygon3"
    />

    <!-- 星星 未填充 -->
    <polygon
      points="148,116 116,196 196,148 100,148 180,196"
      stroke="black"
      fill="none"
    />

    <!-- 星星 fill-rule: nonzero -->
    <polygon
      points="148,16 116,96 196,48 100,48 180,96"
      fill="yellow"
      stroke="black"
      fill-rule="nonzero"
    />

    <!-- 星星 fill-rule: evenodd -->
    <polygon
      points="248,16 216,96 296,48 200,48 280,96"
      fill="yellow"
      stroke="black"
      fill-rule="evenodd"
    />
  </svg>

  <aside class="explain">
    <ul>
      <li>polygon 是多边形标签</li>
      <li>points 指定一系列 x/一坐标对，并用逗号或空格分格</li>
      <li>表示坐标的数字个数必须是偶数</li>
      <li>指定坐标时不需要在最后指定返回起始坐标，因为图形是封闭的，会自动回到起始坐标</li>
      <li>fill-rule 交叉区域规则，值：nonzero / evenodd</li>
      <li>fill-rule: nonzero 在图形内部都填充</li>
      <li>fill-rule: evenodd 边线相交的次数，奇数则认为在图形内部；偶数认为在图形外部</li>
      <li>如果交叉的边线是从右往左画，则总数加1；如果交叉的边线从左往右画，则总数减1.如果最后总数为0，则认为该点在图形外部，否则认为在图形内部</li>
    </ul>
  </aside>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

store.commit('setComponentPath', 'src/views/SVG/Basic/pages/BasicShape/Polygon.vue')
</script>

<style lang="scss" scoped>
.svg__x {
  width: 500px;
  height: 200px;
  border: 1px solid #ccc;
}

.explain {
  ul > li {
    margin-bottom: 16px;
  }
}

.polygon3 {
  fill: yellow;
  fill-opacity: 0.5;
  stroke: black;
  stroke-width: 2;
}
</style>