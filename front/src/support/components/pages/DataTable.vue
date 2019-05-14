<template lang="pug">
  #datatable
    btn-add.right(text="Novo cliente")
    v-data-table.pt-4(
      hide-actions
      class="elevation-1"
      :no-data-text="noDataText"
      :no-results-text="noDataResults"
      :headers="headers"
      :items="items"
    )
      template(slot="items" slot-scope="props")
        tr
          slot(
            name="table-rows"
            :item="props.item"
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
  import SelectPage from "./SelectPage";
  import BtnAdd from "./ButtonAdd";

  export default {
    name: 'data-table',
    components: {
      SelectPage,
      BtnAdd
    },
    props: {
      headers: {
        type: Array,
        default: []
      },
      items: {
        type: Array,
        default: []
      },
      pagination: {
        type: Object,
        default: {}
      },
      noDataText: {
        type: String,
        default: 'Nenhum registro'
      },
      noDataResults: {
        type: String,
        default: 'Nenhum registro encontrado'
      }
    },
    data () {
      return {
        page: 1,
        rowsPerPage: 10,
        totalItems: 0
      }
    },
    computed:{
      pages() {
        const pages = parseInt((this.totalItems), 10) / parseInt((this.rowsPerPage), 10);
        return Math.ceil(pages);
      },
      page: {
        get() {
          return this.pagination.actual || 1
        },
        set(newValue) {
          this.pagination.actual = newValue
          this.$emit('update-list')
        }
      },
      rowsPerPage: {
        get() {
          return this.pagination.limit || 1
        },
        set(newValue) {
          this.pagination.limit = newValue
          this.$emit('update-list')
        }
      }
    },
  }
</script>
