<template lang="pug">
  .layout
    v-container.pa-0(fluid justify-start)
      pre.right {{ drawer }}
      v-layout(row wrap)
        v-flex(xs12 md12 lg12 xl12)
          topbar
        v-flex(xs4 md3 lg2 xl1)
          leftbar
        v-flex(xs8 md9 lg10 xl11)
          page
</template>

<script>
import Topbar from 'App/Home/Layout/components/Topbar.vue';
import Leftbar from 'App/Home/Layout//components/Leftbar.vue';
import Page from 'App/Home/Layout//components/Page.vue';

export default {
  name: 'Layout',
  components: {
    Topbar,
    Leftbar,
    Page,
  },
};
</script>
