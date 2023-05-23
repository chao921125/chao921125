<template>
    <div class="icons border-bottom">
        <swiper :option="swiperOption">
            <swiper-slide v-for="item in page" :key="item.id">

                <div class="activity-item" v-for='page in item' :key="page.id">
                    <img :src='page.imgUrl'>
                    <p>{{page.title}} <span class="activity-price">￥{{page.price}}</span> <br/><span class="activity-p">{{page.p}}</span></p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default{
        data(){
            return{
                swiperOption:{},
                iconsList:[
                    {
                        id:'01',
                        imgUrl:require("@/assets/images/Activity/activity1.jpg"),
                        title:'广州-丽江',
                        price:'5207',
                        p:'含往返飞机票+2晚住宿'
                    },
                    {
                        id:'02',
                        imgUrl:require("@/assets/images/Activity/activity2.jpg"),
                        title:'广州-青海湖',
                        price:'3602',
                        p:'含往返飞机票+4晚住宿'
                    },
                    {
                        id:'03',
                        imgUrl:require("@/assets/images/Activity/activity3.jpg"),
                        title:'广州-三亚',
                        price:'2887',
                        p:'含往返飞机票+4晚住宿'
                    },
                    {
                        id:'04',
                        imgUrl:require("@/assets/images/Activity/activity4.jpg"),
                        title:'广州-三沙',
                        price:'9338',
                        p:'含往返飞机票+3晚住宿'
                    }
                ]
            }
        },
        computed:{
            page(){
                let pages = [];
                this.iconsList.forEach((item,index)=>{
                    let idx = Math.floor(index/4);
                    if(!pages[idx]) pages[idx] = [];
                    pages[idx].push(item)
                })
                return pages;
            }
        },
        swiperOption:{
                pagination:'.swiper-pagination',//分页圆点
                loop:false, //swiper不循环
            }
    }
</script>
<style scoped>
.activity-item{
    width:50%;
    padding-bottom:35.6%;
    height:0;
    float: left;
}
.activity-item img{
    width:80%;
    height: 1.6rem;
    display: block;
    margin: 0 auto;
    padding-top: .1rem;
}
.activity-item p{
    font-size: .30rem;
    margin-top: .1rem;
    text-align: center;
    color: #212121;
}
.activity-price{
    font-size: .35rem;
    color: #f9a20c;
}
.activity-item p .activity-p{
    font-size: .20rem;
    text-align: center;
    color: #212121;
}
.border-bottom{
    border-bottom:4px solid #f0f0f0;
}
</style>