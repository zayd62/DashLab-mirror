import React, { Component } from "react";
import { resPassword, resUsername, resPassword2 } from "./errors/errormsg";

function Testing123() {
  for (var key in resPassword) {
    if (resPassword.hasOwnProperty(key)) {
      console.log(key + " -> " + resPassword[key]);
      for (var keyNest in resPassword[key]) {
        console.log(keyNest + " -> " + resPassword[key].keyNest);
      }
    }
  }
}

function RealTest(typeOfError) {
  Object.keys(typeOfError[1]).forEach(function eachKey(key) {
    console.log(key);
    console.log(typeOfError[1][key]);
  });
}

export class ErrorTester extends Component {
  render() {
    return <div>{RealTest(resPassword2)}</div>;
  }
}

export default ErrorTester;

// console.log(typeOfError[1].username);
// console.log(typeOfError[1][key]);
