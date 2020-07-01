import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: "/",
    component: () => import("../components/layout/LayoutBase"),
    children: [
      {
        path: "",
        name: "home",
        meta: {
          title: "Home",
          subject: "Home",
        },
        component: () => import("../views/Home"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../components/layout/LayoutBase"),
    children: [
      {
        path: "",
        name: "login",
        meta: {
          title: "Login",
          subject: "Login",
        },
        component: () => import("../views/Login"),
      },
    ],
  },
  {
    path: "/register",
    component: () => import("../components/layout/LayoutBase"),
    children: [
      {
        path: "",
        name: "register",
        meta: {
          title: "Register",
          subject: "Register",
        },
        component: () => import("../views/Register"),
      },
    ],
  },
  {
    path: "/forgot-password",
    component: () => import("../components/layout/LayoutBase"),
    children: [
      {
        path: "",
        name: "forgot-password",
        meta: {
          title: "Forgot Password",
          subject: "Forgot Password",
        },
        component: () => import("../views/ForgotPassword"),
      },
    ],
  },
  {
    path: "/order",
    component: () => import("../components/layout/LayoutBase"),
    children: [{
      path: ":type",
      name: "order",
      meta: {
        title: "Order",
        subject: "Order",
      },
      component: () => import("../views/Order"),
    }, ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
