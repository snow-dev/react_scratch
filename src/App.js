/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';

/** Import component section **/
import WorkspaceComponent from './components/shared/Workspace/WorkspaceComponent';
import HeaderContainer from './components/shared/Header/HeaderContainer';
import Footer from './components/shared/Footer/Footer';

/** Import helpers section **/

/** Import resources section **/

/** Import styles section **/
import './resources/styles/App.css';

class App extends Component{
  constructor(props){
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="app-container">
        <HeaderContainer/>
        <WorkspaceComponent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
