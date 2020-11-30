'use strict';

const axios = require('axios');
const config = require('@/config/default.json');

const searchGames = function (filters, pagination, sort) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
            params: {
                filters: filters,
                pagination: pagination,
                sort: sort
            },
            url: `${config.backUrl}/games/search`
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = searchGames;
