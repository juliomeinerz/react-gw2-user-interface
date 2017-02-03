import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/routes';
import {Router,browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.querySelector('#app')
);
