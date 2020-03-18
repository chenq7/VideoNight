import { SHOW_SIDEBAR, HIDE_SIDEBAR } from "../../actions/sidebar_actions";

const sidebarReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SHOW_SIDEBAR:
      return action.sidebar;
    case HIDE_SIDEBAR:
      return {};
    default:
      return state;
  }
};

export default sidebarReducer;
