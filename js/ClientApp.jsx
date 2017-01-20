const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Bets = require('./Bets')
const { Router, Route, hashHistory } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/bets' component={Bets} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
