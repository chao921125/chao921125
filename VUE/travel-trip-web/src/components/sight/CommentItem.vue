<template>
    <!-- 评论列表的每一项 -->
    <div class="comment-item-box">
        <div class="cmt-header">
            <div class="rate">
                <van-rate v-model="item.score" :count="6" readonly allow-half />
            </div>
            <div class="user">{{ item.user.nickname || '匿名用户' | unameFormat }} {{ item.created_at }}</div>
        </div>
        <div class="cmt-content">
            <p>{{ item.content }}</p>
        </div>
        <div class="cmt-imgs">
            <van-image
            width="100"
            height="100"
            :src="img.img"
            @click="show=true"
             v-for="(img,index) in item.images" :key="index"
            />
        </div>
        <!-- 图片预览 -->
        <van-image-preview v-model="show" :images="imgageUrls" @change="onChange" loop>
          <template v-slot:index>第{{ index+1 }}页</template>
        </van-image-preview>
    </div>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      value: 4.5,
      show: false,
      index: 0,
      images: []
    }
  },
  computed: {
    // 大图预览处理的数据
    imgageUrls () {
      return this.item.images.map(i => i.img)
    }
  },
  methods: {
    onChange (index) {
      this.index = index
    }
  }
}
</script>

<style lang="less" >
.comment-item-box {
  padding: 50px 10px;
  border-bottom: 1px solid #f6f6f6;

  .cmt-header {
    display: flex;
    justify-content: space-between;
  }

  .user {
    font-size: 12px;
  }

  .cmt-content {
    color: #616161;
    padding: 5px 0px;
    text-align: left;
    font-size: 12px;
    line-height: 2.0;
  }

  .cmt-imgs {
    padding: 5px;
    text-align: left;
    margin-right: 5px;
  }
}

</style>
