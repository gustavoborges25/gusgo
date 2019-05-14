<template lang="pug">
  v-tooltip(bottom)
    v-btn(
      fab
      dark
      right
      bottom
      absolute
      slot="activator"
      color="secondary"
      @click="change()"
    )
      v-icon(color="#fafafa") edit
    span Editar
</template>

<script>
  export default {
    name: 'btn-edit',
    methods: {
      change() {
        this.$emit('click-event')
      }
    }
  }
</script>
