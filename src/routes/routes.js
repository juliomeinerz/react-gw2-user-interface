import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import Login from '../views/login';
import Home from '../views/home';

const routes = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Login} />    
      <Route path="/home" component={Home} />
    </Route>
  </Router>
)

export default routes;
