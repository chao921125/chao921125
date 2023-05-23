<template>
<div class="rec_wrap">
    <div class="rw_tit">周末去哪儿</div>
    <div class="rw_list">
        <div class="rl_li" >
            <router-link :to="'/detail/' + item.id" class="a" v-for="item of list" :key="item.id">
                <div class="pic">
                    <img :src="item.imgUrl" alt class="img">
                </div>
                <div class="info">
                    <div class="tit">{{item.infoTit}}</div>
                    <div class="txt">{{item.infoTxt}}</div>
                </div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "HomeWeekend",
    props: {
        list: Array
    }
};
</script>

<style lang="stylus" scoped>
@import '~style/mixins';
@import '~style/varibles';
.rec_wrap {
    background-color: #f4f4f4;
    .rw_tit {
        font-size: 0.32rem;
        color: #333;
        padding: 0.2rem;
    }
    .rw_list {
        .rl_li {
            margin-bottom: 0.1rem;
            .a {
                color: #333;
                .pic {
                    width: 100%;
                    .img {
                        width: 100%;
                    }
                }
                .info {
                    box-sizing: border-box;
                    padding: 0.2rem;
                    background-color: #fff;
                    .tit {
                        font-size: 0.28rem;
                        ellipsic();
                    }
                    .txt {
                        font-size: 0.22rem;
                        color: #666;
                        margin-top: 0.2rem;
                        ellipsic();
                    }
                }
            }
        }
    }
}
</style>