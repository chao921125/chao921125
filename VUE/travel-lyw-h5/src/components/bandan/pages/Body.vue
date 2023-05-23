<template>
    <div class="like">
        <div class="like-top">
            
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
                        imgUrl:require('@/assets/images/Like/拉萨.jpg'),
                        title:'拉萨风景区',
                        mark:'18.8',
                        message:'1341',
                        map:'吉阳区',
                    },
                    {
                        id:'02',
                        imgUrl:require('@/assets/images/Like/纳木错.jpg'),
                        title:'纳木错风景区',
                        mark:'200',
                        message:'1341',
                        map:'吉阳区',
                    },
                    {
                        id:'03',
                        imgUrl:require('@/assets/images/Like/东门老街.jpg'),
                        title:'东门老街风景区',
                        mark:'18.8',
                        message:'1341',
                        map:'吉阳区',
                    },
                    {
                        id:'04',
                        imgUrl:require('@/assets/images/Like/长隆.jpg'),
                        title:'长隆欢乐世界',
                        mark:'145.0',
                        message:'1341',
                        map:'吉阳区',
                    },
                    {
                        id:'05',
                        imgUrl:require('@/assets/images/Like/重庆欢乐谷.jpg'),
                        title:'重庆欢乐谷',
                        mark:'18.8',
                        message:'1341',
                        map:'吉阳区',
                    },
                    {
                        id:'06',
                        imgUrl:require('@/assets/images/Like/三亚.jpg'),
                        title:'三亚风景区',
                        mark:'18.8',
                        message:'1341',
                        map:'吉阳区',
                    },
                    {
                        id:'07',
                        imgUrl:require('@/assets/images/Like/丽江.jpg'),
                        title:'丽江风景区',
                        mark:'22',
                        message:'2322',
                        map:'古城区',
                    },
                    {
                        id:'08',
                        imgUrl:require('@/assets/images/Like/青海湖.jpg'),
                        title:'青海湖风景区',
                        mark:'18.8',
                        message:'1024',
                        map:'刚察县',
                    },
                    {
                        id:'09',
                        imgUrl:require('@/assets/images/Like/东门老街.jpg'),
                        title:'东门老街风景区',
                        mark:'18.8',
                        message:'1341',
                        map:'吉阳区',
                    },
                    {
                        id:'10',
                        imgUrl:require('@/assets/images/Like/长隆.jpg'),
                        title:'长隆欢乐世界',
                        mark:'145.0',
                        message:'1341',
                        map:'吉阳区',
                    },
                    {
                        id:'11',
                        imgUrl:require('@/assets/images/Like/重庆欢乐谷.jpg'),
                        title:'重庆欢乐谷',
                        mark:'18.8',
                        message:'1341',
                        map:'吉阳区',
                    },
                    {
                        id:'12',
                        imgUrl:require('@/assets/images/Like/三亚.jpg'),
                        title:'三亚风景区',
                        mark:'18.8',
                        message:'1341',
                        map:'吉阳区',
                    },
                    {
                        id:'13',
                        imgUrl:require('@/assets/images/Like/丽江.jpg'),
                        title:'丽江风景区',
                        mark:'22',
                        message:'2322',
                        map:'古城区',
                    },
                    {
                        id:'14',
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