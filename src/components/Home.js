/** Created: 2019-04-09 by: snow-dev **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';

/** Language imports **/

/** Import component section **/

/** Import helpers section **/

/** Import resources section **/

/** Import UI components **/


class Home extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }


  render() {
    return (
      <h2>Hello {this.props.name}!</h2>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
Home.propTypes = {};

export default Home;