export default [
  {
    path: '/sales',
    name: 'SalesList',
    component: () => import('@/app/Commercial/Sales/SalesList.vue'),
  },
  {
    path: '/sales/new',
    name: 'SalesNew',
    component: () => import('App/Commercial/Sales/SalesForm.vue'),
  },
  {
    path: 'sales/:id',
    name: 'SalesEdit',
    component: () => import('App/Commercial/Sales/SalesForm.vue'),
  },
  {
    path: 'purchases',
    name: 'PurchasesList',
    component: () => import('App/Commercial/Purchases/PurchasesList.vue'),
  },
  {
    path: 'purchases/new',
    name: 'PurchasesNew',
    component: () => import('App/Commercial/Purchases/PurchasesForm.vue'),
  },
  {
    path: 'purchases/:id',
    name: 'PurchasesEdit',
    component: () => import('App/Commercial/Purchases/PurchasesForm.vue'),
  },
];
