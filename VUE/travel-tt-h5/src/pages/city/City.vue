<template>
<div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleAlpChange"></city-alphabet>
    
</div>
</template>

<script>
import CityHeader from "./components/header";
import CitySearch from "./components/search";
import CityList from "./components/list";
import CityAlphabet from "./components/alphabet";
import axios from "axios";
export default {
    name: "City",
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data() {
        return {
            hotCities: [],
            cities: {},
            letter: ""
        };
    },
   
    methods: {
        getCityInfo() {
            axios.get("/api/city.json").then(this.getCitySuccess);
        },
        getCitySuccess(result) {
            if (result.data.ret && result.data.data) {
                const data = result.data.data;
                this.hotCities = data.hotCities;
                this.cities = data.cities;
            }
        },
        handleAlpChange(letter) {
            this.letter = letter;
        }
    },
    mounted() {
        this.getCityInfo();
    }
};
</script>

<style lang="stylus" scoped></style>