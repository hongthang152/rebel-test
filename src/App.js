import React, { Component } from 'react';
import './App.css';

import FirstColumn from './components/FirstColumn';
import SecondColumn from './components/SecondColumn';
import ThirdColumn from './components/ThirdColumn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="row">
          <div class="column">
            <FirstColumn/>
          </div>
          <div class="column">
            <SecondColumn/>
          </div>
          <div class="column">
            <ThirdColumn/>
          </div>
        </div>       
      </div>
    );
  }
}

export default App;
