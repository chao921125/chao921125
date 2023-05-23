<template>
    <div id='tarbar' class="tarbar">
        <tarbaritem></tarbaritem>
    </div>
</template>

<script>

import tarbaritem from './TarBarItem.vue'
export default {
    name:'tarbar',
    data(){
        return{

        }
    },
    components:{tarbaritem},
}
</script>

<style>
.tarbar{
    
    background: rebeccapurple;
}
</style>