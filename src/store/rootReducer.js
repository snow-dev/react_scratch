import {combineReducers} from 'redux';
import {localizeReducer} from 'react-localize-redux';

/* Own reducer section import */

// -> Own reducers.

export default combineReducers({
  localize          : localizeReducer,
});