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
  export default {
    name: 'InputCpf',
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
      },
      required: {
        type: Boolean,
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
    methods: {
      isValidCPF(value) {
        let soma = 0;
        let resto = 0;
        if (value.length !== 11) return false;
        if (value === '00000000000') return false;
        if (value === '11111111111') return false;
        if (value === '22222222222') return false;
        if (value === '33333333333') return false;
        if (value === '44444444444') return false;
        if (value === '55555555555') return false;
        if (value === '66666666666') return false;
        if (value === '77777777777') return false;
        if (value === '88888888888') return false;
        if (value === '99999999999') return false;

        for (let i = 1; i<=9; i++) soma = soma + parseInt(value.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11))  resto = 0;
        if (resto != parseInt(value.substring(9, 10)) ) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++) soma = soma + parseInt(value.substring(i-1, i)) * (12 - i);
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11))  resto = 0;
        if (resto != parseInt(value.substring(10, 11) ) ) return false;
        return true;
      },
    },
  }
</script>
