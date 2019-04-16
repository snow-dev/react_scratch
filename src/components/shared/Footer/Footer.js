/** Created: 2019-04-16 by: snow-dev **/

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


class Footer extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }



  render() {
    return (
      <div className="footer">
        <h2>footer </h2>
      </div>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
Footer.propTypes = {};

export default withLocalize(Footer);