import React from 'react';
import { connect } from 'react-redux';
import { userValidation, clearErrors, receiveErrors, demoLogin } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  userValidation: username => dispatch(userValidation(username)),
  receiveErrors: errors => dispatch(receiveErrors(errors)),
  clearErrors: () => dispatch(clearErrors()),
  demoLogin: () => dispatch(demoLogin())
})

class UserForm extends React.Component{

  constructor(props){
    super(props);
    this.state = { valid_user: '' };

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
    this.props.userValidation(this.state).then(({valid_user}) => {
      if (valid_user){
        this.props.history.push({ pathname: '/login2', state: this.state.valid_user })
      }
      else {
        this.props.receiveErrors( ['Username does not exist'])
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
            <input onKeyDown={this.handleEnter} type="text" placeholder="Username"
              value={this.state.valid_user} onChange={this.update('valid_user')} />
          </div>

          <ul>
            {this.props.errors.session.map(error => { return (<li key={error}>{error}</li>); })}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);