import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "@/stores/store";

import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import DashboardView from "@/views/DashboardView.vue";
import InterventionsView from "@/views/InterventionsView.vue";
import AddInterventionView from "@/views/AddInterventionView.vue";
import StatisticsView from "@/views/StatisticsView.vue";

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
  {
    path: "/interventions",
    name: "Interventions",
    component: InterventionsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/add-intervention/user/id",
    name: "AddIntervention",
    component: AddInterventionView,
    meta: { requiresAuth: true },
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: StatisticsView,
    meta: { requiresAuth: true },
  }
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
