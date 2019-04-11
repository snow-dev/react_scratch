
import ReactDOM from 'react-dom';
import React from 'react';
import HomeContainer from './components/Home/HomeContainer';
import App from './App';

ReactDOM.hydrate(<HomeContainer/>,
  document.getElementById("root")
);

// const wrapper = document.getElementById('root');
// wrapper ? ReactDOM.render(<HomeContainer/>, wrapper) : false;
