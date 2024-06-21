import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";

const routes = [
  { path: "/2", name: "inicio", component: HomeView },
  { path: "/1", name: "login", component: LoginView },
  { path: "/", name: "dashboard", component: DashboardView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
