<template lang='pug'>
  #layout
    sidebar
    main
      v-content
        v-fade-transition(mode='out-in')
          router-view
    v-footer.indigo.pa-3(dark app color='primary')
      span
        | &copy; 2018 - Gusgo
</template>

<script>
  import Sidebar from './Sidebar'

  export default {
    components: {
      Sidebar
    },
  };
</script>

<style lang="stylus">

</style>
