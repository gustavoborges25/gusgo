<template lang="pug">
.asdsa
  span 'sada15315'
  page(title="Pedidos ")
    btn-add.right(text="Novo pedido")
    data-table
</template>

<script>
import Page from 'Support/components/pages/Page.vue';
import DataTable from 'Support/components/pages/DataTable.vue';
import BtnAdd from 'Support/components/buttons/ButtonAdd.vue';

export default {
  name: 'SalesList',
  components: {
    Page,
    BtnAdd,
    DataTable,
  },
};
</script>
