<template>
  <!-- 景点评论 -->
  <div class="page-sight-comment">
    <!-- 顶部导航 -->
    <van-nav-bar left-text="返回" title="景点评论" left-arrow @click-left="onClickLeft" />
    <!-- 底部刷新加载组件 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list class="sight-comment"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="getCommentList"
      >
        <CommentItem v-for="item in commentList" :key="item.pk" :item="item" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import CommentItem from '@/components/sight/CommentItem.vue'
import { ajax } from '@/utils/ajax.js'
import { SightApis } from '@/utils/apis.js'

export default {
  data () {
    return {
      currentPage: 1,
      commentList: [],
      loading: false,
      finished: false,
      // 请求失败
      error: false,
      // 下拉刷新
      refreshing: false
    }
  },
  methods: {
    // 返回按钮方法
    onClickLeft () {
      this.$router.go(-1)
    },
    // 获取评论
    getCommentList () {
      const url = SightApis.sightCommentUrl.replace('#{id}', this.id)
      ajax.get(url, {
        params: {
          page: this.currentPage
        }
      }).then(res => {
        // 加载状态结束
        this.loading = false
        this.commentList = this.commentList.concat(res.data.objects)

        // 设置下一页的页码
        this.currentPage = res.data.meta.current_page + 1
        // 下拉刷新状态修改
        this.refreshing = false
        // 数据全部加载完成：当前页码==总页数
        if (res.data.meta.current_page === res.data.meta.page_count) {
          this.finished = true
        }
      }).catch(() => {
        this.loading = false
        this.error = true
        this.refreshing = false
      })
    },
    onRefresh () {
      // 清空数据
      this.commentList = []
      this.currentPage = 1
      // 重置刷新状态
      this.loading = false
      this.finished = false
      // 重新获取数据
      this.getCommentList()
    }
  },
  components: {
    CommentItem
  },
  created () {
    this.id = this.$route.params.id
    this.getCommentList()
  }
}
</script>

<style scoped>
.page-sight-comment {
  background-color: #fff;
}
</style>
