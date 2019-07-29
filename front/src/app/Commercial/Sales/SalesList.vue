<template lang="pug">
  .sales_list
    v-layout(
      row
      wrap
    )
      v-flex.pb-3(xs12)
        btn-action.right(
          icon="add"
          color="primary"
          text="Novo pedido"
          @click="goToAdd($event)"
        )
      v-flex(xs12)
        data-table(
          :items.sync="items"
          :headers="headers"
          @edit="goToEdit($event)"
          @delete="onDelete($event)"
        )
          template(
            slot="rows"
            slot-scope="props"
          )
            td {{ props.item.number }}
            td {{ props.item.createdAt }}
            td {{ props.item.provider }}
            td {{ props.item.value }}

</template>

<script>
import DataTable from 'Support/components/pages/DataTable.vue';
import BtnAction from 'Support/components/buttons/BtnAction.vue';
import BtnIcon from 'Support/components/buttons/BtnIcon.vue';
import Notification from 'Support/plugins/notifications';

export default {
  name: 'SalesList',
  components: {
    BtnAction,
    DataTable,
    BtnIcon,
  },
  mixins: [Notification],
  data() {
    return {
      items: {
        data: [
          {
            id: '1',
            number: '1',
            createdAt: '01/12/2017',
            provider: 'Fornecedor AAAAAA Ltda',
            value: 'R$ 1.234,58',
          },
          {
            id: '2',
            number: '2',
            createdAt: '15/06/2017',
            provider: 'Fornecedor BBBBBBBB Ltda',
            value: 'R$ 515.513,59',
          },
          {
            id: '3',
            number: '3',
            createdAt: '25/01/2018',
            provider: 'Fornecedor CCCCCCCCC CCCCCCCCCCCCCC CCCCCCCCCCCCCC CCCCCCCCCCCCCCCCC CCCCCCCCCCCCCCCC CCCCCCCCCCC Ltda',
            value: 'R$ 13.515.513,59',
          },
        ],
        page: 1,
        perPage: 10,
        totalItems: 3,
      },
      headers: [
        {
          text: 'Número',
          width: '10%',
          value: 'date',
          sortable: false,
        },
        {
          text: 'Data do pedido',
          width: '15%',
          value: 'situation',
          sortable: false,
        },
        {
          text: 'Fornecedor',
          width: '40%',
          value: 'situation',
          sortable: false,
        },
        {
          text: 'Valor',
          width: '20%',
          value: 'situation',
          sortable: false,
        },
        {
          text: 'Ações',
          width: '15%',
          align: 'center',
          value: 'situation',
          sortable: false,
        },
      ],
    };
  },
  methods: {
    goToAdd() {
      this.$router.push({ name: 'SalesNew' });
    },
    goToEdit(item) {
      this.$router.push({ name: 'SalesEdit', params: { id: item.id } });
    },
    onDelete() {
      const options = this.optionsModalConfirm({ title: 'Confirma a exclusão do pedido?' });
      this
        .$swal(options)
        .then((result) => {
          if (result.value) {
            this.showSuccess('Pedido excluído com sucesso!');
          }
        });
    },
  },
};
</script>
