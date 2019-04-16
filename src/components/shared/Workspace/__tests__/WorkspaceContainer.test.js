/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';
import Root from '../../../../store/Root';

/** Components section import **/
import WorkspaceContainer from '../WorkspaceContainer';

describe('WorkspaceContainer', () => {
  let wrapper;

  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <WorkspaceContainer/>
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
    expect(wrapper.find('WorkspaceComponent').length).toEqual(1);
  });
});
