var axios = require('axios')

var config = {
	headers: {'JsonOdds-API-Key': '7b1ba5d7-c3d0-11e6-a4e1-067e79ca11d3'}
}

var helpers = {
	function JSONodds () {
		return axios.get('https://jsonodds.com/api/odds/nfl', config)
		.then (function(response) {
			console.log(response)
		})
		.catch(function (error) {
			console.log(error)
		})
	}
}

module.exports = JSONodds



