import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import Header from './header';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (type) => dispatch(openModal(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)