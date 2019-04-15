import React, {Component} from 'react';
import autoBind from 'react-autobind';
import HomeComponent from './HomeComponent';

class HomeContainer extends Component{
  constructor(props){
    super(props);
    autoBind(this);

    this.state = {
      title: '',
    };
  }

  render() {
    return (
      <HomeComponent/>
    );
  }
}

export default HomeContainer;
