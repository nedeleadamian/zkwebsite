import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/First",
    children: [
      {
        path: "/first",
        name: "First",
        component: () => import("@/views/First"),
        meta: { title: "演示工装", icon: "page" },
      },
      {
        path: "/page",
        name: "Page",
        component: () => import("@/views/Page"),
        meta: { title: "演示工装", icon: "page" },
      },
      {
        path: "/mobile",
        name: "mobile",
        component: () => import("@/views/Setting"),
        meta: { title: "演示工装", icon: "Setting" },
      },
      {
        path: "/pdf",
        name: "Pdf",
        component: () => import("@/views/Pdf"),
        meta: { title: "演示工装", icon: "page" },
      },
    ],
  },
];

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
