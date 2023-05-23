<template>
    <div class="hot">
        <div class="hot-title">热门城市</div>
        <ul class="hot-list">
            <!-- <li class="hot-item"  
            v-for="item in hotCities" :key="item.id" >
                {{item.name}}
            </li> -->
            <li class="hot-item">
                北京
            </li>
            <li class="hot-item">
                拉萨
            </li>
            <li class="hot-item">
                上海
            </li>
            <li class="hot-item">
                深圳
            </li>
            <li class="hot-item">
                广州
            </li>
            <li class="hot-item">
                哈尔滨
            </li>
            <li class="hot-item">
                重庆
            </li>
            <li class="hot-item">
                成都
            </li>
            <li class="hot-item">
                香港
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
export default{
    /** 
    data(){
        return {
            hotCities: [{
			"id": 1,
			"spell": "beijing",
			"name": "北京"
		},
        {
			"id": 2,
			"spell": "beijing",
			"name": "哈尔滨"
		},
        {
			"id": 3,
			"spell": "beijing",
			"name": "重庆"
		},
        {
			"id": 4,
			"spell": "beijing",
			"name": "广州"
		},
        {
			"id": 5,
			"spell": "beijing",
			"name": "深圳"
		},
        {
			"id": 6,
			"spell": "beijing",
			"name": "成都"
		},
        {
			"id": 7,
			"spell": "beijing",
			"name": "上海"
		},
        {
			"id": 8,
			"spell": "beijing",
			"name": "三亚"
		},
        {
			"id": 9,
			"spell": "beijing",
			"name": "香港"
		},
        ]
        }
    } */
}
</script>

<style scoped>
.hot-title{
    font-size: .26rem;
    color:#212121;
    padding: .3rem;
    background:#edededf5;
}
.hot-list{
    background: #fff;
    font-size: .28rem;
}
.hot-item{
    width: 33.3333%;
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
    border-bottom:.02rem solid gray ;
    background: #fff;
}
</style>