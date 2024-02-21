import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import LandingPage from './pages/landingpage.vue'
import Bands from './pages/Bands.vue'
import Cards from './pages/Cards.vue'
import Characters from './pages/Characters.vue'
import Songs from './pages/Songs.vue'
import Header from './components/Header.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/songs', component: Songs },
  { path: '/cards', component: Cards },
  { path: '/bands', component: Bands },
  { path: '/characters', component: Characters }

]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
