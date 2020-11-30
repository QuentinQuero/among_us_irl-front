'use strict';

const axios = require('axios');
const config = require('@/config/default.json');

const getConfigurationsForSelect = function () {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
            url: `${config.backUrl}/configurations/forSelect`
        }).then((response) => {
            resolve(response.data.data);
        }).catch((error) => {
            reject(error);
        })
    })
};

module.exports = getConfigurationsForSelect;
