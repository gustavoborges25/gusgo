<template lang="pug">
  page(title="Pedidos")
    btn-add.right(text="Novo pedido")
    data-table
</template>

<script>
import Page from 'Support/components/pages/Page.vue';
import DataTable from 'Support/components/pages/DataTable.vue';
import BtnAdd from 'Support/components/buttons/ButtonAdd.vue';

export default {
  components: {
    Page,
    BtnAdd,
    DataTable,
  },
};
</script>
