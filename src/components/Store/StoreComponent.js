/** Created: 2019-04-11 by: snow-dev **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';

/** Language imports **/

/** Import component section **/

/** Import helpers section **/
import PropTypes from 'prop-types';
import Input from '../shared/Input';

/** Import resources section **/

/** Import UI components **/


class StoreComponent extends Component {

  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      seoTitle: '',
    };
  }

  /**
   *
   * @param event
   */
  handleChange(event) {
    event.preventDefault();
    this.setState({
      seoTitle: event.target.value,
    });
  }


  render() {
    return (
      <div className="store">
        <div className="store__header">
          Workspace Header
        </div>

        <div className="store__overview">
          <div className="store__overviewcard">
            <div className="icon">Overview</div>
            <div className="info">Card Info</div>
          </div>

          <div className="store__overviewcard">
            <div className="icon">Overview</div>
            <div className="info">Card Info</div>
          </div>

          <div className="store__overviewcard">
            <div className="icon">Overview</div>
            <div className="info">Card Info</div>
          </div>
        </div>

        <div className="store__banner">
          <div className="product">Products 0</div>
          <div className="product">Products 1</div>
          <div className="product">Products 2</div>
          <div className="product">Products 3</div>
        </div>

        <div className="store__promotions">
          <div>Promotions</div>
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
          <div className="card">Card 4</div>

        </div>
      </div>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
StoreComponent.propTypes = {};

export default StoreComponent;