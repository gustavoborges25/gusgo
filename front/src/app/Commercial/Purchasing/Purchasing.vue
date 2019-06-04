<template lang="pug">
  page(title="Pedidos")
    btn-add.right(text="Novo pedido")
    data-table
</template>

<script>
  import Page from '@/support/commons/components/Page.vue';
  import DataTable from '@/support/commons/components/DataTable.vue';
  import BtnAdd from '@/support/commons/components/ButtonAdd.vue';

  export default {
    components: {
      Page,
      BtnAdd,
      DataTable,
    },
  };
</script>
