<template>
  <div class="page-home">
    <h3>旅游网</h3>
    <Banner/>
    <Hot/>
    <Fine/>
    <MyFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '../components/home/Banner'
import Hot from '../components/home/Hot.vue'
import Fine from '../components/home/Fine.vue'
import MyFooter from '../components/common/Footer.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Hot,
    Fine,
    MyFooter
  }

}
</script>

<style lang="less" >

</style>
