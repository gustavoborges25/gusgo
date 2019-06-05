import CommercialRouter from 'App/Commercial/CommercialRouter';
import FinancialRouter from 'App/Financial/FinancialRouter';
// import RegistrationRouter from 'App/Registration/RegistrationRouter';

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('App/Commercial/Sales/SalesList.vue'),
    children: [
      ...CommercialRouter,
      ...FinancialRouter,
      // ...RegistrationRouter,
    ],
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('App/Login/Login.vue'),
  // },
  // {
  //   path: '/recover',
  //   name: 'Recover',
  //   component: () => import('App/Login/Recover.vue'),
  // },
];
