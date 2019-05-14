<template lang="pug">
  v-tooltip(bottom)
    v-btn(
      fab
      dark
      right
      bottom
      absolute
      slot="activator"
      color="primary"
      @click="change()"
    )
      v-icon(color="#fafafa") add
    span {{ text }}
</template>

<script>
  export default {
    name: 'btn-add',
    props: {
      text: {
        type: String,
        default: 'Adicionar',
      },
    },
    methods: {
      change() {
        this.$emit('click-event')
      }
    }
  }
</script>
