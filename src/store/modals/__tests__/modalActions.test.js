

import * as modalActions from '../modalActions';

describe('Modals actions showModal', () => {

  it('should has correct type', () => {
    const action = modalActions.showModal();
    expect(action.type).toEqual(modalActions.SHOW_MODAL);
  });
});

describe('Close modal actions', () => {
  it('should has the correct type', () => {
    const action = modalActions.closeModal();
    expect(action.type).toEqual(modalActions.CLOSE_MODAL);
  });
});