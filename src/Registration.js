import React, { Component, Fragment } from "react";
import {
  Dialog,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio,
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
import "./Registration.css";
export class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role:"",
      email: "",
      fname: "",
      lname: "",
      username: "",
      password: "",
      password2: "",
      errorText: "",
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = name => event => {
    // handles the change in the value of the dropdown
    this.setState({ [name]: event.target.value });
  };


  render() {
    return (
      <Fragment>
        <AppBar position="relative" color="default">
          <Toolbar>
            <Typography varian="h2" noWrap>
              DashLab
            </Typography>
            <div className="Barbutton">
              <Button>Login</Button>
            </div>
          </Toolbar>
        </AppBar>
        <div className="Backbox2">
        <div className="Title1">
          <h1>Create Account</h1>
        </div>
        <form className="Regform">
        <RadioGroup
            className="Role"
            aria-label="Role"
            name="Role"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="JMM"
              control={<Radio />}
              label="Junior Media Manager"
            />
            <FormControlLabel
              value="Administrator"
              control={<Radio />}
              label="Administrator"
            />
            />
          </RadioGroup>
          <div className="data">
            <TextField
              className="fname"
              id="fname"
              label="First Name"
              type="fname"
              autoComplete="fname"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange("fname")}
              value={this.state.fname}
            />
            <TextField
              className="lname"
              id="lname"
              label="Last Name"
              type="lname"
              autoComplete="lname"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange("lname")}
              value={this.state.lname}
            />
            <TextField
              className="email"
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
              className="username"
              id="username"
              label="Username"
              type="username"
              autoComplete="username"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange("username")}
              value={this.state.username}
            />
            <TextField
              className="pass1"
              id="password"
              label="Password"
              type="password"
              autoComplete="password"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange("password")}
              value={this.state.password}
            />
            <TextField
              className="pass2"
              id="password2"
              label="Repeat Password"
              type="password"
              autoComplete="password"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange("password2")}
              value={this.state.password2}
            />
          </div>
          <Button
            onClick={() => {this.handleClick();}}
            className="regbut"
            color="primary"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
      </Fragment>
    );
  }
}

export default Registration;
