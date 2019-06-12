import axios from 'axios';

const API_KEY = 'iGAsukxThdPQO8RkSXu1L17KzoYAO64t';

function getItemFromBestSellersList(itemName, bestSellersList) {
    return bestSellersList.filter((item) => {
        return item
            .book_details[0]
            .title.split(' ').join('-').toLowerCase() 
            === itemName
    })
}

const state = {
    item: {},
}

const mutations = {
    UPDATE_ITEM(state, payload) {
        state.item = payload;
    }
}

const actions = {
    getItem({ commit }, params) {
        return axios.get(`https://api.nytimes.com/svc/books/v3/lists.json?list=${params.categoryName}&api-key=${API_KEY}`)
        .then((response) => {
            const result = getItemFromBestSellersList(params.dynamicId, response.data.results);
            commit('UPDATE_ITEM', result[0]);
        });
    },
    clearItemDetail({ commit }) {
        commit('UPDATE_ITEM', {});
    }
}

const getters = {
    item: state => state.item,
}

const itemModule = {
  state,
  mutations,
  actions,
  getters
}

export default itemModule;