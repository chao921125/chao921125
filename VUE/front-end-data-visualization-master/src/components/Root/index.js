import RootNav from './RootNav.vue'
import RootHeader from './RootHeader.vue'

const components = [
  RootNav,
  RootHeader
]

const install = function (Vue) {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
