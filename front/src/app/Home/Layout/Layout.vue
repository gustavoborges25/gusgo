<template lang="pug">
  .layout
    v-container.layout--margin.pa-0(fluid justify-start)
      v-layout(align-start justify-center row)
        leftbar
        v-layout(row wrap).layout--heig
          v-flex(xs12)
            topbar
          v-flex(xs12)
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
</style>
