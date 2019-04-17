/* Import section */
import {fromJS} from 'immutable';
import * as loginActions from './loginActions';

export const initialState = fromJS({
  accessToken         : '',
  successfullyLogged  : false
});

export default function (state = initialState, action) {
  switch (action.type) {

    // Case 0: Set access token on store.
    case loginActions.SET_ACCESS_TOKEN: {
      return state.merge({
        accessToken         : action.accessToken,
        successfullyLogged  : true,
      });
    }

    // Case default: Return initial state.
    default:
      return state;
  }
}