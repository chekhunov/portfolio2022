import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import "./root/css/src/style.scss";
import flagIcon from "vue-flag-icon";
import i18n from "@/plugins/i18n.js";

createApp(App).use(i18n).use(router).use(flagIcon).mount("#app");
