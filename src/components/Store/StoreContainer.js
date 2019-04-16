import React, {Component} from 'react';
import autoBind from 'react-autobind';
import StoreComponent from './StoreComponent';

class StoreContainer extends Component{
  constructor(props){
    super(props);
    autoBind(this);
  }

  render() {
    return <StoreComponent/>;
  }
}

export default StoreContainer;
