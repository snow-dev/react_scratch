
/** Import react section **/
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

/** Import component section **/
import StoreContainer from './components/Store/StoreContainer';
import App from './App';
import Root from './store/Root';
import {ModalRoot} from './components/shared/Modals/ModalRoot';

/** Import helpers section **/

/** Import resources section **/


ReactDOM.hydrate(
  <Root>
    <Router>
      <Route path="/" component={App}/>
    </Router>
  </Root>,
  document.getElementById("root")
);
