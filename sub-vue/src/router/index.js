import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";

Vue.use(VueRouter);

// 解决重复触发同一个路由导致控制台报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/test.vue"),
  },
];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

// export default router;
export default routes;
