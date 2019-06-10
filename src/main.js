// https://api.nytimes.com/svc/books/v3/lists/2019-05-01/combined-print-and-e-book-fiction.json?api-key=iGAsukxThdPQO8RkSXu1L17KzoYAO64t
// https://api.nytimes.com/svc/books/v3/lists.json?list=chapter-books&api-key=iGAsukxThdPQO8RkSXu1L17KzoYAO64t
// https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=iGAsukxThdPQO8RkSXu1L17KzoYAO64t
// sample api calls are above.

import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
