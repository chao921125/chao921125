<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe799;</span>
        </div>
        <div class="header-search">
            <span class="iconfont">&#xe8b9;</span>
            输出城市/景点/游玩主题
        </div>
        <div class="header-right">
            <router-link to="/city">
            广州<span class="iconfont">&#xe903;</span>
            </router-link>
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
    font-size:.36rem;
    display: flex;
}
.header-left{
    width:.4rem;
    padding:0 .2rem;
    text-align: center;
    font-weight: bold;
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
</style>