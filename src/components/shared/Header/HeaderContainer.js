/** Created: 2019-04-15 **/

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
import HeaderComponent from './HeaderComponent';

/** Import resources section **/

/** Import UI components **/


class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }


  render() {
    return (
      <HeaderComponent/>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
HeaderContainer.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);