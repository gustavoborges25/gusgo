<template lang="pug">
  .displays_text
    span(
      :class="classValue"
      :title="[ noTruncate || text.length < truncateAt ? '' : text ]"
    ) {{ text | truncating(!noTruncate, truncateAt) }}
</template>

<script>
import truncating from 'Support/filters/text.filter';

export default {
  name: 'DisplaysText',
  filters: {
    truncating,
  },
  props: {
    text: {
      required: true,
      type: String,
    },
    type: {
      type: String,
      default: 'subheading',
      validator: value => value && ['display', 'headline', 'title', 'subheading', 'body', 'caption'].includes(value),
    },
    weight: {
      type: String,
      default: 'medium',
      validator: value => value && ['thin', 'light', 'regular', 'medium', 'bold', 'black'].includes(value),
    },
    transform: {
      type: String,
      default: 'none',
      validator: value => value && ['capitalize', 'lowercase', 'none', 'uppercase'].includes(value),
    },
    color: {
      type: String,
      default: 'primary',
    },
    italic: {
      type: Boolean,
    },
    noTruncate: {
      type: Boolean,
    },
    truncateAt: {
      type: Number,
      default: 50,
    },
  },
  computed: {
    classValue() {
      const type = this.getClass()[this.type];
      const weight = this.getWeight()[this.weight];
      const transform = this.getTransform()[this.transform];
      const color = this.getColor();
      const italic = this.isItalic();
      return [type, weight, transform, color, italic];
    },
  },
  methods: {
    getColor() {
      const sufixColor = '--text';
      return this.color + sufixColor;
    },
    getWeight() {
      return {
        thin: 'font-weight-thin',
        light: 'font-weight-light',
        regular: 'font-weight-regular',
        medium: 'font-weight-medium',
        bold: 'font-weight-bold',
        black: 'font-weight-black',
      };
    },
    getClass() {
      return {
        display: 'display-2',
        headline: 'headline',
        title: 'title',
        subheading: 'subheading',
        body: 'body-2',
        caption: 'caption',
      };
    },
    getTransform() {
      return {
        capitalize: 'text-capitalize',
        lowercase: 'text-lowercase',
        none: 'text-none',
        uppercase: 'text-uppercase',
      };
    },
    isItalic() {
      return this.italic ? 'font-italic' : '';
    },
  },
};
</script>
