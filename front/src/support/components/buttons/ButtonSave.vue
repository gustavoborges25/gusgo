<template lang="pug">
  v-tooltip(bottom)
    v-btn(
      fab
      dark
      right
      bottom
      absolute
      slot="activator"
      color="success"
      @click="change()"
    )
      v-icon(color="#fafafa") done
    span Salvar
</template>

<script>
  export default {
    name: 'btn-save',
    methods: {
      change() {
        this.$emit('click-event')
      }
    }
  }
</script>
