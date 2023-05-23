<template>
    <div class="sort">
        <div class="sort-title">字母排序</div>
        <ul class="sort-list">
            <li class="sort-item" v-for="(item,key) in cities" :key="item.id">
               {{key}}
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
export default{
    props:['cities'],
   
}
</script>

<style scoped>
.sort-title{
    font-size: .26rem;
    color:#212121;
    padding: .3rem;
    background:#edededf5;
}
.sort-list{
    background: #fff;
    font-size: .28rem;
}
.sort-item{
    width: 16.6666%;
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
    background: #fff;
}
</style>