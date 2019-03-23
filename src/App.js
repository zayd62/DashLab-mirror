import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import "./App.css";
import MakeAPost from "./MakeAPost";
import Registration from "./Registration";
import Createsocial from "./Createsocial";
import MyprofileJMM from "./MyprofileJMM";
import MyprofileSMM from "./MyprofileSMM";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
