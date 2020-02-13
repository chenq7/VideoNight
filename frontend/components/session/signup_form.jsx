import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
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
    let user = { username: "demo user", password: "demopassword" };
    this.props.loginUser(user);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {

    let {username, email, password} = this.state;

    return (
      <div className="signup-form">

        <img src={window.logo} className="logo" alt="VideoNight" /> <br/>
        <h4>Create your VideoNight Account</h4> 
        <p>to continue to VideoNight</p>

        <form onSubmit={this.handleSubmit} className="signup-container">

          <input type="text" value={username} onChange={this.update('username')} placeholder="  Username" />
          
          <input type="text" value={email} onChange={this.update('email')} placeholder="  Email" /> 

          <input type="password" value={password} onChange={this.update('password')} placeholder="  Password" />

          <p className="note">Use 6 or more characters with a mix of letters, numbers & symbols</p>

          <button className="demo" onClick={() => this.handleDemo()}>login as a demo user</button>

          <div className="form-actions">
            <Link className="note2" to="login">Sign in instead</Link>
            <button className="blue-button">Sign Up</button>
          </div>
        </form>
        <ul>
          {this.props.errors.session.map(error => { return (<li key={error}>{error}</li>); })}
        </ul>
      </div>
    );
  }
}

export default SignupForm;