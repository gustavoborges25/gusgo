export default {
  methods: {
    showSuccess(message) {
      const options = {
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        title: message,
        type: 'success',
      };
      this.$swal(options);
    },
    showErrors(errors) {
      errors.forEach((error) => {
        const { message: messages } = error;
        messages.forEach((message) => {
          this.showError(message);
        });
      });
    },
    showError(message) {
      const options = {
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        title: message,
        type: 'error',
      };
      this.$swal(options);
    },
    optionsModalConfirm(options = {
      title: 'Confirma?',
      text: '',
    }) {
      const config = {
        ...options,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'primary',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
      };
      return config;
    },

  },
};
