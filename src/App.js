import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './pages/Navbar';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Home />

            </div>
          </Route>
          <Route exact path="/calculator">
            <Calculator />
          </Route>
          <Route exact path="/quote">
            <Quote />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
