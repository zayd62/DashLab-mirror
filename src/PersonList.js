import axios from "axios";
import { Typography } from "@material-ui/core";

import React, { Component } from "react";

var config = {
  headers: { Authorization: "Token d363587cf2999d346a43b48bf1a67b5cc492780c" }
};

export default class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get("http://7989ec42.ngrok.io/auth/users/", config).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <Typography variant="subtitle2">
            <li>Email: {person.email}</li>
            <li>ID: {person.id}</li>
            <li>Username: {person.username}</li>
            <br />
          </Typography>
        ))}
      </ul>
    );
  }
}
