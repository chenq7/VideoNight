import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container';



const App = (props) => (
  <div>
    <Route exact path='/' component={GreetingContainer}/>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;