import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/pages/Home.vue";
import Contacts from "../views/pages/Contacts.vue";
import Portfolio from "../views/pages/Portfolio.vue";
import Services from "../views/pages/Services.vue";
import Error from "../views/pages/Error.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/404",
    name: "Error",
    component: Error,
  },
  {
    path: "/:catchAll(.*)",
    redirect: {
      name: "Error",
    },
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
