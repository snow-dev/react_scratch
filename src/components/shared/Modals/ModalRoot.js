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

/** Import resources section **/

/** Import UI components **/


export class ModalRoot extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      counter: 0,
    };
  }

  incrementCounter(two){
    let counter;
    counter = two ? this.state.counter + 2 : this.state.counter + 1;
    this.setState({counter});
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
      case modalType.LOGIN_MODAL_TYPE: {
        return (
          <div>Hola</div>
        );
      }

      default: {
        return null;
      }
    }
  }


  render() {
    // return this.getModal();
    const { two } = this.props;
    return (
      <div>
        <h3>{this.state.counter}</h3>
        <button onClick={() => this.incrementCounter(two)} >Increment</button>
      </div>
    )
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
  return {};
}

/**
 * Map some actions to be injected as props.
 * @param dispatch
 * @returns
 */
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);