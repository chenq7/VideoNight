import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import Header from './header';
import { openModal } from '../../actions/modal_actions';
import { showSidebar, hideSidebar } from '../../actions/sidebar_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    sidebar: state.ui.sidebar
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (type) => dispatch(openModal(type)),
  showSidebar: (sidebar) => dispatch(showSidebar(sidebar)),
  hideSidebar: () => dispatch(hideSidebar())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)