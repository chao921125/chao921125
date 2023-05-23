import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';


Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        username: 'user',
        admin: 'admin',
        info: {
            name: '',
            age: 18,
        },
    },
    getter:{

    }
})

export default store
//导出 store