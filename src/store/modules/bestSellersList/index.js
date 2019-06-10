// https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=iGAsukxThdPQO8RkSXu1L17KzoYAO64t

import axios from 'axios';

const API_KEY = 'iGAsukxThdPQO8RkSXu1L17KzoYAO64t';

const state = {
    bestSellersList: [],
}

const mutations = {
    UPDATE_BEST_SELLERS_LIST(state, payload) {
        state.bestSellersList = payload;
    }
}

const actions = {
    getBestSellersList({ commit }, categoryName) {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists.json?list=${categoryName}&api-key=${API_KEY}`)
        .then((response) => {
            commit('UPDATE_BEST_SELLERS_LIST', response.data.results);
        });
    },
    clearBestSellersList({ commit }) {
        commit('UPDATE_BEST_SELLERS_LIST', []);
    }
}

const getters = {
    bestSellersList: state => state.bestSellersList,
}

const bestSellersModule = {
  state,
  mutations,
  actions,
  getters
}

export default bestSellersModule;