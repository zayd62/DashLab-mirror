import React, { Component } from "react";
import Login from "./Login";
import "./App.css";
import MakeAPost from "./MakeAPost";
import Registration from "./Registration";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Registration />
        {/* <MakeAPost /> */}
      </div>
    );
  }
}

export default App;
