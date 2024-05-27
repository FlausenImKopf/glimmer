import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import VCalendar from 'v-calendar'
import 'v-calendar/style.css'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)
// Use plugin with optional defaults
app.use(VCalendar, {})

app.mount('#app')
