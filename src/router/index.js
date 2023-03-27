import Vue from "vue";
import Router from "vue-router";
import login from "@/components/login.vue";
import home from "@/components/home.vue";
import register from "@/components/register.vue";
import welcome from "@/components/welcome";
import user from "@/components/user/user.vue";
import student from "@/components/student.vue";
// import Student from "@/components/Student.vue";
Vue.use(Router);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: login },
  { path: "/register", component: register },
  {
    path: "/home",
    component: home,
    redirect: "/welcome",
    children: [
      { path: "/welcome", component: welcome },
      { path: "/user", component: user },
      { path: "/student", component: student }
    ]
  }
];

const router = new Router({
  routes // (缩写) 相当于 routes: routes
});

// // 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   //允许用户从任何地址定向到登陆界面
//   if (to.path === "/login") return next();
//   const tokenStr = window.sessionStorage.getItem("token");
//   //限制未注册用户在登录界面跳转
//   if (!tokenStr) return next("/login");
//   next();
// });
export default router;
