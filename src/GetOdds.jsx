const React = require('react')
const axios = require('axios')
/*const JSONodds = require('../utilities/JSONodds')*/

const GetOdds = React.createClass({
	componentDidMount () {
		
		axios.get('http://swapi.co/api/people').then(function(results) {
			console.log(results)
		})
	},

	render() {
		return (
			<div>Trying to get Axios to work!</div>
		)
	}
})

module.exports = GetOdds

