<template lang="pug">
  .purchases_list
    btn-action.right(text="Novo pedido")
    data-table
</template>

<script>
import DataTable from 'Support/components/pages/DataTable.vue';
import BtnAction from 'Support/components/buttons/BtnAction.vue';

export default {
  components: {
    BtnAction,
    DataTable,
  },
};
</script>
