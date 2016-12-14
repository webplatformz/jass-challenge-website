import React from 'react';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import browserHistory from 'react-router/lib/browserHistory';

// pages
import Layout from './Layout';
import Landing from './LandingPage';
import Login from './LoginPage';
import Signup from './SignupPage';

export default (props) => (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={Landing} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>
)
