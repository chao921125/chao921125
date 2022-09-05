<!-- BMap - 绘制文本 -->
<template>
  <div class="map__x">
    <div id="container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// label点击事件
function labelClick(e) {
  alert(e.target.content)
}

const label = ref(null)

function initMap() {
  const map = new BMapGL.Map('container') // 这里填入的是容器的 ID
  const point = new BMapGL.Point(113.942651, 22.53945)
  map.centerAndZoom(point, 12) // 设置中心点和基础缩放级别
  map.enableScrollWheelZoom(true) // 允许滚轮缩放

  label.value = new BMapGL.Label('数据可视化 - 数据可视化', {
    position: point, // 出现的坐标点
    offset: new BMapGL.Size(-100, 20) // 位移
  })

  label.value.setStyle({ // 修改样式
    width: '220px',
    height: '50px',
    padding: '20px',
    color: '#07689f',
    fontSize: '20px',
    background: '#b9d7ea',
    border: '10px solid #8c82fc'
  })

  // label 添加点击事件
  label.value.addEventListener('click', labelClick)

  map.addOverlay(label.value)
}

onMounted(() => {
  initMap()
  store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/Layer/DrawLabel.vue')
})

onUnmounted(() => {
  // 组件销毁时删除监听事件
  label.value.removeEventListener('click', labelClick)
})
</script>

<style lang="scss" scoped>
// 必须手动为地图容器设置宽高
#container {
  width: 600px;
  height: 600px;
}

// 隐藏右下角“百度地图”logo
:deep(.anchorBL) {
  display: none;
}
</style>