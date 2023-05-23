<template>
    <div class="header">

        <div class="header-left">
            <router-link to="./">
            <span class="iconfont">&#xe799;</span>
            </router-link>
        </div>

        <div class="header-title">
            城市选择
        </div>

    </div>
</template>
<script></script>

<style lang="stylus" scoped>
@import '../../../assets/css/var.styl'

.header{
    width:100%;
    line-height:.88rem;
    background: $bgColor;
    color:#fff;
    font-size:.32rem;
    position: relative;
}
.header-left{
    width:.4rem;
    padding:0 .2rem;
    text-align: center;
    font-weight: bold;
    position: absolute;
}
.header-search{
    flex:1;
    background: $textColor;
    height: .4rem;
    margin: .11rem;
    border-radius:.1rem;
    color: #e4e7ea;
    line-height:.4rem;
    font-size:.28rem;
    padding:.2rem;
}
.header-right{
    font-size:.28rem;
}

a{
    color: #fff
}
.header-title{
    text-align: center;
}
</style>