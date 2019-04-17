/** Created: 2019-04-17 by: snow-dev **/

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


export class LoginComponent extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }


  render() {
    return (
      <div className="login">
        <h2>login </h2>
      </div>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
LoginComponent.propTypes = {};

export default withLocalize(LoginComponent);