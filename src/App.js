import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import "./App.css";
import MakeAPost from "./MakeAPost";
import Registration from "./Registration";
import Createsocial from "./Createsocial";
import MyprofileJMM from "./MyprofileJMM";
import AdminHome from './AdminHome'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/jmm/" exact component={MyprofileJMM} />
        <Route path="/jmm/createPost" exact component={MakeAPost} />
        <Route path="/admin/" exact component={AdminHome} />
        <Route path="/admin/createSocial" exact component={Createsocial} />
        <Route path="/admin/createUser" exact component={Registration} />
      </Router>
    );
  }
}

export default App;
