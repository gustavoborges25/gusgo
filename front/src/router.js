import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/app/routes';


Vue.use(Router);

const router = new Router({
  routes,
});

export default router;
