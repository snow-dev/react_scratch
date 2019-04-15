
/** Import react section **/
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

/** Import component section **/
import HomeContainer from './components/Home/HomeContainer';
import App from './App';
import Root from './store/Root';

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

// const wrapper = document.getElementById('root');
// wrapper ? ReactDOM.render(<HomeContainer/>, wrapper) : false;
