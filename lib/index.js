import directive from './v-bound-click-outside'

const plugin = {
  install (Vue) {
    Vue.directive('bound-click-outside', directive)
  },
  directive
}

export default plugin
