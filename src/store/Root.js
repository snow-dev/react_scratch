import {Provider} from 'react-redux';
import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {LocalizeProvider} from 'react-localize-redux';


const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  ));

/**
 * Create a Root wrapper that will provide the Store
 * provider to wrapped elements.
 * We separate this for allow use store on testings.
 * @param props
 * @returns {*}
 */
export default (props) => {
  return (
    <LocalizeProvider store={store}>
      <Provider store={store}>
        {props.children}
      </Provider>
    </LocalizeProvider>
  )
};