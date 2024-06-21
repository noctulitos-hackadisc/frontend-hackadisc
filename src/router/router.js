import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "@/stores/store";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
    meta: { requiresAuth: false },
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useAuth();

  const { requiresAuth } = to.meta;

  if (requiresAuth && !auth.user) {
    next({ name: "Login" });
  } else if (!requiresAuth && auth.user) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
