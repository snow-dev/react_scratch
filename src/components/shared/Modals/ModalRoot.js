/** Created: 2019-04-22 **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';

/**  Redux section import **/
import {connect} from 'react-redux';

/** Language imports **/
import {withLocalize} from 'react-localize-redux';


/** Import component section **/

/** Import helpers section **/
import PropTypes from 'prop-types';
import LoginModalContainer from './Login/LoginModalContainer';
import {closeModal} from '../../../store/modals/modalActions';

/** Actions section import **/
import * as modalActions from '../../../store/modals/modalActions'


export class ModalRoot extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  /**
   * Call close modal action.
   */
  closeModal(){
    this.props.closeModal();
  }

  /**
   * Here we get requested modal, based on the modalType data from store.
   */
  getModal(){
    let modalType = this.props.modal.get('modalType');
    switch (modalType) {
      case modalActions.LOGIN_MODAL_TYPE: {
        return (
          <LoginModalContainer onClose={this.closeModal}
                               open={this.props.modal.get('isVisible')}
                               properties={this.props.modal.get('modalProps')}
          />
        );
      }

      default: {
        return null;
      }
    }
  }


  render() {
    return this.getModal();
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
ModalRoot.propTypes = {};

/**
 * Map some parameters from store to be injected to component.
 * @param store
 * @returns {{}}
 */
function mapStateToProps(store) {
  return {
    modal: store.modal
  };
}

/**
 * Map some actions to be injected as props.
 * @param dispatch
 * @returns
 */
const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(closeModal());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);

