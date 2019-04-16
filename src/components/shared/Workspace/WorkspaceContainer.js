/** Created: 2019-04-16 **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';

/**  Redux section import **/
import {connect} from 'react-redux';

/** Import component section **/

/** Import helpers section **/
import PropTypes from 'prop-types';
import WorkspaceComponent from './WorkspaceComponent';

/** Import resources section **/

/** Import UI components **/


class WorkspaceContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }


  render() {
    return (
      <WorkspaceComponent/>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
WorkspaceContainer.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceContainer);