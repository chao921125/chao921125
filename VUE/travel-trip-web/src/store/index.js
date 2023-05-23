import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {

    },
    profile: {

    }
  },

  mutations: {
    updateUserInfo (state, {user, profile}) {
      // 覆盖用户信息
      state.user = {
        ...state.user,
        ...user
      }
      state.profile = {
        ...state.profile,
        ...profile
      }
    },
    deleteUserInfo (state) {
      // 覆盖用户信息
      state.user = {}
      state.profile = {}
    }
  },
  actions: {
  },
  modules: {
  }
})
