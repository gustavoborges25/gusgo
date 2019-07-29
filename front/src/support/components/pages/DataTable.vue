<template lang="pug">
  .data_table
    v-data-table.elevation-3(
      hide-actions
      :no-data-text="noDataText"
      :no-results-text="noDataResults"
      :headers="headers"
      :items="pagination.data"
      :pagination.sync="pagination"
    )
      template(slot="items" slot-scope="props")
        slot(
          name="rows"
          :item="props.item"
        )
        td
          v-layout(
            justify-center
            align-center
            row
            v-if="!(hideEdit && hideDelete)"
          )
            btn-flat.lightgrey--text(
              icon="edit"
              icon-color="primary"
              text="Editar"
              @click="onClickEdit(props.item)"
              v-if="!hideEdit"
            )
            btn-flat.lightgrey--text(
              ref="btnDelete"
              icon="delete"
              icon-color="error"
              text="Excluir"
              @click="onClickDelete(props.item)"
              v-if="!hideDelete"
            )
    v-layout.pt-3(
      row
      align-center
    )
      v-flex(xs1)
      v-flex.text-xs-center(xs10)
        v-pagination(
          v-model="page"
          :length="pages"
          circle
          color="primary"
          :total-visible="7"
        )
      v-flex(xs1 align-center)
        select-page(v-model="rowsPerPage")
</template>

<script>
import SelectPage from 'Support/components/inputs/SelectPage.vue';
import BtnFlat from 'Support/components/buttons/ButtonFlat.vue';

export default {
  name: 'data-table',
  components: {
    SelectPage,
    BtnFlat,
  },
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    pagination: {
      type: Object,
      default: () => {},
    },
    hideDelete: {
      type: Boolean,
    },
    hideEdit: {
      type: Boolean,
    },
    noDataText: {
      type: String,
      default: 'Nenhum registro',
    },
    noDataResults: {
      type: String,
      default: 'Nenhum registro encontrado',
    },
  },
  data() {
    return {
      totalItems: 0,
    };
  },
  computed: {
    pages() {
      const pages = parseInt((this.pagination.totalItems), 10) / parseInt((this.rowsPerPage), 10);
      return Math.ceil(pages);
    },
    page: {
      get() {
        return this.pagination.page || 1;
      },
      set(newValue) {
        this.pagination.page = newValue;
        this.$emit('update-list');
      },
    },
    rowsPerPage: {
      get() {
        return this.pagination.perPage || 1;
      },
      set(newValue) {
        this.pagination.perPage = newValue;
        this.$emit('update-list');
      },
    },
  },
  methods: {
    onClickEdit(item) {
      this.$emit('edit', item);
    },
    onClickDelete(item) {
      this.$emit('delete', item);
    },
  },
};
</script>

<style lang="stylus">
  .data_table
    letter-spacing: 0.5px
    .v-table
      background transparent
    .theme--light.v-table
      thead
        tr:first-child
          border-bottom none
        th
          font-size 1.5vh
        td
          font-size 1.5vh
    tbody
      tr
        td
          font-size 1.5vh
          padding-top: 1vh !important
          padding-bottom : 1vh !important
        i
          margin-right 7px
          display flex
          align-items center
    .v-table__overflow
      background #FFFFFF
</style>
