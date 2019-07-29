import CommercialRouter from 'App/Commercial/CommercialRouter';
// import FinancialRouter from 'App/Financial/FinancialRouter';
// import RegistrationRouter from 'App/Registration/RegistrationRouter';

export default [
  {
    path: '/',
    name: 'Layout',
    component: () => import('App/Home/Layout/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('App/Home/Home.vue'),
        meta: {
          title: 'Home',
        },
      },
      ...CommercialRouter,
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
