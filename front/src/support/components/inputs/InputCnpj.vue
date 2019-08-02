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
  export default {
    name: 'InputCnpj',
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
    methods: {
      isValidCnpj(cnpj) {
        if (cnpj.length !== 14) return false;
        if (cnpj === '00000000000') return false;
        if (cnpj === '11111111111') return false;
        if (cnpj === '22222222222') return false;
        if (cnpj === '33333333333') return false;
        if (cnpj === '44444444444') return false;
        if (cnpj === '55555555555') return false;
        if (cnpj === '66666666666') return false;
        if (cnpj === '77777777777') return false;
        if (cnpj === '88888888888') return false;
        if (cnpj === '99999999999') return false;

        let tamanho = cnpj.length - 2
        let numeros = cnpj.substring(0,tamanho);
        const digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2) pos = 9;
        }
        const resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== digitos.charAt(0)) return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2) pos = 9;
        }
        const resultado2 = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado2 !== digitos.charAt(1)) return false;

        return true;
      },
    },
  }
</script>
