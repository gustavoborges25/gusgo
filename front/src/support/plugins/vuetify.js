import Vue from 'vue';
import Vuetify from 'vuetify';
import '@/style/main.styl';

Vue.use(Vuetify, {
  theme: {
    primary: '#3e84ed',
    secondary: '#ffba38',
    accent: '#f2433c',
    error: '#be3132',
    info: '#0df5e3',
    success: '#00a75a',
    warning: '#FFC107',
    lightgrey: '#757575',
  },
  options: {
    customProperties: true,
  },
  iconfont: 'md',
});
