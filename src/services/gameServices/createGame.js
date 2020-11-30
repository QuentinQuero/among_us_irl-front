'use strict';

const axios = require('axios');
const config = require('@/config/default.json');

const createGame = function (gameAccessCode, configurationId) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
            url: `${config.backUrl}/games/create`,
            data: {
                gameAccessCode: gameAccessCode,
                configurationId: configurationId
            }
        }).then((response) =>{
            resolve(response);
        }).catch((error) => {
            reject(error)
        })
    });
};

module.exports = createGame;
