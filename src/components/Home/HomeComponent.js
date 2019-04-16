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


class HomeComponent extends Component {

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
      <div className="home-component">
        <form id="article-form">
          <Input
            text="SEO Title"
            label="SEO Title"
            type={'text'}
            id={"seo_title"}
            value={this.state.seoTitle}
            handleChange={this.handleChange}
          />
        </form>
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