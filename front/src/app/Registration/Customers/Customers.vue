<template lang="pug">
  page(title="Clientes")
    data-table(
      :headers="headers"
      :items="customers"
      noDataText="Nenhum cliente cadastrado"
      :pagination="pagination"
      @update-list="getCustomers()"
    )
      template(
        slot="table-rows"
        slot-scope="props"
      )
        td {{ props.item.code }}
        td {{ props.item.name }}
        td {{ props.item.document }}
        td {{ props.item.phone }}
        td {{ props.item.location }}
        td
          v-tooltip(top)
            v-btn(
              fab
              flat
              dark
              small
              color="primary"
              @click.stop.prevent="edit(props.item)"
              slot="activator"
            )
              v-icon edit
            span Editar
          v-tooltip(top)
            v-btn(
              fab
              flat
              dark
              small
              color="red"
              @click.stop.prevent="delete(props.item)"
              slot="activator"
            )
              v-icon delete
            span Excluir

</template>

<script>
  import Page from '@/support/commons/components/Page.vue';
  import DataTable from '@/support/commons/components/DataTable.vue';
  import Headers from '@/app/Registration/Customers/headers';

  export default {
    components: {
      DataTable,
      Page,
      Headers
    },
    data () {
      return {
        headers: Headers,
        customers: [],
        totalItems: 0,
        pagination: {
          limit: 10,
          current: 1,
        },
      }
    },
    computed:{
      currentPage() {
        const { pagination } = this;
        return (pagination.atual - 1) * pagination.quantidade;
      },
    },
    created() {
      this.getCustomers();
    },
    methods: {
      // getCustomers() {
      //   const { pagination } = this;
      //   const options = {
      //     search: this.search,
      //     limit: pagination.limit,
      //     offset: this.currentPage,
      //     is_staff: true,
      //   };
      //   CustomersService
      //     .getCustomers(options)
      //     .then(({ data }) => {
      //       this.customers = data.results;
      //       this.totalItems = data.count;
      //       const pages = Math.ceil(parseInt((this.totalItems), 10) / parseInt((pagination.limit), 10));
      //       pagination.atual = pages > pagination.atual ? pagination.atual : pages;
      //     });
      // },
      edit(id) {
        this.$router.push({ name: 'custumers', params: id });
      },
      delete(customer) {
        this.$swal({
          title: 'Atenção!!!',
          text: 'Tem certeza que deseja excluir este cliente?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sim',
          cancelButtonText: 'Cancelar'
        }).then(() => {
          CustomersService
            .deleteCustomers(customer.id)
            .then(() => {
              this.getCustomers()
              miniToastr.success('Cliente excluído com sucesso', 'Sucesso!')
            })
            .catch(() => {
              miniToastr.error('Houve um erro ao excluir o cliente!', 'Erro!')
            })
        })
      }
    }
  }
</script>
