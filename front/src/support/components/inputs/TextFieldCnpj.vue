<template lang="pug">
  v-text-field(
    mask="##.###.###/####-##"
    :label="label"
    :readonly="readonly"
    :required="required"
    :rules="[rules.required, rules.valid]"
    v-model="cnpj"
  )
</template>

<script>
  import Cnpj from '@/mixins/aux-cnpj';

  export default {
    name: 'text-field-cnpj',
    mixins: [Cnpj],
    props: {
      value: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: 'Cnpj',
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      required: {
        type: Boolean,
        default: false,
      },
    },
    data(vm) {
      return {
        rules: {
          required: value => {
            if (!value && vm.required) {
              return 'Cnpj obrigatório!'
            }
            return true
          },
          valid: value => {
            if (value && !this.isValidCnpj(value)) {
              return 'Cnpj inválido!'
            }
            return true
          }
        }
      }
    },
    computed: {
      cnpj: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue)
        },
      },
    },
  }
</script>
