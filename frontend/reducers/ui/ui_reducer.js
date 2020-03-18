import { combineReducers } from 'redux';

import modal from './modal_reducer';
import sidebar from './sidebar_reducer';

export default combineReducers({
  modal,
  sidebar
});
