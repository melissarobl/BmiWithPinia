import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

const app = createApp(App) //create app

//configure app...
// to use Pinia Store
const pinia = createPinia() //store
app.use(pinia) //use the store

//createApp(App).mount('#app') //make app and mount into browser
app.mount('#app') //mount configured app in browser