export default [
  {
    path: 'payments',
    name: 'PaymentsList',
    component: () => import('App/Financial/Payments/PaymentsList.vue'),
  },
  {
    path: 'payments/new',
    name: 'PaymentsNew',
    component: () => import('App/Financial/Payments/PaymentsForm.vue'),
  },
  {
    path: 'payments/:id',
    name: 'PaymentsEdit',
    component: () => import('App/Financial/Payments/PaymentsForm.vue'),
  },
  {
    path: 'receipts',
    name: 'ReceiptsList',
    component: () => import('App/Financial/Receipts/ReceiptsList.vue'),
  },
  {
    path: 'receipts/new',
    name: 'ReceiptsNew',
    component: () => import('App/Financial/Receipts/ReceiptsForm.vue'),
  },
  {
    path: 'receipts/:id',
    name: 'ReceiptsEdit',
    component: () => import('App/Financial/Receipts/ReceiptsForm.vue'),
  },
];
