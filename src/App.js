import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import "./App.css";
import MakeAPost from "./MakeAPost";
import Registration from "./Registration";
import Createsocial from "./Createsocial";
import MyprofileJMM from "./MyprofileJMM";
import MyprofileSMM from "./MyprofileSMM";
import PersonList from "./PersonList";
import Loginging from "./Loginging";
import ErrorTester from "./ErrorTester";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={ErrorTester} />
        <Route path="/jmm/" component={MyprofileJMM} />
        <Route path="/jmm/createPost" component={MakeAPost} />
        <Route path="/admin/createSocial/" component={Createsocial} />
        <Route path="/admin/createUser/" component={Registration} />
      </Router>
    );
  }
}

export default App;
