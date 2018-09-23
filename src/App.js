import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Food TV!</h1>
        </header>

        <p></p>
        
        <iframe width="500px" height="400px" src="http://tv.giphy.com/?username=shakingfoodgifs"></iframe>

      </div>
    );
  }
}

export default App;
