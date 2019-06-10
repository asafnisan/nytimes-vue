import axios from 'axios';

const API_KEY = 'iGAsukxThdPQO8RkSXu1L17KzoYAO64t';

const state = {
    categoryNamesList: [],
}

const mutations = {
    UPDATE_CATEGORY_NAMES_LIST(state, payload) {
        state.categoryNamesList = payload;
    }
}

const actions = {
    getCategoryNames({ commit }) {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`)
        .then((response) => {
            commit('UPDATE_CATEGORY_NAMES_LIST', response.data.results);
        });
    }
}

const getters = {
    categoryNamesList: state => state.categoryNamesList,
}

const categoryModule = {
  state,
  mutations,
  actions,
  getters
}

export default categoryModule;