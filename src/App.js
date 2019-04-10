import React, { Component } from 'react';
import './resources/styles/App.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Home name="Snow-Dev from the Storm..."/>
        </header>
      </div>
    );
  }
}

export default App;
