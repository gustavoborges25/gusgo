import Vue from 'vue';
import Router from 'vue-router';
import routes from 'App/AppRouter';

Vue.use(Router);

const router = new Router({
  routes,
});

// router.beforeEach((to, from, next) => {
//   const token = getToken();
//   const allowedRoutes = [
//     'Login',
//     'Recover',
//   ];
//
//   if (!token && allowedRoutes.indexOf(to.name) === -1) {
//     return next('/login');
//   }
//   if (token && to.name === 'Login') {
//     return next('/');
//   }
//
//   return next();
// });

export default router;
