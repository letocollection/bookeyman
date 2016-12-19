var React = require('react');
var ChooseBet = require('../components/ChooseBet');
var jsonOdds = require('../utils/jsonOdds');

var ChooseBetContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return{
      isLoading: true,
      gamesInfo: []
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    jsonOdds.getGames().
    then(function(){
      console.log(response.data);
    });
  },
  render: function() {
    return (
      <ChooseBet
        isLoading={this.state.isLoading}
        gamesInfo={this.state.gamesInfo} />
    );
  }
});

module.exports = ChooseBetContainer;
