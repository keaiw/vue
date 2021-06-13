const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    }
  ]
})