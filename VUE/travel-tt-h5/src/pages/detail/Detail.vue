<template>
<div class="detail-content">
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header :sightName="sightName"></detail-header>
    <div class="content">
        <detail-list :categoryList="categoryList"></detail-list>
    </div>
</div>
</template>

<script>
import DetailBanner from "./components/banner";
import DetailHeader from "./components/header";
import DetailList from "./components/list";
import axios from "axios";
export default {
    name: "detail",
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data() {
        return {
            sightName: "",
            bannerImg: "",
            gallaryImgs: [],
            categoryList: []
        };
    },
    methods: {
        getDeatilInfo() {
            // axios.get("/api/detail.json?params" + this.$route.params.id)
            // 推荐把参数 params 放到对象中去使用：
            axios
                .get("/api/detail.json", {
                    params: {
                        id: this.$route.params.id
                    }
                })
                .then(this.getDEatilInfoSucc);
        },
        getDEatilInfoSucc(result) {
            if (result.data) {
                var data = result.data.data;
                this.sightName = data.sightName;
                this.bannerImg = data.bannerImg;
                this.gallaryImgs = data.gallaryImgs;
                this.categoryList = data.categoryList;
            }
        }
    },
    mounted() {
        this.getDeatilInfo();
    }
};
</script>

<style lang="stylus" scoped>
.detail-content {
    height: 20rem;
}
</style>