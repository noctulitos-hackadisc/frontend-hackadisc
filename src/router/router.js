import App from "@/App.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      name: "home",
      component: App,
    },
    {
        path: "/404",
        redirect: "/error"
    }
];


const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;