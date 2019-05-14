<template lang="pug">
  v-tooltip
    v-menu(offset-y right)
      v-btn.elevation-0(
        slot="activator"
        color="primary"
        dark
      ) {{ rowsPerPage }}
        v-icon(right) keyboard_arrow_down
      v-list
        v-list-tile(@click="setLimit(10)")
          v-list-tile-title 10
        v-list-tile(@click="setLimit(30)")
          v-list-tile-title 30
        v-list-tile(@click="setLimit(50)")
          v-list-tile-title 50
    span Itens por página
</template>

<script>
  export default {
    name: 'select-page',
    props: {
      value: {
        type: Number,
        default: 10,
      },
    },
    data(vm) {
      return {
        items: [10, 20, 50],
      }
    },
    computed: {
      rowsPerPage: {
        get() {
          return this.value || 10
        },
        set(newValue) {
          this.$emit('input', newValue)
        },
      },
    },
    methods: {
      setLimit(limite) {
        this.rowsPerPage = limite;
      },
    },
  }
</script>
