import axios from 'axios';

const API_KEY = 'iGAsukxThdPQO8RkSXu1L17KzoYAO64t';

const state = {
    categoryNamesList: [],
}

const mutations = {
    UPDATE_CATEGORY_NAMES_LIST(state, payload) {
        console.log('here is the state:', state, 'and the payload:', payload);
        state.categoryNamesList = payload;
    }
}

const actions = {
    getCategoryNames({ commit }) {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`)
        .then((response) => {
            console.log('here is the response.data object:', response.data);
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