import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import LandingPage from './pages/LandingPage.vue'
import Bands from './pages/Bands.vue'
import Cards from './pages/Cards.vue'
import Characters from './pages/Characters.vue'
import Songs from './pages/Songs.vue'
import Login from './pages/Login.vue'
import { createPinia } from 'pinia'
/* import the fontawesome core */

import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faRightToBracket)

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/songs', component: Songs },
  { path: '/cards', component: Cards },
  { path: '/bands', component: Bands },
  { path: '/login', component: Login },
  { path: '/characters', component: Characters },
  { path: '/:pathMatch(.*)', component: LandingPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.mount('#app')
