import React from 'react';
import { connect } from 'react-redux';
import { emailValidation, clearErrors, receiveErrors, demoLogin } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  emailValidation: email => dispatch(emailValidation(email)),
  receiveErrors: errors => dispatch(receiveErrors(errors)),
  clearErrors: () => dispatch(clearErrors()),
  demoLogin: () => dispatch(demoLogin())
})

class EmailForm extends React.Component{

  constructor(props){
    super(props);
    this.state = { valid_email: '' };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemo = this.handleDemo.bind(this)
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.demoLogin().then(() => this.props.history.push('/'))
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.emailValidation(this.state).then(({ valid_email, username }) => {
      if (valid_email){
        const newState = Object.assign({}, this.state, { username: username })
        this.props.history.push({ pathname: '/login2', state: newState })
      }
      else {
        this.props.receiveErrors( ['Email does not exist'])
      }
    });
  }

  handleEnter(e){
    if (e.key === 'Enter'){
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  render() {
    return (
      <div className="signin-form">
        <div className="form-header">
          <img src={window.logo} className="logo" alt="VideoNight" /> <br />
          <h4>Sign In</h4>
          <p>to continue to VideoNight</p>
        </div>
        <form className="signin-container" onSubmit={this.handleSubmit}>

          <div className="input-div">
            <input onKeyDown={this.handleEnter} type="text" placeholder="Email"
              value={this.state.valid_email} onChange={this.update('valid_email')} />
          </div>

          <ul>
            {this.props.errors.session.map(error => { return (<li key={error} className="error-list">
              <img src={window.error} className="error-logo" /> {error} </li>); })}
          </ul>

          <button className="demo" onClick={this.handleDemo}>log in as a demo user</button>

          <p>Not your computer? Use Guest mode to sign in privately.</p>

          <button className="note2" type="button">Learn more</button>

          <div className="form-actions">
            <Link className="note3" to='/signup'>Create account</Link>
            <button className="blue-button">Next</button>
          </div>

        </form>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(EmailForm);