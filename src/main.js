import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./root/css/src/style.scss";
import flagIcon from "vue-flag-icon";

createApp(App).use(router).use(flagIcon).mount("#app");
