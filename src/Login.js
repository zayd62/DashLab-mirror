import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Button,
  Grid,
  InputLabel,
  Input,
  NativeSelect,
  FormControl,
  FormHelperText,
  TextField,
  AppBar,
  Toolbar
} from "@material-ui/core";
import style from "./Login.css";
import * as urls from "./APIURLS";
import MyprofileJMM from "./MyprofileJMM";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: ""
    };
  }

  // tesitng the urls resolve correctly
  componentDidMount() {
    console.log(urls.createuser);
    // console.log()
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = name => event => {
    // handles the change in the value of the dropdown
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.validateForm) {
      this.setState({ errorText: "Email or password is incorrect" });
    }
  };

  render() {
    return (
      <Fragment>
        <AppBar position="relative" color="default">
          <Toolbar>
            <Typography varian="h2" noWrap>
              DashLab
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="Backbox3">
          <div>
            <h1>Login</h1>
          </div>

          <form onSubmit={this.handleSubmit}>
            <FormControl required error={this.state.error}>
              <TextField
                id="email"
                label="Email"
                type="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange("email")}
                value={this.state.email}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange("password")}
                value={this.state.password}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                component={Link}
                to="/JMM"
              >
                Log in
              </Button>
              <Typography variant="body2" color="error">
                {this.state.errorText}
              </Typography>
            </FormControl>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Login;
