<template>
    <div class="hot">
        <div class="hot-top">
            <img src="@/assets/images/Hot/热门.png">
            <span>本周热门榜单</span>
            <router-link to="/bandan">
                <span class="hot-title">全部榜单 ></span>
            </router-link>
        </div>
        <ul class="hot-list">
            <li class="hot-item" v-for="item in hotList" :key="item.id">
                <img :src='item.imgUrl'>
                <p>{{item.title}}</p>
                <p>
                    <span class="hot-mark">￥{{item.mark}}</span>起
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                hotList:[
                    {
                        id:'01',
                        imgUrl:require('@/assets/images/Hot/故宫.jpg'),
                        title:'北京故宫',
                        mark:'20'
                    },
                    {
                        id:'02',
                        imgUrl:require('@/assets/images/Hot/广州塔.jpg'),
                        title:'广州塔',
                        mark:'20'
                    },
                    {
                        id:'03',
                        imgUrl:require('@/assets/images/Hot/黄埔军校.jpg'),
                        title:'广州黄埔军校',
                        mark:'20'
                    },
                    {
                        id:'04',
                        imgUrl:require('@/assets/images/Hot/广东博物馆.jpg'),
                        title:'广东省博物馆',
                        mark:'20'
                    }
                ]
            }
        }   
    }
</script>
<style scoped lang="stylus">

.hot{
    margin-top:.1rem;
    background: #fff;
    font-size: .28rem;
}
.hot-top{
    padding: .2rem;
    position: relative;
}
.hot-top img{
    display: inline-block;
    width:.3rem;
}
.hot-top span{
    color:#212121;
    font-size: .32rem;
}
.hot-top .hot-title{
    position: absolute;
    right: .2rem;
    color: #616161;
    font-size:.28rem;
    bottom: 10px; 
}
.hot-list{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space:nowrap;
    height: 3rem;
}
.hot-item{
    padding: 2rem;
    display: inline-block;
    padding: 0 .2rem;
    width: 2rem;
    height: 2rem;
}
.hot-item img{
    width: 100%;
    height: 100%;
}
.hot-item p{
    text-align: center;
    margin-top: .1rem;
    font-size: .25rem;
    white-space: nowrap; /* 解决文字溢出 */
    text-overflow: ellipsis;
    overflow: hidden;
}
.hot-item p .hot-mark{
    color: #ff8300;
    font-size: .32rem;
}
</style>