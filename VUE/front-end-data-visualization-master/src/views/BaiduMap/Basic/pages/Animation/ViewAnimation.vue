<!-- BMap - 动画 ViewAnimation -->
<template>
  <div class="map__x">
    <div id="container"></div>
    <button @click="handleStart">start</button>
    <button @click="handleCancel">cancel</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// 百度地图 ViewAnimation 文档：https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html#a7b0

let map = null
let point = null

function initMap() {
  map = new BMapGL.Map('container') // 这里填入的是容器的 ID
  point = new BMapGL.Point(116.404, 39.915)
  map.centerAndZoom(point, 20) // 设置中心点和基础缩放级别
  map.enableScrollWheelZoom(true) // 允许滚轮缩放
  map.setTilt(50)
  map.setHeading(0)
}

const KeyFrames = [
    {
			center: new BMapGL.Point(116.307092,40.054922),
			zoom:20,
			tilt: 50,
			heading: 0,
			percentage: 0
		},
		{
			center: new BMapGL.Point(116.307631,40.055391),
			zoom: 21,
			tilt: 70,
			heading: 0,
			percentage: 0.1
		},
		{
			center: new BMapGL.Point(116.306858,40.057887),
			zoom:21,
			tilt: 70,
			heading: 0,
			percentage: 0.25
		},
		{
			center: new BMapGL.Point(116.306858,40.057887),
			zoom:21,
			tilt: 70,
			heading: -90,
			percentage: 0.35
		},
		{
			center: new BMapGL.Point(116.307904,40.058118),
			zoom: 21,
			tilt: 70,
			heading: -90,
			percentage: 0.45
		},
		{
			center: new BMapGL.Point(116.307904,40.058118),
			zoom: 21,
			tilt: 70,
			heading: -180,
			percentage: 0.55
		},
		{
			center: new BMapGL.Point(116.308902,40.055954),
			zoom:21,
			tilt: 70,
			heading: -180,
			percentage: 0.75
		},
		{
			center: new BMapGL.Point(116.308902,40.055954),
			zoom:21,
			tilt: 70,
			heading: -270,
			percentage: 0.85
		},
		{
			center: new BMapGL.Point(116.307779,40.055754),
			zoom:21,
			tilt: 70,
			heading: -360,
			percentage: 0.95
		},
		{
			center: new BMapGL.Point(116.307092,40.054922),
			zoom:20,
			tilt: 50,
			heading: -360,
			percentage: 1
		}
  ]
const opts = {
  delay: 100,
  duration: 10000,
  interation: 'INFINITE'
}
const animation = new BMapGL.ViewAnimation(KeyFrames, opts)

// 动画开始时触发，如果配置了delay，则在delay后触发
animation.addEventListener('animationstart', () => {
  console.log('start')
})


// 当动画循环大于1次时，上一次结束既下一次开始时触发。最后一次循环结束时不触发
animation.addEventListener('animationiterations', () => {
  console.log('animationiterations')
})

// 动画结束时触发，如果动画中途被终止，则不会触发
animation.addEventListener('animationend', () => {
  console.log('animationend')
})

// 动画中途被终止时触发
animation.addEventListener('animationcancel', () => {
  console.log('animationcancel')
})

function handleStart() {
  map.startViewAnimation(animation)
}

function handleCancel() {
  map.cancelViewAnimation(animation)
}

onMounted(() => {
  initMap()
	store.commit('setComponentPath', 'src/views/BaiduMap/Basic/pages/Animation/ViewAnimation.vue')
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