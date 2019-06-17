// https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=iGAsukxThdPQO8RkSXu1L17KzoYAO64t

import axios from 'axios';

const API_KEY = 'iGAsukxThdPQO8RkSXu1L17KzoYAO64t';

function responseFormatter(response) {
    return response.map(book => {
        return {
            book_details: [
                { 
                    title: book.title,
                    author: book.author,
                    publisher: book.publisher,
                    description: book.description,

                }
            ],
            published_date: 'N/A',
            amazon_product_url: book.amazon_product_url,
        }
    })
}

const state = {
    bestSellersList: [],
    bestSellersError: '',
}

const mutations = {
    UPDATE_BEST_SELLERS_LIST(state, payload) {
        state.bestSellersList = payload;
    },
    UPDATE_BEST_SELLERS_ERROR_MESSAGE(state, err) {
        state.bestSellersError = err;
    }
}

const actions = {
    getBestSellersList({ commit }, params) {
        if(params.date){
            let date = JSON.stringify(params.date[0])
                .split('T')[0]
                .split('"')[1];
            axios.get(`https://api.nytimes.com/svc/books/v3/lists/${date}/${params.categoryName}.json?api-key=${API_KEY}`)
            .then((response) => {
                let formattedResponse = responseFormatter(response.data.results.books);
                commit('UPDATE_BEST_SELLERS_ERROR_MESSAGE', '');
                commit('UPDATE_BEST_SELLERS_LIST', formattedResponse);
            })
            .catch((error) => {
                if(error.response.data.errors !== undefined) {
                    const err = error.response.data.errors[0]
                    commit('UPDATE_BEST_SELLERS_ERROR_MESSAGE', err);
                    return;
                }
                if (error.response.data.fault.faultstring) {
                    const err = error.response.data.fault.faultstring.split('Identifier')[0];
                    commit('UPDATE_BEST_SELLERS_ERROR_MESSAGE', err);
                    return;
                }
            });
        } else {
            axios.get(`https://api.nytimes.com/svc/books/v3/lists.json?list=${params.categoryName}&api-key=${API_KEY}`)
            .then((response) => {
                commit('UPDATE_BEST_SELLERS_LIST', response.data.results);
            }).catch((error) => {
                if (error.response.data.fault.faultstring) {
                    const err = error.response.data.fault.faultstring.split('Identifier')[0];
                    commit('UPDATE_BEST_SELLERS_ERROR_MESSAGE', err);
                    return;
                }
            });
        }
    },
    clearBestSellersList({ commit }) {
        commit('UPDATE_BEST_SELLERS_LIST', []);
        commit('UPDATE_BEST_SELLERS_ERROR_MESSAGE', '');
    }
}

const getters = {
    bestSellersList: state => state.bestSellersList,
    bestSellersError: state => state.bestSellersError,
}

const bestSellersModule = {
  state,
  mutations,
  actions,
  getters
}

export default bestSellersModule;