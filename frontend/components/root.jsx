import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Switch } from "react-router-dom";
import App from "./App";
import { AuthRoute } from "../util/route_util";
import SignupFormContainer from './session/signup_form_container';
import EmailForm from './session/email_form';
import PasswordForm from './session/password_form';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={EmailForm} />
        <AuthRoute path="/login2" component={PasswordForm} />
        <App />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;