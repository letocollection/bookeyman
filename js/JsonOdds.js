var axios = require('axios')

var config = {
  headers: {'JsonOdds-API-Key': '7b1ba5d7-c3d0-11e6-a4e1-067e79ca11d3'}
};

/*axios.get('https://jsonodds.com/api/odds/nfl', config)
  .then(function (response) {
  	var odds = response
    console.log(odds);
  })
  .catch(function (error) {
    console.log(error);
  });*/

/*axios.get('https://jsonodds.com/api/odds/nba', config)
  .then(function (response) {
    console.log(response.data[0]);
  })
  .catch(function (error) {
    console.log(error);
  });*/

  axios.get('https://jsonodds.com/api/odds/mma', config)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });