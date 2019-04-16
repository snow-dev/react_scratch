/** Created: 2019-04-15 by: snow-dev **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';

/** Language imports **/
import {withLocalize} from 'react-localize-redux';

/** Import component section **/

/** Import helpers section **/
import PropTypes from 'prop-types';

/** Import resources section **/

/** Import UI components **/


class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }


  render() {
    return (
      <div className="header">
        <h2>header-component </h2>
      </div>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
HeaderComponent.propTypes = {};

export default withLocalize(HeaderComponent);