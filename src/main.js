import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import App from "@/App.vue"
import '@/assets/css/style.scss'

createApp(App).use(createPinia()).use(router).mount('#app')
