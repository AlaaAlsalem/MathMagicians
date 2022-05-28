import React from 'react';
import './App.css';
import Calculater from './Components/Calculater';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <h1>
          Hello from App
        </h1>
        <Calculater />

      </div>
    );
  }
}

export default App;
