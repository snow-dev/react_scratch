/* Import section */
import {fromJS} from 'immutable';
import * as modalActions from './modalActions';
// -> We define our initial state.

export const initialState = fromJS({
  isVisible   : false,
  modalType   : null,
  modalProps  : null,
  modalVersion: null,
});

export default function modalReducer(state = initialState, action) {
  switch (action.type) {

    // -> Case 0: Show modal
    case modalActions.SHOW_MODAL: {
      return state.merge({
        isVisible   : true,
        modalType   : action.modalType,
        modalProps  : action.modalProps,
        modalVersion: action.modalVersion,
      });
    }

    // -> Case 1: Close modal.
    case modalActions.CLOSE_MODAL: {
      return initialState;
    }

    // -> Default case: return current state.
    default: {
      return state;
    }

  }
}

