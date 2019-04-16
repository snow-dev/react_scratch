/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';

/** Import component section **/
import HomeContainer from './components/Home/HomeContainer';

/** Import helpers section **/

/** Import resources section **/

/** Import styles section **/
import './resources/styles/App.css';
import HeaderContainer from './components/shared/Header/HeaderContainer';

class App extends Component{
  constructor(props){
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="app-container">
        <HeaderContainer/>
        <HomeContainer/>
      </div>
    );
  }
}

export default App;
