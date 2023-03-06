<template>
  <div>
    <div class="btn__x">
      <!-- 上传组件 -->
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :multiple="false"
        :show-file-list="false"
        :limit="1"
        accept=".jpg,.png"
        :before-upload="onProgress"
      >
        <el-button type="primary">上传</el-button>
      </el-upload>

      <!-- 保存按钮（序列化） -->
      <el-button @click="saveCanvas">保存：打开控制台查看</el-button>
    </div>

    <div>我没做任何文件格式强制限制，所以上传非图片格式是会报错的。</div>

    <!-- 画布 -->
    <canvas id="canvas" width="600" height="600" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

// 画布
let canvas = null

// 上传
function onProgress(file) {
  // 拿图片文件
  const reader = new FileReader()
  reader.readAsDataURL(file)

  // 图片文件完全拿到后执行
  reader.onload = () => {
    // 转换成base64格式
    const base64Img = reader.result

    // 将base64图片设置成背景
    canvas.setBackgroundImage(
      base64Img,
      canvas.renderAll.bind(canvas) // 刷新画布
    )
  }
  return false
}

// 初始化画布
function init() {
  canvas = new fabric.Canvas('canvas')
}

// 保存
function saveCanvas() {
  console.log(canvas.toJSON())
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Demo/pages/UploadImg/UploadImg.vue')
  init()
})
</script>

<style lang="scss" scoped>
.btn__x {
  display: flex;

  .el-button {
    margin-right: 20px;
  }
}
</style>