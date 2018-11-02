import React from 'react';
import {Route, Redirect} from 'react-router';
import App from './components/App';
import LoginPage from './components/LoginPage';

export default (
  <Route component={App}>
    <Redirect from="/" to={`/experiment/tool.login`} />
    <Route path={`/experiment/tool.login`} component={LoginPage}/>
  </Route>
);
