<template>
<div class="list_wrapper" ref="wrapper">
    <div>
        <div class="lw_section">
            <div class="ls_tit">当前城市</div>
            <div class="ls_li">
                <div class="button_box">
                    <div class="button">{{this.currentCity}}</div>
                </div>
            </div>
        </div>
        <div class="lw_section">
            <div class="ls_tit">热门城市</div>
            <div class="ls_li">
                <div class="button_box" v-for="item of hotCities" :key="item.id"  @click="handleCityClick(item.name)">
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="lw_section">
            <div v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="ls_tit">{{key}}</div>
                <div class="ls_li">
                   <div class="alp_li border-bottom" v-for="city of item" :key="city.id" @click="handleCityClick(city.name)">{{city.name}}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from "better-scroll";
import {mapState,mapMutations} from 'vuex';
export default {
    name: "CityList",
    props: {
        hotCities: Array,
        cities: Object,
        letter: String
    },
        computed:{
        ...mapState({
            currentCity : 'city'
        })
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper);
    },
    watch: {
        letter() {
            if (this.letter) {
                const element = this.$refs[this.letter][0];
                this.scroll.scrollToElement(element);
            }
        }
    },
methods :{
    handleCityClick(city){
        // this.$store.dispatch("changeCity",city); // 派发
       // this.$store.commit("changeCity",city); // 提交
       this.changeCity(city);
    },

    ...mapMutations(['changeCity'])
}


};
</script>

<style lang="stylus" scoped>
@import '~style/varibles';

.list_wrapper {
    overflow: hidden;
    position: absolute;
    top: 2.8rem;
    left: 0;
    right: 0;
    bottom: 0;

    .lw_section {
        .ls_tit {
            background-color: #f5f5f5;
            padding: 0.2rem;
            color: #212121;
            font-size: 0.24rem;
        }

        .ls_li {
            overflow: hidden;
            padding: 0 0.5rem 0.2rem 0.1rem;

            .button_box {
                width: 33.3%;
                float: left;
                box-sizing: border-box;
                padding: 0 0.1rem;
                margin-top: 0.2rem;

                .button {
                    font-size: 0.24rem;
                    border: 1px solid #ccc;
                    text-align: center;
                    padding: 0.1rem 0;
                }
            }

            .alp_li {
                padding: 0.2rem 0;
                padding: 0.2rem 0.1rem;
            }
        }
    }
}
</style>