<!--
 * @Author: zi.yang
 * @Date: 2021-04-02 22:35:27
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-09 07:28:10
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\pages\Detail.vue
-->
<template>
  <div>
    <detail-banner :sightName="sightName"></detail-banner>
    <detail-header></detail-header>
    <detail-base-info
      :score="score"
      :scoreText="scoreText"
      :comment="comment"
      :strategy="strategy"
      :address="address"
    ></detail-base-info>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from '@components/detail/Banner.vue';
import DetailHeader from '@components/detail/Header.vue';
import DetailList from '@components/detail/List.vue';
import DetailBaseInfo from '@components/detail/BaseInfo.vue';
import axios from 'axios';
export default {
  name: 'Detail',
  bannerImage: '',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailBaseInfo,
  },
  data() {
    return {
      sightName: '',
      list: [],
      score: '',
      scoreText: '',
      comment: '',
      strategy: '',
      address: '',
    };
  },
  mounted() {
    this.getDetailInfo();
  },
  methods: {
    getDetailInfo() {
      axios
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id,
          },
        })
        .then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.list = data.categoryList;
        this.score = data.score;
        this.scoreText = data.scoreText;
        this.comment = data.comment;
        this.strategy = data.strategy;
        this.address = data.address;
      }
    },
  },
};
</script>

<style lang="stylus" scoped></style>
