import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';

ReactStormpath.init();
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
    </Route>
  </Router>,
  document.getElementById('app-container')
);
