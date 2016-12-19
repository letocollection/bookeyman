var axios = require('axios');

var config = {
  headers: {'JsonOdds-API-Key': '7b1ba5d7-c3d0-11e6-a4e1-067e79ca11d3'}
};

var helpers = {
  getGames: function() {

    return axios.get('https://jsonodds.com/api/odds/nfl', config)
    .then(function (response) {
    console.log(response.data);
    return response.data;
    })
    .catch(function (error) {
    console.log(error);
    });
  }
};


module.exports = helpers;
