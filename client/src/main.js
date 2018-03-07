import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import VueSweetAlert from 'vue-sweetalert'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VueSweetAlert)
Vue.use(VModal)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
