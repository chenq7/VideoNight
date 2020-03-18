import { connect } from "react-redux";
import { hideSidebar } from "../../actions/sidebar_actions";
import Sidebar from "./sidebar";

const mapStateToProps = state => {
  return {
    sidebar: state.ui.sidebar
  };
};

const mapDispatchToProps = dispatch => ({
  hideSidebar: () => dispatch(hideSidebar())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
