<template lang='pug'>
  #sidebar
    v-layout(
      wrap
      height="100%"
    )
      v-toolbar(dark app color='primary')
        v-toolbar-side-icon(@click.stop="drawer = !drawer")
        v-toolbar-title Gusgo
        v-spacer
        v-list-tile(@click="logout()")
          v-list-tile-action
            v-icon exit_to_app
          v-list-tile-title Sair
      v-navigation-drawer(
        absolute
        temporary
        v-model="drawer"
      )
        v-toolbar(flat)
          v-list
            v-list-tile(avatar)
              v-list-tile-avatar
                img(:src="getUserImage")
              v-list-tile-content
                v-list-tile-title {{ user.name || 'John Leider' }}
            v-divider
            v-list-tile
              v-list-tile-action
                v-icon home
              v-list-tile-title Início
            v-list-group(
              v-for="(item) in routes"
            )
              v-list-tile(
                slot="activator"
                :id="item.title"
              )
                v-list-tile-action
                  v-icon {{ item.icon }}
                v-list-tile-title {{ item.text }}
              v-list-group(no-action='', sub-group='', value='true')
                template(v-slot:activator='')
                  v-list-tile
                    v-list-tile-title Admin
                v-list-tile(v-for='(admin, i) in admins', :key='i', @click='')
                  v-list-tile-title(v-text='admin[0]')
                  v-list-tile-action
                    v-icon(v-text='admin[1]')
              v-list-group(sub-group='', no-action='')
                template(v-slot:activator='')
                  v-list-tile
                    v-list-tile-title Actions
                v-list-tile(v-for='(crud, i) in cruds', :key='i', @click='')
                  v-list-tile-title(v-text='crud[0]')
                  v-list-tile-action
                    v-icon(v-text='crud[1]')
</template>

<script>
  // import routes from '@/router/router';

  export default {
    name: 'Sidebar',
    data() {
      return {
        user: {},
        routes: [],
        subRoutes: [],
        mini: true,
        drawer: false,
        items: [
          { href: 'home', router: false, title: 'Início', icon: 'home'},
          { href: 'orders', router: true, title: 'Pedidos', icon: 'store'},
          { href: 'customers', router: true, title: 'Clientes', icon: 'people'},
          { href: 'providers', router: true, title: 'Fornecedores', icon: 'work'},
          { href: 'products', router: true, title: 'Produtos', icon: 'shopping_cart'},
          { href: 'financial', router: true, title: 'Financeiro', icon: 'payment'},
          { href: 'expenses', router: true, title: 'Despesas', icon: 'description'},
          { href: 'dashboard', router: true, title: 'Relatórios', icon: 'dashboard'},
          { href: 'schedule', router: true, title: 'Agenda', icon: 'view_agenda'},
          { href: 'settings', router: true, title: 'Configurações', icon: 'build'},
        ],
      };
    },
    created() {
      const { options } = this.$router;
      const { routes } = options;
      routes.forEach((route) => {
        if (route.path === '/') {
          // eslint-disable-next-line
          console.log(route.children);
          this.forChildren(route.children);
        }
      });
    },
    computed: {
      getUserImage() {
        return this.user.img || 'https://randomuser.me/api/portraits/men/85.jpg';
      }
    },
    methods: {
      forChildren(routes) {
        routes.forEach((route) => {
          if (route.path){
            this.addRoute(route);
          }
        });

        this.addRoute(routes);

        const { children } = routes;
        if (children && children.length) {
          children.forEach((child) => {
            this.forChildren(child);
          });
        }
      },
      addRoute(route) {
        // if (!route.permissionGranted
        //   && (!route.namePermission || !this.userService.existPermission(route.namePermission))) {
        //   return;
        // }

        const { meta } = route;
        // eslint-disable-next-line
        console.log(route);
        if (meta && meta.sidebar) {
          const { sidebar } = meta;
          this
            .routes
            .push({
              pathName: route.name,
              icon: sidebar.icon,
              text: sidebar.text,
            });
        }
      },
      logout () {
        localStorage.removeItem('authorization')
        this.$router.go('/login')
      },
      // getUser () {
      //   this.$http.get('api/get-logged-user').then(response => {
      //     this.user = response.data.user
      //   })
      // },
    }
  }

</script>

<style scoped>

</style>
