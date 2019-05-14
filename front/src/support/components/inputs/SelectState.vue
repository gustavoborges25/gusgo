<template lang="pug">
  v-autocomplete(
    no-data-text="Não encontrado"
    return-object
    item-value="id"
    item-text="nome"
    :readonly="readonly || loading"
    :loading="loading"
    :label="label"
    :items="states"
    :rules="[rules.required]"
    v-model="state"
    @change="$emit('change', $event)"
  )
</template>

<script>
  export default {
    name: 'select-state',
    props: {
      value: {
        type: Object,
        default: function () { return {} }
      },
      label: {
        type: String,
        default: 'Estado',
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
        loading: true,
        states: [],
        rules: {
          required: value => {
            if (!value && vm.required) {
              return 'Estado obrigatório!'
            }
            return true
          },
        }
      }
    },
    computed: {
      state: {
        get() {
          return this.value || { id: 12, sigla: 'AC', nome: 'Acre', regiao: { id: 1, sigla: 'N', nome: 'Norte' } }
        },
        set(newValue) {
          this.$emit('input', newValue)
        },
      },
    },
    created() {
      this.loadStates();
    },
    methods: {
      loadStates () {
        this
          .$http
          .get('http://servicodados.ibge.gov.br/api/v1/localidades/estados')
          .then(response => {
            this.states = response.body
            this.loading = false
        })
      },
    }
  }
</script>
