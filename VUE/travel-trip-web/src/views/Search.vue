<template>
  <!-- 搜索页面 -->
  <div class="page-search">
    <!-- 标题 -->
    <van-nav-bar
      v-if="isHome"
      title="搜索景点"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft" />

    <van-nav-bar title="搜索景点" v-else />
    <!-- //标题 -->
    <!-- 搜索框 -->
    <van-search
      v-if="1"
      v-model="sightName"
      show-action
      label="景点"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @clear="clear"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <!-- 搜索框下方的提示栏 -->
    <h2 v-if="isHot">热门推荐</h2>
    <h2 v-if="isTop">精选景点</h2>
    <!-- 景点列表 -->
    <!-- //景点列表 -->
    <div class="sight-list">
      <div class="box-main">
        <ListSight v-for="item in dataList" :key="item.id" :item="item" />
      </div>
    </div>
    <!-- 分页 -->
    <van-pagination
      v-model="currentPage"
      :total-items="totalItems"
      :items-per-page="perPage"
      @change="pageChange"
    />
    <!-- 页脚 -->
    <MyFooter v-if="!isHome"/>
  </div>
</template>

<script>
import ListSight from '@/components/common/ListSight.vue'
import MyFooter from '../components/common/Footer.vue'
import { ajax } from '@/utils/ajax.js'
import { SightApis } from '@/utils/apis.js'

export default {
  data () {
    return {
      sightName: '',
      // 当前页码
      currentPage: 1,
      // 每页数据大小
      perPage: 4,
      totalItems: 0,
      dataList: [],
      // 热门景点和精选景点
      isHot: '',
      isTop: ''
    }
  },
  computed: {
    isHome () {
      return this.isHot || this.isTop
    }
  },
  methods: {
    onSearch () {
      console.log('onSearch')
      if (!this.sightName) {
        this.$toast('请输入搜索词')
        return
      }
      // 重置状态
      this.dataList = []
      this.currentPage = 1
      // 执行查询
      this.getDataList()
    },
    clear () {
      // 重置状态
      this.dataList = []
      this.currentPage = 1
      this.getDataList()
    },
    pageChange () {
      this.getDataList()
    },
    // 点击返回按钮
    onClickLeft () {
      this.$router.go(-1)
    },
    getDataList () {
      ajax.get(SightApis.sightListUrl, {
        params: {
          name: this.sightName,
          page: this.currentPage,
          limit: this.perPage,
          is_top: this.isTop,
          is_hot: this.isHot
        }
      }).then(({ data: { meta, objects } }) => {
        // console.log('fine', data)
        this.dataList = objects
        this.totalItems = meta.total_count
      })
    }
  },
  created () {
    // 热门景点和精选景点
    this.isHot = this.$route.query.isHot
    this.isTop = this.$route.query.isTop
    this.getDataList()
  },
  components: {
    ListSight,
    MyFooter
  }
}
</script>

<style lang="less">
.page-search {
  h2 {
    font-size: 16px;
    text-align: left;
    padding: 5px 10px;
    margin: 0px;
  }
  padding-bottom: 60px;
  .sight-list {
    padding: 10px;
    background-color: #fff;
    margin-top: 10px;
  }
}
</style>
