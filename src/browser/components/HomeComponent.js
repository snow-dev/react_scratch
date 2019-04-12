/** Created: 2019-04-10 by: snow-dev **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';

/** Language imports **/

/** Import component section **/

/** Import helpers section **/

/** Import resources section **/

/** Import UI components **/


class HomeComponent extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }


  render() {
    return (
      <div>
        <h2>Home Component </h2>
      </div>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
HomeComponent.propTypes = {};

export default HomeComponent;