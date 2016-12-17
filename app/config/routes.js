var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var ChooseGameContainer = require('../containers/ChooseGameContainer');
var ChooseBetContainer = require('../containers/ChooseBetContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='choosebet' component={ChooseBetContainer} />
    </Route>
  </Router>
);

module.exports = routes;
