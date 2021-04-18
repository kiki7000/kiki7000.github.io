import { createApp } from 'vue'
import './assets/css/index.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './plugins/fontawsome'

import App from './App.vue'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
