import Vue from 'vue'
import Meta from 'vue-meta'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuefire from 'vuefire'
import { auth, storage,  db, rtdb } from './firebase.js'

Vue.use(Vuefire)
Vue.use({ auth, storage, db, rtdb })
Vue.use(Meta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
