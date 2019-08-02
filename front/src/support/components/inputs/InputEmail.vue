<template lang="pug">
  v-text-field(
    :label="label"
    :readonly="readonly"
    :required="required"
    :rules="[rules.required, rules.valid]"
    v-model="email"
  )
</template>

<script>
export default {
  name: 'InputEmail',
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'E-mail',
    },
    readonly: {
      type: Boolean,
    },
    required: {
      type: Boolean,
    },
  },
  data(vm) {
    return {
      rules: {
        required: (value) => {
          if (!value && vm.required) {
            return 'E-mail obrigatório!';
          }
          return true;
        },
        valid: (value) => {
          const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
          if (value && !regex.test(value)) {
            return 'E-mail inválido!';
          }
          return true;
        },
      },
    };
  },
  computed: {
    email: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
};
</script>
