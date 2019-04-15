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

export default (props) => {
  return (
    <LocalizeProvider store={store}>
      <Provider store={store}>
        {props.children}
      </Provider>
    </LocalizeProvider>
  )
};