<template lang="pug">
  page(title="Pedidos")
    btn-action.right(text="Novo pedido")
    data-table
</template>

<script>
import Page from 'Support/components/pages/Page.vue';
import DataTable from 'Support/components/pages/DataTable.vue';
import BtnAction from 'Support/components/buttons/BtnAction.vue';

export default {
  components: {
    Page,
    BtnAction,
    DataTable,
  },
};
</script>
