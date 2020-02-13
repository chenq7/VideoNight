import React from 'react';
import { login, receiveErrors, demoLogin, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user)),
  receiveErrors: errors => dispatch(receiveErrors(errors)),
  demoLogin: () => dispatch(demoLogin()),
  clearErrors: () => dispatch(clearErrors())
})

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: this.props.location.state, password: '' }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    if (!this.state.username) this.props.history.push('/login');
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.demoLogin().then(() => this.props.history.push('/'))
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(({ password }) => {
      this.props.history.push({
        pathname: '/',
        state: this.state
      })
    });
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  render() {
    return (
      <div className="signin-form">
        <div className="form-header">
          <img src={window.logo} className="logo" alt="VideoNight" /> <br />
          <h4>Hi {this.state.username}</h4>
          <p className="form-info">enter password to continue</p>
        </div>
        <form className="signin-container" onSubmit={this.handleSubmit}>

          <label>
            <input onKeyDown={this.handleEnter} type="password" placeholder="Enter your password"
              value={this.state.password} onChange={this.update('password')} />
          </label>

          <ul>
            {this.props.errors.session.map(error => { return (<li key={error}>{error}</li>); })}
          </ul>
          
          <button type="button" className="demo2">Forgot Password?</button>

          <div className="form-actions">
            <button className="demo3" onClick={this.handleDemo}>log in as a demo user</button>
            <button className="blue-button">Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForm);