<template lang="pug">
  .topbar
    v-toolbar(
      color="primary"
      :height="58"
      card
      flat
    )
      span.white--text Gusgo
      v-spacer
      v-list-tile(@click="logout($event)")
        v-list-tile-action
          v-icon.white--text exit_to_app
        v-list-tile-title.white--text Sair
</template>
<script>
import Notification from 'Support/plugins/notifications';

export default {
  name: 'Topbar',
  mixins: [Notification],
  methods: {
    logout() {
      const options = this.optionsModalConfirm({ title: 'Sair do sistema?' });
      this.$swal(options).then((result) => {
        if (result.value) {
          console.log('saiu do sistema');
        }
      });
    },
  },
};
</script>
