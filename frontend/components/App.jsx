import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import SignupFormContainer from './session/signup_form_container';
import EmailForm from './session/email_form';
import PasswordForm from './session/password_form';


const App = (props) => (
  <>
    <Route exact path='/' component={GreetingContainer}/>
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={EmailForm} />
    <AuthRoute path="/login2" component={PasswordForm} />
  </>
);

export default App;