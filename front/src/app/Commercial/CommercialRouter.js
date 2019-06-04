export default [
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('@/app/Commercial/Orders/Orders.vue'),
    meta: {
      sidebar: {
        icon: 'person',
        text: 'Gerenciar usuários do painel',
        exact: true,
      },
      title: 'Usuários do painel',
      disableDivider: true,
      previewPage: '/',
      pathNew: '/usuarios/novo',
    },
  },
  {
    path: '/purchasing',
    name: 'Purchasing',
    component: () => import('@/app/Commercial/Purchasing/Purchasing.vue'),
    meta: {
      sidebar: {
        icon: 'person',
        text: 'Gerenciar usuários do painel',
        exact: true,
      },
      title: 'Usuários do painel',
      disableDivider: true,
      previewPage: '/',
      pathNew: '/usuarios/novo',
    },
  },
];
