const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    name: "index",
    path: "/index",
    component: () => import("../layout/routePages/index.vue"),
  },
  {
    name: "home1",
    path: "/home",
    component: () => import("../layout/routePages/home.vue"),
  },
  {
    name: "about",
    path: "/about",
    component: () => import("../layout/routePages/about.vue"),
  },
];

export default routes;
