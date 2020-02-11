import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header className="header1">
      <h1>VideoNight</h1>
      <img src="https://media.giphy.com/media/13Nc3xlO1kGg3S/giphy.gif" className="logo"/>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;