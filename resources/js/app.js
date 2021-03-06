require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';

import swal from 'sweetalert2'
window.swal = swal;

const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.toast = toast;   

import Gate from "./Gate";
Vue.prototype.$gate = new Gate(window.user);

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const swalOptions = {
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
}
Vue.use(VueSweetalert2, swalOptions);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

Vue.component('pagination', require('laravel-vue-pagination'));

import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading);

const routes = [
    { path: '/home', component: require('./components/Dashboard.vue').default },
    { path: '/users', component: require('./components/Users.vue').default },
  ]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});

Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate',function(created){
    return moment(created).format('MMMM Do YYYY');
});


window.Fire =  new Vue();

Vue.component(
    'not-found',
    require('./components/404.vue').default
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    el: '#app',
});
