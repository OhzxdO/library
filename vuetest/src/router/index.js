import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from "../views/Book";
import PageOne from "../views/PageOne";
import PageTwo from "../views/PageTwo";
import manage from "../views/manage";
import PageThree from "../views/PageThree";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    redirect:"/pageone"
  },{
    path: '/manage',
    name: '图书管理',
    component : manage,
    children: [{
      // 访问子页面会先加载父页面
      path: '/pageone',
      name: '图书列表',
      component:PageOne
    },{
      path: '/pagetwo',
      name: '新增图书',
      component:PageTwo
    },{
      path: '/pagethree',
      name: '编辑图书',
      component:PageThree
    }]
  },{
    path: '/book',
    component: Book
  }, {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
