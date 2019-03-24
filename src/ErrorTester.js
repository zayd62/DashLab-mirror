import React, { Component } from "react";
import { resPassword, resUsername, resPassword2 } from "./errors/errormsg";

function RealTest(typeOfError) {
  var errors;
  Object.keys(typeOfError[1]).forEach(function eachKey(key) {
    errors = typeOfError[1][key];
  });
  return errors;
}

var abc = RealTest(resPassword2);
console.log("abc: ", abc);

export class ErrorTester extends Component {
  render() {
    return <div />;
  }
}

export default ErrorTester;
