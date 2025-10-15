import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import 'primeicons/primeicons.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShieldHalved, faHome, faPhone, faBars, faTimes,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faShieldHalved, faHome, faPhone, faBars, faTimes, faCalendar)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
