// import CommercialRouter from 'App/Commercial/CommercialRouter';
// import FinancialRouter from 'App/Financial/FinancialRouter';
// import RegistrationRouter from 'App/Registration/RegistrationRouter';

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('App/Home/Home.vue'),
    children: [
      {
        path: 'sales',
        name: 'SalesList',
        component: () => import('App/Commercial/Sales/SalesList.vue'),
      },
      // ...CommercialRouter,
      // ...FinancialRouter,
      // ...RegistrationRouter,
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('App/Login/Login.vue'),
  },
  // {
  //   path: '/recover',
  //   name: 'Recover',
  //   component: () => import('App/Login/Recover.vue'),
  // },
];
