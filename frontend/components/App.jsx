import React from "react";
import { Route } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import SignupFormContainer from './session/signup_form_container';
import EmailForm from './session/email_form';
import PasswordForm from './session/password_form';
import VideoIndex from './video/video_index_container';


const App = (props) => (
  <>
    <Route exact path='/' component={VideoIndex} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={EmailForm} />
    <AuthRoute path="/login2" component={PasswordForm} />
  </>
);

export default App;