<template lang="pug">
  v-text-field(
    :label="label"
    :readonly="readonly"
    :required="required"
    :rules="[rules.required, rules.min]"
    :append-icon="show ? 'visibility' : 'visibility_off'"
    :type="show ? 'text' : 'password'"
    v-model="password"
    @click:append="show = !show"
  )
</template>

<script>
  export default {
    name: 'text-field-password',
    props: {
      value: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: 'Senha',
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      required: {
        type: Boolean,
        default: false,
      },
      min: {
        type: Boolean,
        default: false,
      },
    },
    data(vm) {
      return {
        show: false,
        rules: {
          required: value => {
            if (!value && vm.required) {
              return 'Senha obrigatória!'
            }
            return true
          },
          min: value => {
            if (value && vm.min) {
              return 'Senha deve ter mais de 8 caracteres!'
            }
            return true
          }
        }
      }
    },
    computed: {
      password: {
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
