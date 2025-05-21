import './assets/main.scss'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import getAssetURL from '@/plugin/getAssetURL'
import '@/plugin/veeValidate'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(getAssetURL)
app.use(router)
app.use(head)
app.mount('#app')
