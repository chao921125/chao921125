<!--
 * @Author: zi.yang
 * @Date: 2021-04-01 06:43:45
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-01 23:47:53
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\pages\City.vue
-->
<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios';
import CityHeader from '@components/city/Header';
import CitySearch from '@components/city/Search';
import CityList from '@components/city/List';
import CityAlphabet from '@components/city/Alphabet';
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: '',
    };
  },
  mounted() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(this.handleGteCityInfoSucc);
    },
    handleGteCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    },
  },
};
</script>

<style scoped></style>
