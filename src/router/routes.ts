const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    name: "index",
    path: "/index",
    component: () => import("../pages/routePages/index.vue"),
  },
  {
    name: "home",
    path: "/home",
    component: () => import("../pages/routePages/home.vue"),
  },
  {
    name: "about",
    path: "/about",
    component: () => import("../pages/routePages/about.vue"),
  },
];

export default routes;
