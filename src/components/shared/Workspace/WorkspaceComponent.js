/** Created: 2019-04-16 by: snow-dev **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';

/** Language imports **/
import {withLocalize} from 'react-localize-redux';

/** Import component section **/

/** Import helpers section **/
import PropTypes from 'prop-types';
import HomeContainer from '../../Home/HomeContainer';

/** Import resources section **/

/** Import UI components **/


class WorkspaceComponent extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="workspace">
        <HomeContainer/>
      </div>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
WorkspaceComponent.propTypes = {};

export default withLocalize(WorkspaceComponent);