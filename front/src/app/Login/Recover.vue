<template lang='pug'>
  v-layout
    v-flex(xs6).primary
      v-layout(
      align-center
      justify-center
      fill-height
      )
        img.login--logo(src="@/assets/logo.png")
    v-flex(xs6)
      v-layout(
        align-center
        justify-center
        fill-height
      )
        v-card.elevation-3.white(min-width="50%")
          v-card-text
            input-email(
              required
              v-model="user.email"
            )
            input-password(
              required
              v-model="user.password"
            )
            v-btn(
              flat
              small
              to="toForgotPassword()"
            ) Esqueceu sua senha?
            btn-action.mb-3(@click="login()")
</template>

<script>
  import BtnAction from 'Support/components/buttons/BtnAction.vue';
  import InputEmail from 'Support/components/inputs/InputEmail.vue';
  import InputPassword from 'Support/components/inputs/InputPassword.vue';
  // import Login from 'Domain/Login/login';

  export default {
    components: {
      BtnAction,
      InputEmail,
      InputPassword,
    },
    data () {
      return{
        user: {
          email: '',
          password: '',
        }
      }
    },
    methods: {
      login() {
        login(this.user)
          .then(() => {
            this.$router.replace('/');
          }, (error) => {
            //eslint-disable-next-line
            console.log(error);
          });
      },
      toForgotPassword() {
        this.$router.replace({ name: 'forgotPassword' });
      },
    }
  }
</script>

<style lang="sass">
.login
  &--card
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    width: 40vh
    margin-top: -45px
  &--logo
    img
      max-width: 550px !important
</style>

