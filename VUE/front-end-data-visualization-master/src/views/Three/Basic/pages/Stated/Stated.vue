<template>
  <div class="three__x" ref="ThreeBox"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Scene, WebGLRenderer, PerspectiveCamera, BoxGeometry, MeshBasicMaterial, Mesh } from 'three'

let scene,renderer,camera

const ThreeBox = ref(null) // 容器元素

// 创建图形
let geometry = new BoxGeometry(1, 1, 1)
let material = new MeshBasicMaterial({ color: 0x00ff00 })
let cube = new Mesh(geometry, material)

// 动画
const animate = () => {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}

//初始化所有函数 
const init = () => {
  //创建场景
  scene = new Scene()
  renderer = new WebGLRenderer()
  renderer.setSize(ThreeBox.value.offsetWidth, ThreeBox.value.offsetHeight)
  ThreeBox.value.appendChild(renderer.domElement)
  
  //创建相机  
  camera = new PerspectiveCamera(75, 1, 0.1, 1000)
  camera.position.z = 4

  scene.add(cube)
  animate()
}

const store = useStore()

onMounted(() => {
  store.commit('setComponentPath', 'src/views/OpenLayers/Basic/pages/Stated/Stated.vue')
  init()
})
</script>

<style lang="scss" scoped>
.three__x {
  width: 600px;
  height: 600px;
}
</style>