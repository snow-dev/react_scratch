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
import PropTypes from 'prop-types';
import LoginComponent from './LoginComponent';

/** Import resources section **/

/** Import UI components **/


class LoginContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }


  render() {
    return (
      <LoginComponent/>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
LoginContainer.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);