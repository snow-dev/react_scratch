/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';

/** Components section import **/
import HomeContainer from '../HomeContainer';
import Root from '../../../store/Root';

describe('HomeContainer', () => {
  let wrapper;

  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <HomeContainer/>
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should render a HomeComponent', () => {
    expect(wrapper.find('HomeComponent').length).toEqual(1);
  });
});
