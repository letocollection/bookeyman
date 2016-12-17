var React = require('react');
var ChooseBet = require('../components/ChooseBet');

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
    console.log(query);
    //this is where we are going to fetch the games, then update state.
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
