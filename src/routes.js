import React from 'react';
import {Route, Redirect} from 'react-router';
import App from './components/App';
import LoginPage from './components/LoginPage';
import FaultSeedingPage from './components/FaultSeedingPage';

export default (
  <Route component={App}>
    <Redirect from="/" to={`/experiment/tool.login`} />
    <Route path={`/experiment/tool.login`} component={LoginPage}/>
    <Route path={`/experiment/tool.faultSeeder/userId/:userName`} component={FaultSeedingPage}/>
  </Route>
);
