import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  { path: "/", name: "inicio", component: HomeView },
  { path: "/login", name: "login", component: LoginView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
