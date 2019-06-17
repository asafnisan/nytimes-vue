// https://api.nytimes.com/svc/books/v3/lists/2019-05-01/combined-print-and-e-book-fiction.json?api-key=iGAsukxThdPQO8RkSXu1L17KzoYAO64t
// https://api.nytimes.com/svc/books/v3/lists.json?list=chapter-books&api-key=iGAsukxThdPQO8RkSXu1L17KzoYAO64t
// https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=iGAsukxThdPQO8RkSXu1L17KzoYAO64t
// sample api calls are above.
// date picker will be based on this: https://github.com/ankurk91/vue-flatpickr-component

import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

const EventBus = new Vue();

export default EventBus;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

