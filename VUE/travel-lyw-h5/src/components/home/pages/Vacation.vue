<template>
    <div class="vacation">
        <div class="vacation-title">
            周末去哪儿
        </div>
        <ul>
            <li class="vacation-item" v-for="item in VacationList" :key="item.id">
                <div class="vacation-img">
                    <img :src="item.imgUrl">
                </div>
                <div class="vacation-msg">
                    <p>{{item.pOne}}</p>
                    <p>{{item.pTwo}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                VacationList:[
                    {
                        id:'01',
                        imgUrl:require('@/assets/images/Vacation/激流勇进.jpg'),
                        pOne:'漂流勇进,烧烤露营',
                        pTwo:'轻松水上漂,任我乐逍遥'
                    },
                    {
                        id:'02',
                        imgUrl:require('@/assets/images/Vacation/广州.jpg'),
                        pOne:'广州必游TOP10',
                        pTwo:'来广州必去的非这些地方莫属'
                    },
                    {
                        id:'03',
                        imgUrl:require('@/assets/images/Vacation/太和殿.jpg'),
                        pOne:'寻找北京的皇城范儿',
                        pTwo:'数百年的宫廷庙宇,至今依旧威严霸气'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
.vacation-title{
    font-size:.32rem;
    padding: .24rem;
    border-top: 5px solid #f0f0f0;
}
.vacation-item{
    background: #fff;
    font-size: .28rem;
}
/* .vacation-img{
    padding-bottom: 37.4375%;
} */
.vacation-img img{
    width: 100%;
    height: 4.2rem;
    display: block;
}
.vacation-msg{
    padding: .1rem 0 .1rem .2rem;
}
.vacation-msg p{
    margin-top:.1rem;
}
.vacation-msg p+p{
    color: #616161;
    font-size: .20rem;
}
</style>