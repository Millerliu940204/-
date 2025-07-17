import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'  // 引入全域 CSS

const app = createApp(App)
app.use(router)
app.mount('#app')