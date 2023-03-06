<template>
  <div>
    <canvas id="canvas" width="600" height="600" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'
import logo from '@/assets/images/logo.png'

const store = useStore()

/**
 * 组的方法
 * getObjects() 返回一组中所有对象的数组
 * size() 所有对象的数量
 * contains() 检查特定对象是否在group中
 * item() 组中元素
 * forEachObject() 遍历组中对象
 * add() 添加元素对象
 * remove() 删除元素对象
 * fabric.util.object.clone() 克隆，详情可看https://blog.csdn.net/qq_43759079/article/details/115357084?spm=1001.2014.3001.5501
 */

let canvas = null

function init() {
  canvas = new fabric.Canvas('canvas')

  // 椭圆
  const ellipse = new fabric.Ellipse({
    top: 20,
    left: 20,
    rx: 100,
    ry: 50,
    fill: '#ddd',
    originX: 'center', // 旋转x轴：left, right, center
    originY: 'center' // 旋转y轴：top, bottom, center
  })

  // 文本
  const text = new fabric.Text('Hello World', {
    top: 40,
    left: 20,
    fontSize: 20,
    originX: "center",
    originY: "center"
  })

  // 建组
  const group1 = new fabric.Group([ellipse, text], {
    top: 50, // 整组距离顶部100
    left: 100, // 整组距离左侧100
    angle: -10, // 整组旋转-10deg
  })

  // 单独控制组内元素
  // 通过item()方法访问组中的单个对象

  // 控制第一个元素（椭圆）
  group1.item(0).set('fill', '#ea5455')

  // 控制第二个元素（文本）
  group1.item(1).set({
    text: '雷猴，世界',
    fill: '#fff'
  })

  canvas.add(group1)


  // 组1中的所有对象都相对于组的中心定位


  // 组2
  const circle1 = new fabric.Circle({
    radius:50,
    fill:"red",
    left:0
  })

  const circle2 = new fabric.Circle({
    radius:50,
    fill:"green",
    left:100
  })

  const circle3 = new fabric.Circle({
    radius:50,
    fill:"blue",
    left:200
  })

  const group2 = new fabric.Group([circle1, circle2, circle3], {
    left:50,
    top:200
  })

  canvas.add(group2)

  // 将矩形添加到group2中
  group2.add(new fabric.Rect({
    width: 50,
    height: 50,
    fill: 'orange',
    left: 0,
    top: 0,
    originX: "center",
    originY: "center",
  }))

  // 如果要把元素增加到组的范围之外，需要更新组
  group2.addWithUpdate(new fabric.Rect({
    width: 80,
    height: 80,
    fill: '#dcedc1',
    originX: "center",
    originY: "center",
    left: 400,
    top: group2.get("top"),
  }))

  // 在距组中心100px处添加矩形并更新组的尺寸
  group2.addWithUpdate(new fabric.Rect({
    width: 40,
    height: 40,
    fill: '#07689f',
    originX: "center",
    originY: "center",
    left:group2.get("left") + 100,
    top:group2.get("top") + 100
  }))



  // 图像组，需要注意异步问题。必须需要确保这些图像已完全加载才能建组
  fabric.Image.fromURL(logo, img => {
    let img1 = img.scale(0.3).set({left: 0, top: 0})

    fabric.Image.fromURL(logo, img => {
      let img2 = img.scale(0.3).set({left: 80, top: 0})

      fabric.Image.fromURL(logo, img => {
        let img3 = img.scale(0.3).set({left: 160, top: 0})

        canvas.add(
          new fabric.Group([img1, img2, img3], {left: 10, top: 400})
        )
      })
    })
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Groups/Groups.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>