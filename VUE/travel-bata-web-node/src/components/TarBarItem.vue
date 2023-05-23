<template>
    <div class="tarbaritem" :to='to' @click='routerClick'>
        <div v-if="!isActive"><slot name="Tar-Img"></slot></div>
        <div v-else><slot name="Tar-Img-Active"></slot></div>
        <div :style="isActiveColor"><slot name="Tar-Text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'tarbaritem',
    data(){
        return{
            
        }
    },
    props:{
        to:{
            type:String,
            default:'',
            required:true
        },
        activeColor:{
            type:String,
            default:'#ff0000'
        }

    },
    methods:{
        routerClick(){
            this.$router.push(this.to);

        },
        
    },
    computed:{
        isActive(){
            return this.$router.path.indexOf(this.to) !== -1
        },
        isActiveColor(){
            if(this.isActive){
                return {color:this.activeColor}
            }
        }
    }

}
</script>

<style>

</style>