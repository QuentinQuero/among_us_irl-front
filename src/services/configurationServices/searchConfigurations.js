'use strict'

const axios = require('axios');
const config = require('../../config/default.json');

const searchConfigurations = function (filters, pagination, sort) {
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
            url: `${config.backUrl}/configurations/search`
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

module.exports = searchConfigurations;
