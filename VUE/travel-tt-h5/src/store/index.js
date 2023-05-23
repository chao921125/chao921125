
import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
Vue.use(Vuex);

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    /*
    getters: {
        doubleCity(){
            return state.city + " " + state.city;
        }
    }
    */
})









/*
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let defaultCity = "北京"
try {
    if (localStorage.city) {
        defaultCity = localStorage.city;
    }
} catch (e) { }

export default new Vuex.Store({
    state: {
        city: defaultCity
    },
    mutations: {
        changeCity(state, city) {
            state.city = city;
            try {
                localStorage.city = city;
            } catch (e) { }
        }
    }
})
*/

