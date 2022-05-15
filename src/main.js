import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './root/css/src/style.scss'

createApp(App).use(router).mount("#app");
