<template lang="pug">
  .topbar
    v-toolbar(
      color="primary"
      :height="58"
      card
      flat
    )
      span gusgo
      v-spacer
      v-list-tile(@click="logout()")
        v-list-tile-action
          v-icon.white--text exit_to_app
        v-list-tile-title.white--text Sair
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
