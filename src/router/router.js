import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "@/stores/store";

import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import WorkerDashboardView from "@/views/WorkerDashboardView.vue";
import InterventionsView from "@/views/InterventionsView.vue";
import AddInterventionView from "@/views/AddInterventionView.vue";
import StatisticsView from "@/views/StatisticsView.vue";
import CompaniesView from "@/views/CompaniesView.vue";
import SubCompanyView from "@/views/SubCompanyView.vue";
import WorkersView from "@/views/WorkersView.vue";
import EvaluationsView from "@/views/EvaluationsView.vue";

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
    path: "/evaluations/worker/:workerId",
    name: "WorkerDashboard",
    component: WorkerDashboardView,
    props: { default: true },
    meta: { requiresAuth: true },
  },
  {
    path: "/company",
    name: "Company",
    component: CompaniesView,
    meta: { requiresAuth: true },
  },
  {
    path: "/company/subcompany/:id",
    name: "SubCompany",
    component: SubCompanyView,
    props: { default: true },
    meta: { requiresAuth: true },
  },
  {
    path: "/company/:id/workers",
    name: "Workers",
    component: WorkersView,
    props: { default: true },
    meta: { requiresAuth: true },
  },
  {
    path: "/company/:id/workers/:workerId/evaluations",
    name: "Evaluations",
    component: EvaluationsView,
    props: { default: true },
    meta: { requiresAuth: true },
  },
  {
    path: "/interventions",
    name: "Interventions",
    component: InterventionsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/add-intervention/worker/:id/evaluation/:evaluationId",
    name: "AddIntervention",
    component: AddInterventionView,
    props: { default: true },
    meta: { requiresAuth: true },
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: StatisticsView,
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
