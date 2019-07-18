<template lang="pug">
  .topbar
    v-toolbar(
      color="primary"
      card
      flat
    )
      v-toolbar-title.white--text Gusgo
      v-spacer
      v-toolbar-items
        v-btn(flat @click="logout($event)")
          v-icon.white--text.mr-2 exit_to_app
          span.white--text.text-capitalize Sair
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
