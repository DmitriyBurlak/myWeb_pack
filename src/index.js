import './js/common'
import './assets/css/main.css'
import './assets/scss/main.scss'
import './assets/scss/main.sass'

// Vue.js (Если не используем можно удалить)
window.Vue = require('vue')
import store from './store'

Vue.component('example-component', require('./components/Example.vue').default)

const app = new Vue({
  store,
  el: '#app'
})