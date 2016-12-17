var React = require('react');

function ChooseBet (props) {
  return props.isLoading === true
    ? <p>Loading Potential Games...</p>
    : <p>This is ChooseBet</p>

}

module.exports = ChooseBet;
