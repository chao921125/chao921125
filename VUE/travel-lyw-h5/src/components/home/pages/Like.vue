<template>
    <div class="like">
        <div class="like-top">
            <img src="@/assets/images/Like/like.png">
            猜你喜欢
        </div>
        <ul>
            <li class="like-item" v-for="item in Likelist" :key="item.id">
                <div class="like-img">
                    <img :src="item.imgUrl">
                </div>  
                <div class="like-text border-bottom">
                    <div class="like-title">{{item.title}}</div>
                    <div class="like-message">{{item.message}}条评论</div>
                    <div class="like-map">
                        <span class="like-mark">￥<b>{{item.mark}}</b></span>
                        <span class="like-item-map">{{item.map}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                Likelist:[
                    {
                        id:'01',
                        imgUrl:require('@/assets/images/Like/三亚.jpg'),
                        title:'三亚风景区',
                        mark:'18.8',
                        message:'1341',
                        map:'吉阳区',
                    },
                    {
                        id:'02',
                        imgUrl:require('@/assets/images/Like/丽江.jpg'),
                        title:'丽江风景区',
                        mark:'22',
                        message:'2322',
                        map:'古城区',
                    },
                    {
                        id:'03',
                        imgUrl:require('@/assets/images/Like/青海湖.jpg'),
                        title:'青海湖风景区',
                        mark:'18.8',
                        message:'1024',
                        map:'刚察县',
                    }
                ]
            }
        }
    }
</script>
<style scoped>
.like{
    border-top: 6px solid #f0f0f0;
    margin-top: .2rem;
    font-size: .28rem;
    background: #fff;
    padding: 0 .2rem;
}
.like-top{
    padding:.15rem;
    font-size:.32rem;
}
.like-top img{
    width: .3rem;
    height: .3rem;
    display: inline-block;
}
.like-item{
    position: relative;
    padding: .2rem 0;
    overflow: hidden;
}
.like-img{
    float: left;
}
.like-img img{
    width: 2rem;
    height: 2rem;
}
.like-text{
    overflow: hidden;
    padding-left: .22rem ;
}
.like-title{
    font-size: .36rem;
    color: #212121;
    margin-top: .10rem;
}
.like-message{
    margin-top: .3rem;
    color: #616161;
    font-size: .24rem;
}
.like-map{
    margin-top: .3rem;
    color: #616161;
    position: relative;
}
.like-mark{
    color: #ff8300;
}
.like-mark b{
    font-size: .40rem;
}
.like-item-map{
    font-size: .32rem;
    position: absolute;
    right: 0;
    top: .1rem;
}
</style>