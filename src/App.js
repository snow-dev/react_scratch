import React, {Component} from 'react';
import autoBind from 'react-autobind';
import HomeContainer from './components/Home/HomeContainer';

class App extends Component{
  constructor(props){
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <HomeContainer/>
    );
  }
}

export default HomeContainer;
