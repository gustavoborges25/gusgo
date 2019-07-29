<template lang="pug">
  v-btn(
    :block="block"
    slot="activator"
    :color="color"
    @click.native="onClick($event)"
  )
    v-icon(left v-if="icon && !iconRight") {{ icon }}
    span(v-if="!iconRight") {{ text }}
    span(v-if="iconRight") {{ text }}
    v-icon(right v-if="icon && iconRight") {{ icon }}
</template>

<script>
import BtnTemplate from './BtnTemplate.vue';

export default {
  name: 'BtnText',
  extends: BtnTemplate,
};
</script>
