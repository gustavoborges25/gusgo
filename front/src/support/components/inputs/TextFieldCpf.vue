<template lang="pug">
  v-text-field(
    mask="###.###.###-##"
    :label="label"
    :readonly="readonly"
    :required="required"
    :rules="[rules.required, rules.valid]"
    v-model="cpf"
  )
</template>

<script>
  import Cpf from '@/mixins/aux-cpf';

  export default {
    name: 'text-field-cpf',
    mixins: [Cpf],
    props: {
      value: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: 'Cpf',
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
              return 'Cpf obrigatório!'
            }
            return true
          },
          valid: value => {
            if (value && !this.isValidCPF(value)) {
              return 'Cpf inválido!'
            }
            return true
          }
        }
      }
    },
    computed: {
      cpf: {
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
