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
    name: "home",
    path: "/home",
    component: () => import("../layout/routePages/home.vue"),
    children: [
      // {
      //   path: "/home",
      //   redirect: "/home/children1",
      // },
      {
        name: "homeChildren1",
        path: "children1",
        component: () => import("../layout/routePages/home/children1.vue"),
      },
      {
        name: "homeChildren2",
        path: "children2",
        component: () => import("../layout/routePages/home/children2.vue"),
      },
    ],
  },
  {
    name: "about",
    path: "/about",
    component: () => import("../layout/routePages/about.vue"),
  },
];

export default routes;
