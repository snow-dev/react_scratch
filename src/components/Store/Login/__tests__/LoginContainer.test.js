/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';
import Root from '../../../../store/Root';
import LoginContainer from '../LoginContainer';

/** Components section import **/

describe('LoginContainer', () => {
  let wrapper;

  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <LoginContainer/>
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should render a div', () => {
    expect(wrapper.find('LoginComponent').length).toEqual(1);
  });
});
