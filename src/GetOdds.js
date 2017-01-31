const React = require('react')
const axios = require('axios')
/*const JSONodds = require('../utilities/JSONodds')*/

const GetOdds = React.createClass({
    componentDidMount () {
        
        var config = {
            headers: {'JsonOdds-API-Key': '7b1ba5d7-c3d0-11e6-a4e1-067e79ca11d3'}
        }

        axios.get('https://jsonodds.com/api/odds/nfl', config).then(function(results){
            console.log('results' + results)
        })
    },

    render() {
        return (
            <div>Trying to get Axios to work!</div>
        )
    }
})

module.exports = GetOdds