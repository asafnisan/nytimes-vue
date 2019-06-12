import Vue from 'vue';
import Vuex from 'vuex';
import category from './modules/categoryList';
import bestSellers from './modules/bestSellersList';
import item from './modules/itemDetail';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    category,
    bestSellers,
    item
  }
})