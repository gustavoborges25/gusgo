<template lang="pug">
  v-container.pa-0.red(fluid)
    v-card.pa-5(flat)
      v-card-title.color_title
        displays-text(
          :text="'Título da página'"
          type="headline"
          weight="light"
          color="lightgrey"
          transform="lowercase"
        )
      v-divider.py-2
      router-view
</template>

<script>
import DisplaysText from 'Support/components/pages/DisplaysText.vue';

export default {
  name: 'Page',
  components: {
    DisplaysText,
  },
};
</script>
