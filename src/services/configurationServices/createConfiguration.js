'use strict';

const axios = require('axios');
const config = require('../../config/default.json');

const createConfiguration = function (name, nbPlayers, nbImposter, cooldown, nbShortMissions, nbNormalMissions, nbLongMissions) {
    return new Promise((resolve) => {
       axios({
           method: 'post',
           url: `${config.backUrl}/configurations/create`,
           headers: {
               authorization: 'Bearer ' + sessionStorage.getItem('jwt')
           },
           data: {
               name: name,
               nbPlayers: nbPlayers,
               nbImposter: nbImposter,
               cooldown: cooldown,
               nbShortMissions: nbShortMissions,
               nbNormalMissions: nbNormalMissions,
               nbLongMissions: nbLongMissions
           }
       }).then((response) => {
           resolve(response)
       }).catch((error) => {
           resolve(error);
       })
    });
}

module.exports = createConfiguration;
