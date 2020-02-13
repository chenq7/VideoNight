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
    this.handleEnter = this.handleEnter.bind(this);
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.demoLogin().then(() => this.props.history.push('/'));
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  render() {

    let {username, email, password} = this.state;

    return (
      <div className="signup-form">

        <img src={window.logo} className="logo" alt="VideoNight" /> <br/>
        <h4>Create your VideoNight Account</h4> 
        <p>to continue to VideoNight</p>

        <form onSubmit={this.handleSubmit} className="signup-container">

          <input type="text" value={username} onKeyDown={this.handleEnter} onChange={this.update('username')} placeholder="Username" />
          
          <input type="text" value={email} onKeyDown={this.handleEnter} onChange={this.update('email')} placeholder="Your email address" /> 

          <input type="password" value={password} onKeyDown={this.handleEnter} onChange={this.update('password')} placeholder="Password" />

          <p className="note">Use 6 or more characters with a mix of letters, numbers & symbols</p>

          <button className="demo4" onClick={this.handleDemo}>login as a demo user</button>

          <div className="form-actions">
            <Link className="note3" to="login">Sign in instead</Link>
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