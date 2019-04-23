/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';

/** Components section import **/
import Root from '../../../../store/Root';
import HeaderComponent from '../HeaderComponent';

describe('HeaderComponent', () => {
  let wrapper;

  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <HeaderComponent/>
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
    expect(wrapper.find('div').length).toEqual(1);
  });



});
