<template lang="pug">
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
    },
    icon: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    iconColor: {
      type: String,
      default: '',
    },
    iconRight: {
      type: Boolean,
    },
    block: {
      type: Boolean,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
