/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';
import Root from '../../../../store/Root';

/** Components section import **/
import WorkspaceComponent from '../WorkspaceComponent';

describe('WorkspaceComponent', () => {
  let wrapper;

  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <WorkspaceComponent/>
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should render a workspace div element', () => {
    expect(wrapper.find('.workspace').length).toEqual(1);
  });
});