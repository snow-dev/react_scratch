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
  it('should have a modal from type', () => {

  });
});

// describe('directly invoking the incrementCounter method from component instance', () => {
//   it('should update the counter by 1 when invoked by default', () => {
//     const wrapper = shallow(<ModalRoot />);
//     const instance = wrapper.instance();
//     expect(wrapper.state('counter')).toBe(0);
//     instance.incrementCounter(true);
//     expect(wrapper.state('counter')).toBe(2);
//   });
// });
