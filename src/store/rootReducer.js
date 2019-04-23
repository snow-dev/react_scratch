import {combineReducers} from 'redux';
import {localizeReducer} from 'react-localize-redux';

/* Own reducer section import */
import modalReducer from './modals/modalReducer';

export default combineReducers({
  localize          : localizeReducer,
  modal             : modalReducer,
});