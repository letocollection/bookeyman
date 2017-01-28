const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const RecordBets = require('./RecordBets')
const GetOdds = require('./GetOdds')
const Login = require('./Login')
const SignupForm = require('./SignupForm')
const { Router, Route, hashHistory } = require('react-router')
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBkGSfuPzOuZVUolkcLApQNAnR2tIPYzaQ",
  authDomain: "bookeyman-f68c9.firebaseapp.com",
  databaseURL: "https://bookeyman-f68c9.firebaseio.com",
  storageBucket: "bookeyman-f68c9.appspot.com",
  messagingSenderId: "342171387632"
};

firebase.initializeApp(config)

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/signup' component={SignupForm} />
    <Route path='/search' component={Search} />
    <Route path='/recordbets' component={RecordBets} />
    <Route path='/login' component={Login} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))