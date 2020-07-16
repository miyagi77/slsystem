import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Storage from '@/utils/storage.js'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true //如果需要验证的页面需要添加
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


/***
 * 设置用户权限
 * autor:张雷
 * 首先引入storage.js 利用其中get方法取到用户信息
 * 如果需要权限登录的会判断用户信息是否有权利访问
 */
router.beforeEach((to, from, next) => {
  const userInfo = Storage.get("user");
  if (to.matched.some(res => res.meta.requireAuth)) {
    if (userInfo && userInfo.user && userInfo.token) { // 在去判断当前用户的信息  可修改条件  根据信息匹配需要跳转的页面
      next(); // 如果是 直接渲染
    } else {
      next("/login"); // 否则跳转登录页面
    }
  } else {
    next() // 不是就直接去渲染路由
  }
})


export default router