import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";

const routes = [
  { path: "/home", name: "Home", component: HomeView },
  { path: "/", name: "Login", component: LoginView },
  { path: "/dashboard", name: "Dashboard", component: DashboardView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app-body-container").scrollTop = 0;
  },
});

export default router;
