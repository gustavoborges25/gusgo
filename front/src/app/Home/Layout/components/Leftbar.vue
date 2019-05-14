<template lang='pug'>
  .leftbar
    span sdaasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{{ drawerActual }}
    v-navigation-drawer(
      absolute
      v-model="drawer"
      :mini-variant.sync="mini"
      hide-overlay
      stateless
    )
      v-list
        v-list-tile(avatar)
          v-list-tile-avatar
            v-img(:src="getUserImage"  @click.stop="mini = !mini")
          v-list-tile-content
            v-list-tile-title John Leider
        v-divider
        v-list-tile
          v-list-tile-action
            v-icon home
          v-list-tile-title Início
</template>

<script>
export default {
  name: 'Leftbar',
  data() {
    return {
      drawer: true,
      mini: true,
      items: [
        {
          href: 'home', router: false, title: 'Início', icon: 'home',
        },
        {
          href: 'orders', router: true, title: 'Pedidos', icon: 'store',
        },
        {
          href: 'customers', router: true, title: 'Clientes', icon: 'people',
        },
        {
          href: 'providers', router: true, title: 'Fornecedores', icon: 'work',
        },
        {
          href: 'products', router: true, title: 'Produtos', icon: 'shopping_cart',
        },
        {
          href: 'financial', router: true, title: 'Financeiro', icon: 'payment',
        },
        {
          href: 'expenses', router: true, title: 'Despesas', icon: 'description',
        },
        {
          href: 'dashboard', router: true, title: 'Relatórios', icon: 'dashboard',
        },
        {
          href: 'schedule', router: true, title: 'Agenda', icon: 'view_agenda',
        },
        {
          href: 'settings', router: true, title: 'Configurações', icon: 'build',
        },
      ],
    };
  },
  computed: {
    drawerActual: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$emit('upload:drawer', value);
      },
    },
    getUserImage() {
      return 'https://randomuser.me/api/portraits/men/85.jpg';
    },
  },
};
</script>
