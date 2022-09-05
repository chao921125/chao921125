<template>
  <div class="loading__x">
    <div class="explain">
      <p>组件位置：在 src/views/CSS/Pure/pages/Loading/components 里面找对应的文件名吧~</p>
      <p>收集了几十年的Loading动画，我懒得分类了，看到喜欢的就复制吧~</p>
      <p>方便的话帮我点下着几篇文章吧，<b>点赞</b>那种可以吗(低声哭泣)</p>
      <a href="https://juejin.cn/post/7037660617779445796" target="_blank">《纯css实现117个Loading效果（下）》</a>
      <a href="https://juejin.cn/post/7037636080539009038" target="_blank">《纯css实现117个Loading效果（中）》</a>
      <a href="https://juejin.cn/post/7037036742985121800" target="_blank">《纯css实现117个Loading效果（上）》</a>
    </div>
    <div class="main">
      <L1 />
      <L2 />
      <L3 />
      <L4 />
      <L5 />
      <L6 />
      <L7 />
      <L8 />
      <L9 />
      <L10 />
      <L11 />
      <L12 />
      <L13 />
      <L14 />
      <L15 />
      <L16 />
      <L17 />
      <L18 />
      <L19 />
      <L20 />
      <L21 />
      <L22 />
      <L23 />
      <L24 />
      <L25 />
      <L26 />
      <L27 />
      <L28 />
      <L29 />
      <L30 />
      <L31 />
      <L32 />
      <L33 />
      <L34 />
      <L35 />
      <L36 />
      <L37 />
      <L38 />
      <L39 />
      <L40 />
      <L41 />
      <L42 />
      <L43 />
      <L44 />
      <L45 />
      <L46 />
      <L47 />
      <L48 />
      <L49 />
      <L50 />
      <L51 />
      <L52 />
      <L53 />
      <L54 />
      <L55 />
      <L56 />
      <L57 />
      <L58 />
      <L59 />
      <L60 />
      <L61 />
      <L62 />
      <L63 />
      <L64 />
      <L65 />
      <L66 />
      <L67 />
      <L68 />
      <L69 />
      <L70 />
      <L71 />
      <L72 />
      <L73 />
      <L74 />
      <L75 />
      <L76 />
      <L77 />
      <L78 />
      <L79 />
      <L80 />
      <L81 />
      <L82 />
      <L83 />
      <L84 />
      <L85 />
      <L86 />
      <L87 />
      <L88 />
      <L89 />
      <L90 />
      <L91 />
      <L92 />
      <L93 />
      <L94 />
      <L95 />
      <L96 />
      <L97 />
      <L98 />
      <L99 />
      <L100 />
      <L101 />
      <L102 />
      <L103 />
      <L104 />
      <L105 />
      <L106 />
      <L107 />
      <L108 />
      <L109 />
      <L110 />
      <L111 />
      <L112 />
      <L113 />
      <L114 />
      <L115 />
      <L116 />
      <L117 />
    </div>
  </div>
</template>

<!-- 下面的代码都是组件引入和布局相关，和Loading无关的 -->

<script setup>
import { useStore } from 'vuex'
import L1 from './components/L1.vue'
import L2 from './components/L2.vue'
import L3 from './components/L3.vue'
import L4 from './components/L4.vue'
import L5 from './components/L5.vue'
import L6 from './components/L6.vue'
import L7 from './components/L7.vue'
import L8 from './components/L8.vue'
import L9 from './components/L9.vue'
import L10 from './components/L10.vue'
import L11 from './components/L11.vue'
import L12 from './components/L12.vue'
import L13 from './components/L13.vue'
import L14 from './components/L14.vue'
import L15 from './components/L15.vue'
import L16 from './components/L16.vue'
import L17 from './components/L17.vue'
import L18 from './components/L18.vue'
import L19 from './components/L19.vue'
import L20 from './components/L20.vue'
import L21 from './components/L21.vue'
import L22 from './components/L22.vue'
import L23 from './components/L23.vue'
import L24 from './components/L24.vue'
import L25 from './components/L25.vue'
import L26 from './components/L26.vue'
import L27 from './components/L27.vue'
import L28 from './components/L28.vue'
import L29 from './components/L29.vue'
import L30 from './components/L30.vue'
import L31 from './components/L31.vue'
import L32 from './components/L32.vue'
import L33 from './components/L33.vue'
import L34 from './components/L34.vue'
import L35 from './components/L35.vue'
import L36 from './components/L36.vue'
import L37 from './components/L37.vue'
import L38 from './components/L38.vue'
import L39 from './components/L39.vue'
import L40 from './components/L40.vue'
import L41 from './components/L41.vue'
import L42 from './components/L42.vue'
import L43 from './components/L43.vue'
import L44 from './components/L44.vue'
import L45 from './components/L45.vue'
import L46 from './components/L46.vue'
import L47 from './components/L47.vue'
import L48 from './components/L48.vue'
import L49 from './components/L49.vue'
import L50 from './components/L50.vue'
import L51 from './components/L51.vue'
import L52 from './components/L52.vue'
import L53 from './components/L53.vue'
import L54 from './components/L54.vue'
import L55 from './components/L55.vue'
import L56 from './components/L56.vue'
import L57 from './components/L57.vue'
import L58 from './components/L58.vue'
import L59 from './components/L59.vue'
import L60 from './components/L60.vue'
import L61 from './components/L61.vue'
import L62 from './components/L62.vue'
import L63 from './components/L63.vue'
import L64 from './components/L64.vue'
import L65 from './components/L65.vue'
import L66 from './components/L66.vue'
import L67 from './components/L67.vue'
import L68 from './components/L68.vue'
import L69 from './components/L69.vue'
import L70 from './components/L70.vue'
import L71 from './components/L71.vue'
import L72 from './components/L72.vue'
import L73 from './components/L73.vue'
import L74 from './components/L74.vue'
import L75 from './components/L75.vue'
import L76 from './components/L76.vue'
import L77 from './components/L77.vue'
import L78 from './components/L78.vue'
import L79 from './components/L79.vue'
import L80 from './components/L80.vue'
import L81 from './components/L81.vue'
import L82 from './components/L82.vue'
import L83 from './components/L83.vue'
import L84 from './components/L84.vue'
import L85 from './components/L85.vue'
import L86 from './components/L86.vue'
import L87 from './components/L87.vue'
import L88 from './components/L88.vue'
import L89 from './components/L89.vue'
import L90 from './components/L90.vue'
import L91 from './components/L91.vue'
import L92 from './components/L92.vue'
import L93 from './components/L93.vue'
import L94 from './components/L94.vue'
import L95 from './components/L95.vue'
import L96 from './components/L96.vue'
import L97 from './components/L97.vue'
import L98 from './components/L98.vue'
import L99 from './components/L99.vue'
import L100 from './components/L100.vue'
import L101 from './components/L101.vue'
import L102 from './components/L102.vue'
import L103 from './components/L103.vue'
import L104 from './components/L104.vue'
import L105 from './components/L105.vue'
import L106 from './components/L106.vue'
import L107 from './components/L107.vue'
import L108 from './components/L108.vue'
import L109 from './components/L109.vue'
import L110 from './components/L110.vue'
import L111 from './components/L111.vue'
import L112 from './components/L112.vue'
import L113 from './components/L113.vue'
import L114 from './components/L114.vue'
import L115 from './components/L115.vue'
import L116 from './components/L116.vue'
import L117 from './components/L117.vue'

const store = useStore()
store.commit('setComponentPath', 'src/views/Native/PureCSS/pages/Loading/Loading.vue')
</script>

<style lang="scss" scoped>
.loading__x > .explain {
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

.main {
  display: flex;
  flex-wrap: wrap;
}

// 布局用的，这段和loading无关
:deep(.com__box) {
  width: 160px;
  height: 160px;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading {
    margin-top: -15px;
  }

  h4.explain {
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 14px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>