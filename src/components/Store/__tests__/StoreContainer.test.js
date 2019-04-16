/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';

/** Components section import **/
import StoreContainer from '../StoreContainer';
import Root from '../../../store/Root';

describe('StoreContainer', () => {
  let wrapper;

  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <StoreContainer/>
      </Root>
    );
  });


  afterEach(() => {
    wrapper.unmount();
  });

  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should render a StoreComponent', () => {
    expect(wrapper.find('StoreComponent').length).toEqual(1);
  });
});
