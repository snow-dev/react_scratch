/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount, shallow} from 'enzyme';

/** Components section import **/

import StoreComponent from '../StoreComponent';
import Root from '../../../store/Root';

describe('StoreComponent', () => {
  let wrapper;

  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = shallow(
      <StoreComponent />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
