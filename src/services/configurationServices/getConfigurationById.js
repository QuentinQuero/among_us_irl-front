'use strict';

const axios = require('axios');
const config = require('@/config/default.json');

const getConfigurationById = function (id) {
    return new Promise((resolve, reject) => {
       axios({
           method: 'get',
           headers: {
               authorization: 'Bearer ' + sessionStorage.getItem('jwt')
           },
           url: `${config.backUrl}/configurations/${id}`
       }).then((response) => {
           resolve(response.data.data);
       }).catch((error) => {
           reject(error);
       })
    });

}

module.exports = getConfigurationById;
