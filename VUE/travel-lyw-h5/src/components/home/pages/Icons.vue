<template>
    <div class="icons">
        <swiper :option="swiperOption">
            <swiper-slide v-for="item in page" :key="item.id">

                <div class="icons-item" v-for='page in item' :key="page.id">
                    <img :src='page.imgUrl' to="/iconxq">
                    <p>{{page.title}}</p>
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
                        imgUrl:require("@/assets/images/Iconimg/线性明信片.png"),
                        title:'景点门票'
                    },
                    {
                        id:'02',
                        imgUrl:require("@/assets/images/Iconimg/景区直通车.png"),
                        title:'景区直通车'

                    },
                    {
                        id:'03',
                        imgUrl:require("@/assets/images/Iconimg/线性路牌指示牌.png"),
                        title:'必游榜单'

                    },
                    {
                        id:'04',
                        imgUrl:require("@/assets/images/Iconimg/线性夏日冷饮饮料鸡尾酒.png"),
                        title:'夏日玩水'

                    },
                    {
                        id:'05',
                        imgUrl:require("@/assets/images/Iconimg/线性冲浪板.png"),
                        title:'泡温泉'

                    },
                    {
                        id:'06',
                        imgUrl:require("@/assets/images/Iconimg/榜单.png"),
                        title:'一日游'

                    },
                    {
                        id:'07',
                        imgUrl:require("@/assets/images/Iconimg/线性岛屿.png"),
                        title:'神秘境地'

                    },
                    {
                        id:'08',
                        imgUrl:require("@/assets/images/Iconimg/线性游轮.png"),
                        title:'珠江夜游'

                    },
                    {
                        id:'09',
                        imgUrl:require("@/assets/images/Iconimg/线性沙滩椅.png"),
                        title:'大学生榜单'

                    },
                    {
                        id:'10',
                        imgUrl:require("@/assets/images/Iconimg/旅游景点.png"),
                        title:'全部游玩'

                    }
                ]
            }
        },
        computed:{
            page(){
                let pages = [];
                this.iconsList.forEach((item,index)=>{
                    let idx = Math.floor(index/8);
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
.icons-item{
    width:25%;
    padding-bottom:25%;
    height:0;
    float: left;
}
.icons-item img{
    width:1.1rem;
    height: 1.1rem;
    display: block;
    margin: 0 auto;
    padding-top: .2rem;
}
.icons-item p{
    font-size: .28rem;
    margin-top: .1rem;
    text-align: center;
    color: #212121;
}
</style>