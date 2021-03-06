import axios from 'axios';
import { parseComponent } from 'vue-template-compiler';

const API_KEY = 'iGAsukxThdPQO8RkSXu1L17KzoYAO64t';

function getItemFromBestSellersList(itemName, bestSellersList) {
    return bestSellersList.filter((item) => {
        return item
            .book_details[0]
            .title.split(' ').join('-').toLowerCase() 
            === itemName
    })
}

function responseFormatter(response) {
    return response.map(book => {
        return {
            book_details: [
                { 
                    title: book.title,
                    author: book.author,
                    publisher: book.publisher,
                    description: book.description === '' ? 'N/A' :book.description,

                }
            ],
            published_date: 'N/A',
            amazon_product_url: book.amazon_product_url,
        }
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
        if (params.selectedDate !== "null") {
            return axios.get(`https://api.nytimes.com/svc/books/v3/lists/${params.selectedDate}/${params.categoryName}.json?api-key=${API_KEY}`)
                .then((response) => {
                    const formattedResponse = responseFormatter(response.data.results.books);
                    const result = getItemFromBestSellersList(params.dynamicId, formattedResponse);
                    commit('UPDATE_ITEM', result[0]);
                })
        } else {
            return axios.get(`https://api.nytimes.com/svc/books/v3/lists.json?list=${params.categoryName}&api-key=${API_KEY}`)
                .then((response) => {
                    const result = getItemFromBestSellersList(params.dynamicId, response.data.results);
                    commit('UPDATE_ITEM', result[0]);
                });
        }
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