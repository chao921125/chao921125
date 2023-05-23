<template>
  <div id="app">
    <title>{{htmlbt}}</title>
    <Goodfalls></Goodfalls>
  </div>
</template>

<script>
  import Goodfalls from './components/Goodfalls.vue'

  export default {
    name: 'App',
    components: {
      Goodfalls

    },
    data() {
      return {
        htmlbt: '旅游网站',
      }
    },
  }
</script>

<style scoped>
  @import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");
  /* 导入外部css 导航栏专用*/


  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #999;
    margin-top: 0px;
    height: 100%;
    width: 100%;
  }
