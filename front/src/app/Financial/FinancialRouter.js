export default [
  {
    path: '/payments',
    name: 'Payments',
    component: () => import('@/app/Financial/Payments/Payments.vue'),
  },
  {
    path: '/receipts',
    name: 'Receipts',
    component: () => import('@/app/Financial/Receipts/Receipts.vue'),
  },
];
