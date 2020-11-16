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
            url: `${config.backUrl}/configurations/getConfigurationForSelect`
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })
    })
};

module.exports = getConfigurationsForSelect;
