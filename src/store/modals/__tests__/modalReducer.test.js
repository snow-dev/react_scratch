/* Import section */
import modalReducer, {initialState} from '../../modals/modalReducer';
import {CLOSE_MODAL, LOGIN_MODAL_TYPE, SHOW_MODAL} from '../modalActions';
import {fromJS} from 'immutable';

describe('Case defualt', () => {
  it('should be correct and return initialState as default', () => {
    // -> For test default case, we any action type, this way falls in defaults.
    const action = {type: 'SOME_ONE'};
    expect(modalReducer(undefined, action)).toEqual(initialState);
  });
});

describe('case: SHOW_MODAL', () => {
  const action = {
    type          : SHOW_MODAL,
    modalType     : LOGIN_MODAL_TYPE,
    modalProps    : null,
    modalVersion  : null,
  };

  const expectedState = fromJS({
    modalType     : LOGIN_MODAL_TYPE,
    modalProps    : null,
    modalVersion  : null,
    isVisible     : true,
  });

  expect(modalReducer(undefined, action)).toEqual(expectedState);
});

describe('case: CLOSE_MODAL', () => {
  const action = {
    type          : CLOSE_MODAL,
    modalType     : LOGIN_MODAL_TYPE,
    modalProps    : null,
    modalVersion  : null,
  };

  const expectedState = fromJS({
    modalType     : null,
    modalProps    : null,
    modalVersion  : null,
    isVisible     : false,
  });

  expect(modalReducer(undefined, action)).toEqual(expectedState);
});
