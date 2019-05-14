<template lang="pug">
  v-card.mx-5.my-5(flat)
    v-card-title.color_title
      h3.headline.mb-0 {{ title }}
    v-divider.color_title.mb-3
    slot
</template>

<script>
  export default {
    name: 'page',
    props: {
      title: {
        type: String,
        default: 'Título',
      },
    },
  }
</script>

<style lang="sass">
  .color_title
    color: #484646
</style>
