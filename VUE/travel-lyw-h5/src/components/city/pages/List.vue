<template>
  <div class="list">
    <div v-for="(val,index) in cities" :key="val.id">
        <div class="list-title">{{index}}</div>
        <hr>
            <ul class="list-msg">
                <li class="list-item" v-for="list in val" :key="list.id">
                    {{list.name}}
                </li>
            </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:['cities'],
}
</script>

<style scoped>
.list-title{
    font-size: .26rem;
    color:#212121;
    padding: .3rem;
    background:#edededf5;
}
.list-item{
    width: 25%;
    line-height: .9rem;
    text-align: center;
    font-size: .28rem;
    float: left;
    border-bottom: .02rem solid #ddd;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.list-msg:before{
    content:" ";
    position: absolute;
    left: 25%;
    width: 25%;
    height: 100%;
    border-left: .02rem solid #ddd;
    border-right:.02rem solid #ddd;
}
.list-msg{
    /*********/
    display: flex; /* 解决了div乱窜 */
    width: 100%;
    flex-wrap: wrap;
    background: #fff;
}
</style>