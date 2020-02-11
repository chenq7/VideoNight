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
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div className="form">
        <span>VideoNight</span> <br/>
        <span>{this.props.formType}</span>
        <form onSubmit={this.handleSubmit}>
          <label>Username <br/>
            <input type="text" value={this.state.username} onChange={this.update('username')} />
          </label>
          <br/>
          {this.props.formType === 'Sign Up' ? 
            <><label>Email <br/>
              <input type="text" value={this.state.email} onChange={this.update('email')} />
            </label><br/></>: null }
          <label>Password <br/>
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
          <br/>
          <button className="login">{this.props.formType}</button>
        </form>
        {this.props.formType === 'Login' ? <Link to="signup">Create an account</Link> : <Link to="login">Login</Link>}
        <ul>
          {this.props.errors.session.map(error => { return (<li>{error}</li>); })}
        </ul>
      </div>
    );
  }
}

export default SessionForm;