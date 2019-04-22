/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {shallow, mount} from 'enzyme';
import {ModalRoot} from '../ModalRoot';
import {fromJS} from 'immutable';

/** Components section import **/

describe('ModalRoot', () => {
  let wrapper;

  let getModal = jest.fn();
  let modal = fromJS({
    modalType: 'LOGIN_MODAL_TYPE'
  });

  const context = {name: 'foo'};

  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = shallow(
        <ModalRoot getModal ={getModal}
                   modal    ={modal}
        />, {context}
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should update the count by 1 when invoked by default', () => {
    expect(wrapper.state('counter')).toBe(0);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('counter')).toBe(1);
  });

  it('should add two to the count when the "two" value es true', () => {
    let wrapper = shallow(<ModalRoot two/>);
    expect(wrapper.state('counter')).toBe(0);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('counter')).toBe(2);
  });
});
