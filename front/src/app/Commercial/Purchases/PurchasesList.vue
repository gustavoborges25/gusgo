<template lang="pug">
  .purchases_list
    btn-add.right(text="Novo pedido")
    data-table
</template>

<script>
import DataTable from 'Support/components/pages/DataTable.vue';
import BtnAdd from 'Support/components/buttons/ButtonAdd.vue';

export default {
  components: {
    BtnAdd,
    DataTable,
  },
};
</script>
