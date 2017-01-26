const React = require('react')
const JSONodds = require('../utilities/JSONodds')

const GetOdds = React.createClass({
	componentDidMount () {
		JSONodds.JSONodds()
	},
	render() {
		return (
			<pre><code>
				{JSON.stringify(JSONodds,null, 4)}
			</code></pre>
		)
	}
})

module.exports = GetOdds

