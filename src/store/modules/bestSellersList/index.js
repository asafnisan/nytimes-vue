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
}

const mutations = {
    UPDATE_BEST_SELLERS_LIST(state, payload) {
        state.bestSellersList = payload;
    }
}

const actions = {
    getBestSellersList({ commit }, params) {
        if(params.date){
            let date = JSON.stringify(params.date[0])
                .split('T')[0]
                .split('"')[1];
            console.log(date);
            axios.get(`https://api.nytimes.com/svc/books/v3/lists/${date}/${params.categoryName}.json?api-key=${API_KEY}`
            )
            .then((response) => {
                let formattedResponse = responseFormatter(response.data.results.books);
                commit('UPDATE_BEST_SELLERS_LIST', formattedResponse);
            });
        } else {
            axios.get(`https://api.nytimes.com/svc/books/v3/lists.json?list=${params.categoryName}&api-key=${API_KEY}`)
            .then((response) => {
                console.log(response.data.results);
                commit('UPDATE_BEST_SELLERS_LIST', response.data.results);
            });
        }
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