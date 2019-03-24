import axios from "axios";
import { Typography } from "@material-ui/core";

import React, { Component } from "react";

var config = {
  headers: { "Content-Type": "application/json" }
};

var body = {
  password: "123dingaling",
  username: "vg"
};

export default class Loginging extends Component {
  state = {
    confirmation: []
  };

  componentDidMount() {
    axios
      .post("http://127.0.0.1:8000/auth/token/login/", body, config)
      .then(res => {
        const confirmation = res.data;
        this.setState({ confirmation });
      });
  }

  render() {
    return <div>{this.state.confirmation.auth_token}</div>;
  }
}
