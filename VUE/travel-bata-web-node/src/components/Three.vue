<template>
  <div class="SourceClass">

    <div class="commentModules">
      <comment></comment>
    </div>
    <div class="center">
      <showComment></showComment>
    </div>
    <div class="commentpage">
      <el-pagination background layout="prev, pager, next" :total="100">
      </el-pagination>
    </div>
  </div>
</template>


<script>
  import comment from './Appcomponets/comment.vue'
  import showComment from './Appcomponets/showComment.vue'
  
  export default {
    data() {
      return {

      }
    },
    components: {
      comment,
      showComment,
    }
  }
</script>

<style scoped>
  .SourceClass {
    width: 100%;
  }

  .title {
    padding-left: 25%;
    width: 25rem;
  }

  .commentModules {
    float: left;
    height: 100%;
    margin: 80px 24% 20px;
    width: 50%;
  }

  .commentpage {
  /*  margin: 0px 24% 20px 35%; */
    width: 100%;
    text-align: center;
    float: left;
  }

  .center {
    margin-bottom: 100px;
    width: 100%;
    height: 100%;
    float: left;
  }
</style>
