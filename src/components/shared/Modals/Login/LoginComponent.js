/** Created: 2019-04-17 by: snow-dev **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';

/** Language imports **/
import {withLocalize} from 'react-localize-redux';

/** Import component section **/
import Modal from 'react-responsive-modal';

/** Import helpers section **/
import PropTypes from 'prop-types';

/** Import resources section **/

/** Import UI components **/


export class LoginComponent extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  close(){
    this.props.onClose();
  }

  render() {
    return (
      <div className="login-modal">
        <Modal open={this.props.open} onClose={this.props.onClose} center className="login-modal">
          <h2>Login Modal</h2>
        </Modal>


      </div>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
LoginComponent.propTypes = {
};

export default withLocalize(LoginComponent);