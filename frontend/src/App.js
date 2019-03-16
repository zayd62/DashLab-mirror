/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Login from './Login'
import Admin from './Admin'
import JMM from './JMM'
import CreateAccount from './CreateAccount'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login />  */}
        {/* <Admin /> */}
        {/* <JMM /> */}
        <CreateAccount />
      </div>
    );
  }
}

export default App;
