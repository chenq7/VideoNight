import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }

  handleDemo() {
    let user = { username: "demouser", password: "demopassword" };
    (this.props.formType === "Sign Up" ) ? this.props.loginUser(user) : this.props.processForm(user);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    let {formType} = this.props;
    let {username, email, password} = this.state;
    let formName = (formType === "Sign Up") ? "signup-form" : "signin-form";
    let formContainer = (formType === "Sign Up") ? "signup-container" : "signin-container";
    return (
      <div className={formName}>
        <img src={window.logo} className="logo" alt="VideoNight" /> <br/>
        {formType === "Sign Up" ? <h4>Create your VideoNight Account</h4> : <span>{formType}</span>}
        <p>to continue to VideoNight</p>
        <form onSubmit={this.handleSubmit} className={formContainer}>
          <input type="text" value={username} onChange={this.update('username')} placeholder="  Username" />
          {formType === 'Sign Up' ? 
            <input type="text" value={email} onChange={this.update('email')} placeholder="  Email" /> : null }
          <input type="password" value={password} onChange={this.update('password')} placeholder="  Password" />
          {formType == 'Sign Up' ? <p className="note">Use 6 or more characters with a mix of letters, numbers & symbols</p> : null }
          <a className="demo" onClick={() => this.handleDemo()}>login as a demo user</a>
          <div className="form-actions">
            {formType === 'Sign In' ? <Link to="signup">Create account</Link> : <Link className="note2" to="login">Sign in instead</Link>}
            <button className="login-button">{formType}</button>
          </div>
        </form>
        <ul>
          {this.props.errors.session.map(error => { return (<li>{error}</li>); })}
        </ul>
      </div>
    );
  }
}

export default SessionForm;