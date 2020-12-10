'use strict';

const axios = require('axios');
const config = require('@/config/default.json');

const changeGameStatus = function (gameId) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'put',
            url: `${config.backUrl}/games/changeStatus`,
            headers: {
                authorization: 'Bearer ' + sessionStorage.getItem('jwt')
            },
            data: {
                gameId: gameId
            }
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = changeGameStatus;
