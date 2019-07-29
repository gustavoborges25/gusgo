<template lang="pug">
  .sales_list
    v-layout(row wrap)
      v-flex(xs12).pb-3
        btn-add.right(text="Novo pedido")
      v-flex(xs12)
        data-table(:pagination="pagination" :headers="headers")
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
import BtnAdd from 'Support/components/buttons/ButtonAdd.vue';

export default {
  name: 'SalesList',
  components: {
    BtnAdd,
    DataTable,
  },
  data() {
    return {
      pagination: {
        data: [
          {
            number: '1',
            createdAt: '01/12/2017',
            provider: 'Fornecedor AAAAAA Ltda',
            value: 'R$ 1.234,58',
          },
          {
            number: '2',
            createdAt: '15/06/2017',
            provider: 'Fornecedor BBBBBBBB Ltda',
            value: 'R$ 515.513,59',
          },
          {
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
          text: 'Ação',
          width: '15%',
          align: 'center',
          value: 'situation',
          sortable: false,
        },
      ],
    };
  },
};
</script>
