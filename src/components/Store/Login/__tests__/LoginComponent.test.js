/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount, shallow} from 'enzyme';

/** Components section import **/
import {LoginComponent} from '../LoginComponent';

describe('LoginComponent', () => {
  let wrapper;

  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = shallow(
      <LoginComponent/>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should render a login div element', () => {
    expect(wrapper.find('.login').length).toEqual(1);
  });
});


