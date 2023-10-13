import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {pinia} from "@/plugins/pinia";
import './assets/scss/tailwind.scss'
async function loadApp() {
    const app = createApp(App)
    try {
        app.use(router)
        await router.isReady()
        app.use(pinia)
        app.mount('#app')
    } catch (e) {
        throw e
    }
}

loadApp()
    .then()
    .catch()
