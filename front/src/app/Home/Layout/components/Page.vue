<template lang="pug">
  v-container.pa-0(fluid)
    v-card.pa-5(flat)
      v-card-title
        displays-text(
          :text="$route.meta.title || ''"
          type="headline"
          weight="light"
          color="lightgrey"
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
