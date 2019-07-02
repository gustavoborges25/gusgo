export default [
  {
    title: 'Início',
    icon: 'home',
    route: 'Home',
    children: [],
  },
  {
    title: 'Comercial',
    icon: 'store',
    route: 'SalesList',
    children: [
      {
        title: 'Pedido de Venda',
        route: 'SalesList',
      },
      {
        title: 'Orçamento',
        route: 'SalesList',
      },
      {
        title: 'Pedido de Compra',
        route: 'SalesList',
      },
    ],
  },
  {
    title: 'Financeiro',
    icon: 'payment',
    route: '',
    children: [
      {
        title: 'Contas a pagar',
        route: 'SalesList',
      },
      {
        title: 'Contas a receber',
        route: 'SalesList',
      },
      {
        title: 'Despesas',
        route: 'SalesList',
      },

    ],
  },
  {
    title: 'Cadastros',
    icon: 'account_box',
    route: '',
    children: [
      {
        title: 'Pessoa Física',
        route: 'SalesList',
      },
      {
        title: 'Pessoa Jurídica',
        route: 'SalesList',
      },
      {
        title: 'Produtos',
        route: 'SalesList',
      },
    ],
  },
  {
    title: 'Relatórios',
    icon: 'dashboard',
    route: '',
    children: [],
  },
  {
    title: 'Agenda',
    icon: 'calendar_today',
    route: '',
    children: [],
  },
  {
    title: 'Configurações',
    icon: 'build',
    route: '',
    children: [],
  },
];
