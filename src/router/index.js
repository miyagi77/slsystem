import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//用户权限设置
// router.beforeEach((to, from, next) => {
//   const userInfo = getLocalStore("user");
//   if (to.matched.some(res => res.meta.requireAuth)) {
//     if (userInfo && userInfo.user && userInfo.token) { // 在去判断当前用户的信息
//       next(); // 如果是 直接渲染
//     } else {
//       next("/login"); // 否则跳转登录页面
//     }
//   } else {
//     next() // 不是就直接去渲染路由
//   }
// })


export default router