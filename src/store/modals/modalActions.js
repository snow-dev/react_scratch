// -> Export action types for display modal.
export const SHOW_MODAL   = 'SHOW_MODAL';
export const CLOSE_MODAL  = 'CLOSE_MODAL';

// -> Define all modal types.
export const LOGIN_MODAL_TYPE = 'LOGIN_MODAL_TYPE';

/**
 * Actions for fire and show a modal, according to parameter values.
 * @param modalType
 * @param props
 * @param version
 * @returns {{modalType: *, modalProps: *, type: string, modalVersion: number}}
 */
export function showModal(modalType, props, version=1) {
  return {
    type        : SHOW_MODAL,
    modalType   : modalType,
    modalProps  : props,
    modalVersion: version
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}




