import React from 'react';
import './App.css';
import Calculater from './Components/Calculater';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <h1>
          Hello from App
          <Calculater />
        </h1>
      </div>
    );
  }
}

export default App;
