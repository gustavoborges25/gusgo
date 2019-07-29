<template lang="pug">
  v-tooltip(bottom)
    v-btn(
      flat
      slot="activator"
      :color="color"
      @click="change()"
    )
      v-icon(:color="iconColor") {{ icon }}
    span {{ text }}
</template>

<script>
export default {
  name: 'BtnFlat',
  props: {
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'primary',
    },
    iconColor: {
      type: String,
      default: 'secondary',
    },
  },
  methods: {
    change() {
      this.$emit('click');
    },
  },
};
</script>
