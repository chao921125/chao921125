<template>
  <el-carousel :interval="3000" type="card" height="300px" >
    <el-carousel-item v-for="item in imgs" :key="item.id" >
     <img :src="item.img"  width="100%" height="100%" ><!-- v-for图片循环 src用v-bind绑定后才能用item.img渲染 -->
    <!--  <h3 >{{ item.name }}</h3> -->
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
export default {
  data(){
    return{
      imgs:[
        {id:1,name:'img1',img:'https://img2.baidu.com/it/u=2317443502,2894783121&fm=26&fmt=auto'},
        {id:2,name:'img2',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20210729s%2F600%2Fw800h600%2F20210729%2F2792-1745492206c9323403972c07a3b79779.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644320291&t=f3c56f48bf6a563e92c113438766a3b2'},
        {id:3,name:'img3',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.itc.cn%2Fimages01%2F20210925%2F31cfa6ea249f4270824a0d46c8ec475c.jpeg&refer=http%3A%2F%2Fp0.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644323593&t=271d01ae5f649aedd08b1141cd5f38d6'},
        {id:4,name:'img4',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fq_70%2Fimages03%2F20210203%2F598ea89109a1400293a8290d9b7e8cea.jpeg&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644321484&t=33e56e48ac4e5a259b4ff4c46cc7c242'},
        {id:5,name:'img5',img:'https://img0.baidu.com/it/u=3613904737,3453130597&fm=253&fmt=auto&app=138&f=JPEG?w=798&h=500'},
        {id:6,name:'img6',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-3185492970-CE8B3F3AC081FEA1E7233E8EDF27C00C%2F0%3Ffmt%3Djpg%26size%3D144%26h%3D475%26w%3D900%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644320291&t=c832ce7ac7d7620f1d8e3dd6675add8e'},
      ]
    }
  }
}
</script>

<style>

</style>