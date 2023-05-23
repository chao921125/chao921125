<template>
<div class="detail-header">
    <router-link class="header-abs" to="/" v-show="showAbs">
        <span class="iconfont">&#xe606;</span>
        <span class="ticket"></span>
    </router-link>
    <div class="header-fix" v-show="!showAbs" :style="opacityStyle">
        <router-link class="header-left" to="/">
            <span class="iconfont">&#xe606;</span>
        </router-link>
        <div class="header-center">{{sightName}}</div>
    </div>
</div>
</template>

<script>
export default {
    name: "DetailHeader",
    data() {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        };
    },
        props: {
        sightName: String
    },
    methods: {
        handleScroll() {
            console.log("scroll");
            const top = document.documentElement.scrollTop;
            if (top > 50) {
                let opacity = top / 120;
                opacity = opacity > 1 ? 1 : opacity;
                this.opacityStyle = {
                    opacity
                };
                this.showAbs = false;
            } else {
                this.showAbs = true;
            }
        }
    },
    activated() {
        window.addEventListener("scroll", this.handleScroll);
    },
    deactivated() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>

<style lang="stylus" scoped>
@import '~style/varibles';
.detail-header {
    .header-abs {
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: 0.68rem;
        height: 0.68rem;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        text-align: center;
        line-height: 0.68rem;
        color: #fff;
    }
    .header-fix {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: $bgColor;
        overflow: hidden;
        color: #fff;
        padding: 0.2rem;
        .header-left {
            position: absolute;
            top: 0.2rem;
            left: 0.2rem;
            color: #fff;
        }
        .header-center {
            text-align: center;
            margin: 0 0.2rem;
        }
    }
}
</style>