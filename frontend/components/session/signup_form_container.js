import { signup, login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (props, ownProps) => ({
  errors: props.errors,
  formType: 'Sign Up'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user)),
  loginUser: user => dispatch(login(user)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);