<template lang="pug">
  v-autocomplete(
    no-data-text="Não encontrado"
    item-value="id"
    item-text="nome"
    :readonly="readonly || loading"
    :loading="loading"
    :label="label"
    :items="cities"
    :rules="[rules.required]"
    v-model="city"
    @change="$emit('change', $event)"
  )
</template>

<script>
  export default {
    name: 'select-city',
    props: {
      value: {
        type: Object,
        default: function () {},
      },      label: {
        type: String,
        default: 'Cidade',
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      required: {
        type: Boolean,
        default: false,
      },
      state: {
        type: Number,
        default: 12,
      },
    },
    data(vm) {
      return {
        loading: true,
        cities: [],
        rules: {
          required: value => {
            if (!value && vm.required) {
              return 'Cidade obrigatória!'
            }
            return true
          },
        }
      }
    },
    computed: {
      city: {
        get() {
          return this.value || { id: 1200013, nome: 'Acrelândia', microrregiao: { id: 12004, nome: 'Rio Branco', mesorregiao:
                { id: 1202, nome: 'Vale do Acre', UF: { id: 12, sigla: 'AC', nome: 'Acre', regiao:
                      { 'id': 1, sigla: 'N', nome: 'Norte' } } } } }
        },
        set(newValue) {
          this.$emit('input', newValue)
        },
      },
    },
    created() {
      this.loadCities();
    },
    methods: {
      loadCities () {
        this.loading = true
        this
          .$http
          .get('http://servicodados.ibge.gov.br/api/v1/localidades/estados/' + this.state + '/municipios')
          .then(response => {
            this.cities = response.body
            this.value = response.body[0]
            this.loading = false
        })
      },
    },
    watch: {
      state () {
        this.loadCities()
      }
    }
  }
</script>
