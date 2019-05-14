import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

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
  iconfont: 'md',
});
