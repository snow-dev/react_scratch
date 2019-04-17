
/* Import section */
import loginReducer, {initialState} from '../loginReducer';
import {SET_ACCESS_TOKEN} from '../loginActions';
import {fromJS} from 'immutable';


describe('case default', () => {
  it('should be correct and return initialState as default', () => {
    // For test default case, we use any action type, this way falls in default.
    const action = {type: "SOME_ONE"};
    expect(loginReducer(undefined, action)).toEqual(initialState);
  });
});

describe('case: SET_ACCCESS_TOKEN', () => {
  const action = {
    type: SET_ACCESS_TOKEN,
    accessToken: 'some.safe.token',
  };

  const expectedState = fromJS({
    accessToken: 'some.safe.token',
    successfullyLogged: true,
  });

  expect(loginReducer(undefined, action)).toEqual(expectedState);
});

