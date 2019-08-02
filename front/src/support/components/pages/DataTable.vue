<template lang="pug">
  .data_table
    v-data-table.elevation-1(
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
            btn-icon(
              icon="edit"
              icon-color="primary"
              text="Editar"
              @click="onClickEdit(props.item)"
              v-if="!hideEdit"
            )
            btn-icon(
              icon="delete"
              icon-color="error"
              text="Excluir"
              @click="onClickDelete(props.item)"
              v-if="!hideDelete"
            )
    v-layout.pt-1(
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
      v-flex(xs1)
        select-page(v-model="rowsPerPage")
</template>

<script>
import SelectPage from 'Support/components/inputs/SelectPage.vue';
import BtnIcon from 'Support/components/buttons/BtnIcon.vue';

export default {
  name: 'DataTable',
  components: {
    SelectPage,
    BtnIcon,
  },
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
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
    pagination: {
      get() {
        return this.items;
      },
      set(newValue) {
        this.$emit('update:items', newValue);
      },
    },
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
        this.$emit('update:items', this.pagination);
      },
    },
    rowsPerPage: {
      get() {
        return this.pagination.perPage || 1;
      },
      set(newValue) {
        this.pagination.perPage = newValue;
        this.$emit('update:items', this.pagination);
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
    .v-table__overflow
      background #FFFFFF
</style>
