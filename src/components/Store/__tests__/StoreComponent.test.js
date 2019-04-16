/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount, shallow} from 'enzyme';

/** Components section import **/

import StoreComponent from '../StoreComponent';

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
  it('should render a store div element', () => {
    expect(wrapper.find('.store').length).toEqual(1);
  });

  it('should render a store__header div element', () => {
    expect(wrapper.find('.store__header').length).toEqual(1);
  });

  it('should contain a store__overview element', () => {
    expect(wrapper.find('.store__header').length).toEqual(1);
  });

  it('should constain a store__banner', () => {
    expect(wrapper.find('.store__banner').length).toEqual(1);
  });

  it('should contain a store__promotions', () => {
    expect(wrapper.find('.store__promotions').length).toEqual(1);
  });

});

