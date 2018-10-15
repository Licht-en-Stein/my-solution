import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Export from './components/Export';
import PersonalInfo from './components/PersonalInfo';
import Dashboard from './components/Dashboard';
//import FatherInfo from './components/FatherInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Export />
          <PersonalInfo />
          <Dashboard />
        </header>
      </div>
    );
  }
}

export default App;
