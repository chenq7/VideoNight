import { signup, login, demoLogin, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user)),
  loginUser: user => dispatch(login(user)),
  demoLogin: () => dispatch(demoLogin()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);