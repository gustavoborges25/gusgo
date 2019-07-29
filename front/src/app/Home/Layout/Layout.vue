<template lang="pug">
  .layout
    v-layout
      leftbar
      v-layout(row wrap)
        v-flex(xs12)
          topbar
          page
</template>

<script>
import Topbar from 'App/Home/Layout/components/Topbar.vue';
import Leftbar from 'App/Home/Layout/components/Leftbar.vue';
import Page from 'App/Home/Layout/components/Page.vue';

export default {
  name: 'Layout',
  components: {
    Topbar,
    Leftbar,
    Page,
  },
};
</script>

<style lang="sass">
  .layout
    height: 100%
    &--margin
      margin: 0
      padding: 0
</style>
