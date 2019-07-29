<template lang="pug">
  v-autocomplete(
    return-object
    no-data-text="Não encontrado"
    item-value="id"
    item-text="nome"
    :readonly="readonly || loading"
    :loading="loading"
    :label="label"
    :items="cities"
    :rules="[rules.required]"
    v-model="city"
    @change="onChange($event)"
  )
</template>

<script>
  import Adress from 'Domain/Adress/Adress';

  export default {
    name: 'SelectCity',
    props: {
      value: {
        type: Object,
        default: () => {},
      },
      label: {
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
        type: String,
        required: true,
      },
    },
    data(vm) {
      return {
        loading: true,
        cities: [],
        rules: {
          required: value => {
            if (!value && vm.required) {
              return 'Cidade é obrigatória!';
            }
            return true;
          },
        },
      };
    },
    computed: {
      city: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue);
        },
      },
    },
    created() {
      this.loadCities();
    },
    methods: {
      loadCities() {
        this.loading = true;
        Adress
          .getCities(this.state)
          .then((data) => {
            this.cities = data;
            this.value = data[0];
            this.loading = false;
          }, (error) => {
            console.log(error);
            this.loading = false;
          });
      },
      onChange($event) {
        this.$emit('change', $event);
      },
    },
    watch: {
      state() {
        this.loadCities();
      },
    },
  };
</script>
