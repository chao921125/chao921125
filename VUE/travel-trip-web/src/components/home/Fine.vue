<template>
  <!-- 精选景点组件 -->
  <div class="home-fine-box">
    <!-- 顶上导航 -->
    <van-cell
      title="精选景点"
      icon="location-o"
      is-link
      title-style="text-align:left"
      value="更多"
      :to="{name: 'Search', query: {isTop: 1}}"
    />
    <!-- // 顶上导航 -->
    <!-- 景点的列表 -->
    <div class="box-main">
      <ListSight v-for="item in dataList" :key="item.id" :item="item"/>
    </div>
    <!-- //景点的列表 -->
  </div>
</template>

<script>
import ListSight from '../common/ListSight.vue'
import { ajax } from '@/utils/ajax.js'
import { SightApis } from '@/utils/apis.js'

export default {
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    getDataList () {
      ajax.get(SightApis.sightListUrl, {
        params: {
          is_top: 1
        }
      }).then(res => {
        console.log('fine', res)
        this.dataList = res.data.objects
      })
    }
  },
  components: {
    ListSight
  },
  created () {
    this.getDataList()
  }
}
</script>

<style lang="less">
.home-fine-box {
  padding: 0 10px;

  .van-cell {
    padding: 10px 0px;
  }

  .box-main {
    padding-bottom: 50px;
  }
}

</style>
