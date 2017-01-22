const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Bets = require('./Bets')
const Database = require('./Database')
const { Router, Route, hashHistory } = require('react-router')
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBkGSfuPzOuZVUolkcLApQNAnR2tIPYzaQ",
    authDomain: "bookeyman-f68c9.firebaseapp.com",
    databaseURL: "https://bookeyman-f68c9.firebaseio.com",
    storageBucket: "bookeyman-f68c9.appspot.com",
    messagingSenderId: "342171387632"
  };
  firebase.initializeApp(config);

const App = () => (
  

  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/bets' component={Bets} />
    <Route path='/database' component={Database} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))