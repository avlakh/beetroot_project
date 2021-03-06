import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'

import '@/assets/css/fonts.scss'
import '@/assets/css/norm.scss'

createApp(App)
    .use(router)
    .use(VueCollapsiblePanel)
    .mount('#app')
