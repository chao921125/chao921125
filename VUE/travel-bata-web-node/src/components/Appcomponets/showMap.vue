<template>
  <el-card class="card-box">
    <div id="container"></div>
  </el-card>
</template>
<script>
  import AMapLoader from '@amap/amap-jsapi-loader';
  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.map()
    },
    methods: {
      map() {
        AMapLoader.load({
          //注册开发者/创建应用，选择web端JS API（必须）
          key: 'd3ab15847081d45882bf8b3be4030721', //首次load必填、密钥在index.html首页
          version: '2.0',
          plugins: ['AMap.Scale', 'AMap.ToolBar','AMap.MapType']
        }).then((AMap) => {
          const map = new AMap.Map('container',{
            center: [109.262448,22.681257],//传入当前位置
            zoom: 15
          });//const map = new AMap.Map('container',{}) 若填写空，默认当前位置、无括号则定位在北京
          map.addControl(new AMap.Scale())//显示缩小范围大小
          // map.addControl(new AMap.MapType())
          map.addControl(new AMap.ToolBar())//显示加减按钮
          map.add(new AMap.Marker({
            position: map.getCenter()
          }));//中心标点坐标

        }).catch((e) => {
          console.error(e);
        });
      }
    }
  }
</script>

<style>
  .card-box {
    width: 100%;
    height: 400px;
  }
  #container {
    width: 100%;
    height: 360px;
  }
</style>
