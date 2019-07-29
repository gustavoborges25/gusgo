export default [
  {
    path: 'sales',
    name: 'SalesList',
    component: () => import('App/Commercial/Sales/SalesList.vue'),
    meta: {
      title: 'Pedidos de venda',
    },
  },
  {
    path: 'sales/new',
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
    meta: {
      title: 'Pedidos de compra',
    },
  },
  // {
  //   path: 'purchases/new',
  //   name: 'PurchasesNew',
  //   component: () => import('App/Commercial/Purchases/PurchasesForm.vue'),
  // },
  // {
  //   path: 'purchases/:id',
  //   name: 'PurchasesEdit',
  //   component: () => import('App/Commercial/Purchases/PurchasesForm.vue'),
  // },
];
