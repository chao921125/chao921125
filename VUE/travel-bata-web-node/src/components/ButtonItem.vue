<template>
    <tarbar  class="tarbar">
        <tarbaritem to=''>
            <img slot='Tar-Img' src="" alt="">
            <img slot='Tar-Img-Active' src="" alt="">
            <div slot="Tar-Text">首页</div>
        </tarbaritem>
    </tarbar>

</template>

<script>
import tarbaritem from './TarBarItem'
import tarbar from './TarBar'

export default {
   components:{
    tarbaritem,
    tarbar
  },

}
</script>

<style>
.tarbar{
    height: 100px;
    widows: 100px;
}
</style>