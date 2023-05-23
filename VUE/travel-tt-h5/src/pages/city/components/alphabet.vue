<template>
<div class="alp_list">
    <div class="ul">
       <div class="li" :ref="item" v-for="item of letters" :key="item" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="handleAlpClick">{{item}}</div>
    </div>
</div>
</template>

<script>
export default {
    name: "CityAlphabet",
    props: {
        cities: Object
    },
    computed: {
        letters() {
            const letters = [];
            for (let i in this.cities) {
                letters.push(i);
            }
            return letters;
        }
    },
    data() {
        return {
            touchSataus: false,
            startY: 0,
            timer: null
        };
    },
    updated() {
        this.startY = this.$refs["A"][0].offsetTop;
    },
    methods: {
        handleAlpClick(e) {
            this.$emit("change", e.target.innerHTML);
        },
        handleTouchStart() {
            this.touchSataus = true;
        },
        handleTouchMove(e) {
            if (this.touchSataus) {
                if (this.timer) {
                    clearTimeout;
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 81;
                    const index = Math.floor((touchY - this.startY) / 22);
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit("change", this.letters[index]);
                    }
                }, 16);
            }
        },
        handleTouchEnd() {
            this.touchSataus = false;
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~style/varibles';

.alp_list {
    position: absolute;
    top: 3.5rem;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 0.44rem;

    .ul {
        .li {
            color: $ftColor;
            text-align: center;
            padding: 0 0.2rem;
        }
    }
}
</style>