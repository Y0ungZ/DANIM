import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './sign-in/sign-in';
import SignUp from './sign-up/sign-up';
import authStore from '../../stores/auth-store';

const Auth = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SignIn authStore={authStore} />
        </Route>
        <Route path="/signup" exact>
          <SignUp authStore={authStore} />
        </Route>
        <Route path="/interest" exact></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Auth;
