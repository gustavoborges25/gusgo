<template lang='pug'>
  .leftbar
    v-navigation-drawer(
      v-model="drawer"
      :mini-variant="mini"
      hide-overlay
      stateless
    )
      v-list
        v-list-tile(avatar)
          v-list-tile-action
            v-icon(@click="mini = !mini") menu
          v-list-tile-content
            v-list-tile-title {{ user.name }}
            v-list-tile-title {{ user.email }}
        v-divider
        v-list-tile(
          v-for="(item, index) in items"
          :key="index"
          @click="goTo(item)"
        )
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title {{ item.title }}
</template>

<script>
export default {
  name: 'Leftbar',
  data() {
    return {
      drawer: true,
      mini: true,
      user: {
        name: '',
        imagem: '',
      },
      items: [
        {
          href: 'home', route: 'Home', title: 'Início', icon: 'home',
        },
        {
          href: 'orders', route: 'SalesList', title: 'Pedidos', icon: 'store',
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
  created() {
    this.getUser();
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
  },
  methods: {
    getUser() {
      this.user.name = 'João da Silva';
      this.user.email = 'joao.silva@mail.com';
    },
    goTo(item) {
      this.mini = true;
      this.$router.push({ name: item.route });
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
