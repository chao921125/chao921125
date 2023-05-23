<template>
<div class="header">
    <router-link to="/">
        <div class="header_back">
            <span class="iconfont">&#xe606;</span>
        </div>
    </router-link>

    <div class="header_txt">城市选择</div>
</div>
</template>

<script>
export default {
    name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~style/varibles';
.header {
    position: relative;
    background-color: $bgColor;
    overflow: hidden;
    color: #fff;
    height: .72rem;
    line-height: .72rem;
    padding: 0 .2rem;
    .header_back {
        color: #fff;
        position: absolute;
    }
    .header_txt {
        text-align: center;
    }
}
</style>