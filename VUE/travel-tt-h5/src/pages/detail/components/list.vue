<template>
<div>
    <div class="list-con" v-for="(item,index) of categoryList" :key="index">
        <div class="list-tit border-bottom">
            <span class="ticket"></span>
            {{item.title}}
        </div>
        <div class="list-children">
            <div v-if="item.children" class="list-children-item">
                <detail-list :categoryList="item.children"></detail-list>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "DetailList",
    props: {
          categoryList: Array
    }
};
</script>

<style lang="stylus" scoped>
.list-con {
    .list-tit {
        position: relative;
        height: 0.88rem;
        line-height: 0.88rem;
        padding: 0 0.2rem 0 0.6rem;

        .ticket {
            display: inline-block;
            position: absolute;
            width: 0.36rem;
            height: 0.36rem;
            top: 0.26rem;
            left: 0.2rem;
            background: url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat;
            background-size: auto;
            margin-right: 0.1rem;
            background-size: 0.4rem 3rem;
        }
    }

    .list-children {
        padding: 0 0.2rem;

        .list-children-item {
            .ticket {
                background: none;
            }
        }
    }
}
</style>