<template lang="pug">
  v-tooltip(bottom)
    v-btn(
      fab
      dark
      right
      bottom
      absolute
      slot="activator"
      color="accent"
      @click="change()"
    )
      v-icon(color="#fafafa") clear
    span Cancelar
</template>

<script>
  export default {
    name: 'btn-cancel',
    methods: {
      change() {
        this.$emit('click-event')
      }
    }
  }
</script>
