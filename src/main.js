import './assets/main.scss'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import getAssetURL from '@/plugin/getAssetURL'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules' // 引入常用規則
import { localize, setLocale } from '@vee-validate/i18n'
// eslint-disable-next-line no-unused-vars
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

// 定義規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min) // 定義一個最小長度規則

configure({
  generateMessage: localize({
    zh_TW: {
      messages: {
        required: '{field} 為必填項',
        email: '{field} 必須是有效的電子郵件',
        min: '{field} 至少需要 {length} 個字元'
      },
      names: {
        name: '姓名',
        email: '電子郵件'
      }
    }
  })
})

setLocale('zh_TW')

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(getAssetURL)
app.use(router)
app.use(head)
app.component('VField', Field)
app.component('VForm', Form)
app.component('VErrorMessage', ErrorMessage)
app.mount('#app')
