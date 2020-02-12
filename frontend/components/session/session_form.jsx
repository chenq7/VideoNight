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
    return (
      <div className="form">
        <img src={window.logo} className="logo" alt="VideoNight" /> <br/>
        <span>{this.props.formType}</span>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.update('username')} placeholder="Username" />
          <br/>
          {this.props.formType === 'Sign Up' ? 
            <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email" /> : null }
          <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" />
          <br/>
          <button className="login">{this.props.formType}</button>
        </form>
        {this.props.formType === 'Sign In' ? <Link to="signup">Create an account</Link> : <Link to="login">Sign In</Link>}
        <a className="demo" onClick={() => this.handleDemo()}>login as a demo user</a>
        <ul>
          {this.props.errors.session.map(error => { return (<li>{error}</li>); })}
        </ul>
      </div>
    );
  }
}

export default SessionForm;