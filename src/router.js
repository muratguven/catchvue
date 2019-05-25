import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Work from './views/Work.vue'
import Users from './views/Users.vue'
import Products from './views/Products.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{ layout:'main' },
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta:{layout:'main'},
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/work',
      name:'work',
      meta:{ layout:'main' },
      component:Work
    },
    {
      path:'/users',
      name:'users',
      alias:'/my-users',
      meta:{ layout:'main' },
      component:Users
    },
    {
      path:'/products',
      name:'products',
      alias:'/case-products',
      meta:{ layout:'main' },
      component:Products
    }
  ]
})
