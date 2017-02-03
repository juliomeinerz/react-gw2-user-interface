import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import Login from '../views/login';
import Home from '../views/home';
import Characters from '../views/characters';
import Main from '../views/main';

const routes = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Login} /> 
    </Route>
    <Route path="/gw2/" component={Main}>   
      <IndexRoute component={Home} />
      <Route path="/gw2/characters" component={Characters} />
    </Route>
  </Router>
)

export default routes;
