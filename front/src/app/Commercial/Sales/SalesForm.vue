<template lang="pug">
.sdsd
  span form sales
  input-cnpj
  input-cpf
</template>

<script>
import InputCnpj from 'Support/components/inputs/InputCnpj.vue';
import InputCpf from 'Support/components/inputs/InputCpf.vue';

export default {
  components: {
    InputCnpj,
    InputCpf,
  },
};
</script>
