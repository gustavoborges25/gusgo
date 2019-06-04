export default [
  {
    path: '/providers',
    name: 'Providers',
    component: () => import('@/app/Registration/Providers/Providers.vue'),
  },
  {
    path: '/customers',
    name: 'Customers',
    component: () => import('@/app/Registration/Customers/Customers.vue'),
  },
];
