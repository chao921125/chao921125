<template>
  <div class="city">
    <city-header></city-header>
    <city-hot></city-hot><!-- :hotCities='hotCities' -->
    <hr>
    <city-sort :cities='cities'></city-sort> <!--  -->
    <span>-</span>
    <city-list :cities='cities'></city-list>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './pages/Header'
import CityHot from './pages/Hot'
import CitySort from './pages/Sort'
import CityList from './pages/List'
export default {
    components:{
        CityHeader,
        CityHot,
        CitySort,
        CityList
    },
    data(){
      return {
        hotCities:[],
        cities:{},
      }
    },  
    /**/
    mounted(){
      axios.get('/city.json')
      .then((res)=>{
        let data = res.data.data;
        this.hotCities = data.hotCities;
        this.cities = data.cities;
      })
      .catch((e) => {}) // 解决Uncaught (in promise)
    }
    
}
</script>

<style>
.city{
  background: #fff;
}
span{
  color: #fff;
}
</style>