import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})