import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';
import MainPage from '@/pages/MainPage';
import 'iview/dist/styles/iview.css';

Vue.use(Router);
Vue.use(iView);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        }
    ]
});
