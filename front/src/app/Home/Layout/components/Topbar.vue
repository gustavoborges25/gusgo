<template lang="pug">
  .topbar
    v-toolbar(
      color="primary"
      :height="80"
      card
      flat
    )
      v-spacer
      v-list-tile(@click="logout()")
        v-list-tile-action
          v-icon exit_to_app
        v-list-tile-title Sair
</template>
<script>

export default {
  name: 'Topbar',
  methods: {
    click() {
      this.$emit('toggle-menu');
    },
    logout() {
    },
  },
};
</script>
