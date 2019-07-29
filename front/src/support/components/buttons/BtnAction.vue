<template lang="pug">
  v-tooltip(bottom)
    v-btn(
      fab
      slot="activator"
      :color="color"
      @click.native="onClick($event)"
    )
      v-icon(:color="iconColor") {{ icon }}
    span {{ text }}
</template>

<script>
import BtnTemplate from './BtnTemplate.vue';

export default {
  name: 'BtnAction',
  extends: BtnTemplate,
};
</script>
