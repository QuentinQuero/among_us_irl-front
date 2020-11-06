'use strict';

const axios = require('axios');
const config = require('../../config/default.json');

const isUserAdmin = function () {
    return new Promise((resolve) => {
        axios({
            method: 'get',
            url: `${config.backUrl}/users/isAdmin`,
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then((response) => {
            resolve(response.data);
        });
    });
};

module.exports = isUserAdmin;
