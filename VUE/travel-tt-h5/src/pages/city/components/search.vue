<template>
<div class="search">
    <div>
        <input class="ipt" type="text" placeholder="输入城市名或拼音" v-model="keyword">
        <div class="search_content" ref="search" v-show="keyword">
            <ul>
                <li class="border-bottom" v-for="item of list" :key="item.id"  @click="handleCityClick(item.name)">{{item.name}} </li>
                <li class="border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from "better-scroll";
import {mapMutations} from 'vuex'
export default {
    name: "CitySearch",
    props: {
        cities: Object
    },
    data() {
        return {
            keyword: "",
            list: [],
            timer: null
        };
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    watch: {
        keyword() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            if (!this.keyword) {
                this.list = [];
                return;
            }
            this.timer = setTimeout(() => {
                const result = [];
                for (let i in this.cities) {
                    this.cities[i].forEach(value => {
                        if (
                            value.spell.indexOf(this.keyword) > -1 ||
                            value.name.indexOf(this.keyword) > -1
                        ) {
                            result.push(value);
                        }
                    });
                }
                this.list = result;
            }, 100);
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.search);
    },
    methods :{
    handleCityClick(city){
        // this.$store.dispatch("changeCity",city); // 派发
        //this.$store.commit("changeCity",city); // 提交
        this.changeCity(city);
    },
    ...mapMutations(['changeCity'])
}

};
</script>

<style lang="stylus" scoped>
@import '~style/varibles';
.search {
    background-color: $bgColor;
    overflow: hidden;
    padding: 0 0.2rem;
    height: 0.9rem;
    line-height: 0.9rem;
    background-color: #f5f5f5;
    .ipt {
        width: 100%;
        background-color: #fff;
        text-align: center;
        color: #666;
        height: 0.5rem;
        line-height: 0.5rem;
        box-sizing: border-box;
        padding: 0 0.2rem;
    }
    .search_content {
        overflow: hidden;
        position: absolute;
        z-index: 1;
        top: 3.0rem;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        background-color: #f5f5f5;
        padding: 0 0.2rem;
        box-sizing: border-box;
    }
}
</style>