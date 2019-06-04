<template lang="pug">
  v-autocomplete(
    return-object
    no-data-text="Não encontrado"
    item-value="id"
    item-text="nome"
    :readonly="readonly || loading"
    :loading="loading"
    :label="label"
    :items="states"
    :rules="[rules.required]"
    v-model="state"
    @change="onChange($event)"
  )
</template>

<script>
  import Adress from 'Domain/Adress/Adress';

  export default {
    name: 'SelectState',
    props: {
      value: {
        type: Object,
        default: () => {}
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
              return 'Estado é obrigatório!'
            }
            return true
          },
        }
      }
    },
    computed: {
      state: {
        get() {
          return this.value;
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
        this.loading = true;
        Adress
          .getStates()
          .then((data) => {
            this.states = data;
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
  };
</script>
