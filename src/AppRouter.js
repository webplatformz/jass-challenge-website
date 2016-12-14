import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './Layout';
import LandingPage from './LandingPage';
import LandingLayout from './LandingLayout';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProfilePage from './ProfilePage';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route component={LandingLayout}>
        <Route path="/" component={LandingPage} />
      </Route>
      <Route component={Layout}>
        <Route path="login" component={LoginPage} />
        <Route path="signup" component={SignupPage} />
        <Route path="profile" component={ProfilePage} />
      </Route>
    </Router>
  );
};

export default AppRouter;
