import { createStore } from 'vuex'
import storeECharts from './modules/storeECharts'

export default createStore({
  state: {
    componentPath: ''
  },
  getters: {
    getComponentPath(state) {
      return state.componentPath
    }
  },
  mutations: {
    setComponentPath(state, path) {
      state.componentPath = path
    }
  },
  actions: {
  },
  modules: {
    storeECharts
  }
})
