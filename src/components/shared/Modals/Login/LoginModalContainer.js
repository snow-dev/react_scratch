/** Created: 2019-04-17 **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';

/**  Redux section import **/
import {connect} from 'react-redux';

/** Language imports **/
import {withLocalize} from 'react-localize-redux';


/** Import component section **/

/** Import helpers section **/
// import PropTypes from 'prop-types';
import LoginComponent from './LoginComponent';
import {closeModal} from '../../../../store/modals/modalActions';
import {executeLogin, unsplashAction} from '../../../../store/login/loginActions';

/** Import resources section **/

/** Import UI components **/


class LoginModalContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      username: '',
      password: '',
      disabled: true
    };
  }


  /**
   * Execute login method handler.
   */
  executeLogin(event){
    event.preventDefault();
    console.debug("LoginModalContainer: executeLogin: ");
    this.props.executeLogin(this.state);
  }

  /**
   * Listen for input field changes and update its correspondent value on local state.
   * @param event
   */
  handleChange(event){
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return <LoginComponent open         ={this.props.open}
                           onClose      ={this.props.onClose}
                           executeLogin ={this.executeLogin}
                           formData     ={this.state}
                           handleChange ={this.handleChange}
    />
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
LoginModalContainer.propTypes = {};

/**
 * Map some parameters from store to be injected to component.
 * @param store
 * @returns {{}}
 */
function mapStateToProps(store) {
  return {
    modal: store.modal,
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
    },
    executeLogin: (userData) => {
      dispatch(executeLogin(userData))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer);